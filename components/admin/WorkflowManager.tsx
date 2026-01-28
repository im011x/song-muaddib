'use client';

import { useState } from 'react';
import { siteConfig, getWorkflow, WorkflowStep, updateSiteConfig } from '@/lib/cms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Edit, Trash2, Plus, Save, X } from 'lucide-react';

export default function WorkflowManager() {
  const [workflow, setWorkflow] = useState(getWorkflow());
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingStep, setEditingStep] = useState<Partial<WorkflowStep> | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (step: WorkflowStep, index: number) => {
    setEditingIndex(index);
    setEditingStep({ ...step });
  };

  const handleSave = () => {
    if (!editingStep || editingIndex === null) return;

    const updatedWorkflow = [...workflow];
    updatedWorkflow[editingIndex] = { ...workflow[editingIndex], ...editingStep } as WorkflowStep;
    setWorkflow(updatedWorkflow);
    updateSiteConfig({ workflow: updatedWorkflow });
    setEditingIndex(null);
    setEditingStep(null);
  };

  const handleDelete = (index: number) => {
    if (confirm('이 단계를 삭제하시겠습니까?')) {
      const updatedWorkflow = workflow.filter((_, i) => i !== index);
      setWorkflow(updatedWorkflow);
      updateSiteConfig({ workflow: updatedWorkflow });
    }
  };

  const handleAdd = () => {
    const newStep: WorkflowStep = {
      number: String(workflow.length + 1).padStart(2, '0'),
      title: '',
      description: '',
      customerRole: '',
      muaddibRole: '',
    };
    setWorkflow([...workflow, newStep]);
    setEditingIndex(workflow.length);
    setEditingStep(newStep);
    setIsAdding(true);
  };

  const handleCancel = () => {
    if (isAdding) {
      setWorkflow(workflow.filter((_, i) => i !== editingIndex));
    }
    setEditingIndex(null);
    setEditingStep(null);
    setIsAdding(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>워크플로우 관리</CardTitle>
            <CardDescription>작업 프로세스 단계를 추가, 수정, 삭제할 수 있습니다.</CardDescription>
          </div>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" />
            새 단계 추가
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {workflow.map((step, index) => (
            <Card key={index} className="border-2">
              {editingIndex === index ? (
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <Label>번호</Label>
                    <Input
                      value={editingStep?.number || ''}
                      onChange={(e) => setEditingStep({ ...editingStep, number: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>제목</Label>
                    <Input
                      value={editingStep?.title || ''}
                      onChange={(e) => setEditingStep({ ...editingStep, title: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>설명</Label>
                    <Textarea
                      value={editingStep?.description || ''}
                      onChange={(e) => setEditingStep({ ...editingStep, description: e.target.value })}
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>고객 역할</Label>
                    <Input
                      value={editingStep?.customerRole || ''}
                      onChange={(e) => setEditingStep({ ...editingStep, customerRole: e.target.value })}
                      className="mt-1"
                      placeholder="예: 비전, 스타일, 요구사항 제시"
                    />
                  </div>
                  <div>
                    <Label>MUADDIB 역할</Label>
                    <Input
                      value={editingStep?.muaddibRole || ''}
                      onChange={(e) => setEditingStep({ ...editingStep, muaddibRole: e.target.value })}
                      className="mt-1"
                      placeholder="예: 프로젝트 목표 이해 및 제안"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm">
                      <Save className="mr-2 h-4 w-4" />
                      저장
                    </Button>
                    <Button onClick={handleCancel} variant="outline" size="sm">
                      <X className="mr-2 h-4 w-4" />
                      취소
                    </Button>
                  </div>
                </CardContent>
              ) : (
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-3xl font-bold text-primary/30">{step.number}</span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-foreground/60 mb-4">{step.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-background border border-primary/20 rounded p-2">
                          <span className="font-semibold text-primary">고객: </span>
                          <span className="text-foreground/70">{step.customerRole || '-'}</span>
                        </div>
                        <div className="bg-primary/5 border border-primary/30 rounded p-2">
                          <span className="font-semibold text-primary">MUADDIB: </span>
                          <span className="text-foreground/70">{step.muaddibRole || '-'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(step, index)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
