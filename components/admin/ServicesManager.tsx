'use client';

import { useState } from 'react';
import { siteConfig, getServices, Service, updateSiteConfig } from '@/lib/cms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Edit, Trash2, Plus, Save, X } from 'lucide-react';

export default function ServicesManager() {
  const [services, setServices] = useState(getServices());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingService, setEditingService] = useState<Partial<Service> | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (service: Service) => {
    setEditingId(service.id);
    setEditingService({ ...service });
  };

  const handleSave = () => {
    if (!editingService || !editingId) return;

    const updatedServices = services.map(s =>
      s.id === editingId ? { ...s, ...editingService } as Service : s
    );
    setServices(updatedServices);
    updateSiteConfig({ services: updatedServices });
    setEditingId(null);
    setEditingService(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('이 서비스를 삭제하시겠습니까?')) {
      const updatedServices = services.filter(s => s.id !== id);
      setServices(updatedServices);
      updateSiteConfig({ services: updatedServices });
    }
  };

  const handleAdd = () => {
    const newService: Service = {
      id: Date.now().toString(),
      title: '',
      description: '',
      price: '',
      features: [],
      popular: false,
    };
    setServices([...services, newService]);
    setEditingId(newService.id);
    setEditingService(newService);
    setIsAdding(true);
  };

  const handleCancel = () => {
    if (isAdding) {
      setServices(services.filter(s => s.id !== editingId));
    }
    setEditingId(null);
    setEditingService(null);
    setIsAdding(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>서비스 관리</CardTitle>
            <CardDescription>가격 패키지를 추가, 수정, 삭제할 수 있습니다.</CardDescription>
          </div>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" />
            새 서비스 추가
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {services.map((service) => (
            <Card key={service.id} className="border-2">
              {editingId === service.id ? (
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <Label>제목</Label>
                    <Input
                      value={editingService?.title || ''}
                      onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>설명</Label>
                    <Textarea
                      value={editingService?.description || ''}
                      onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                      className="mt-1"
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label>가격</Label>
                    <Input
                      value={editingService?.price || ''}
                      onChange={(e) => setEditingService({ ...editingService, price: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`popular-${service.id}`}
                      checked={editingService?.popular || false}
                      onChange={(e) => setEditingService({ ...editingService, popular: e.target.checked })}
                    />
                    <Label htmlFor={`popular-${service.id}`}>인기 서비스로 표시</Label>
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
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-foreground/60 mb-2">{service.description}</p>
                      <p className="text-lg font-semibold text-primary mb-2">{service.price}</p>
                      {service.popular && (
                        <span className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                          인기
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(service.id)}
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
