import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 이메일 설정 - 실제 사용 시 환경 변수로 관리하세요
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || 'sokee.help+muaddib@gmail.com';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    // 입력 검증
    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 전송 설정
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // 465 포트는 SSL/TLS 사용
      auth: SMTP_USER && SMTP_PASS ? {
        user: SMTP_USER,
        pass: SMTP_PASS,
      } : undefined,
      tls: {
        // 자체 서명 인증서를 사용하는 경우 (회사 메일 등)
        rejectUnauthorized: false
      }
    });

    // 이메일 내용
    const mailOptions = {
      from: SMTP_USER || `"SONG MUADDIB" <noreply@songmuaddib.com>`,
      to: RECIPIENT_EMAIL,
      subject: `[프로젝트 문의] ${type} - ${name}`,
      html: `
        <h2>새로운 프로젝트 문의가 접수되었습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>프로젝트 유형:</strong> ${type}</p>
        <p><strong>메시지:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">이 이메일은 SONG MUADDIB 웹사이트의 문의 폼을 통해 전송되었습니다.</p>
      `,
      replyTo: email,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: '문의가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 오류:', error);
    return NextResponse.json(
      { error: '이메일 전송 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
