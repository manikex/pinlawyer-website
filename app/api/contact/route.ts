import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email, pinCode, caseType, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'mail.smtp2go.com',
      port: Number(process.env.EMAIL_PORT) || 2525,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Enquiry from ${name}`,
      html: `
        <h2>New Enquiry from Pin Lawyer Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>PIN Code:</strong> ${pinCode}</p>
        <p><strong>Case Type:</strong> ${caseType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Contact email sent:', info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Contact email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}