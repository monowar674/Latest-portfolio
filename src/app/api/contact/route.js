

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true, 
    auth: {
        user: process.env.SMTP_EMAIL_USER,
        pass: process.env.SMTP_EMAIL_PASS,
    }
});

export async function POST(request) {
  try {
    const formData = await request.json();
    
    const { name, email, subject, phone, message } = formData; 

    const mailOptions = {
      from: process.env.SMTP_EMAIL_USER,
      to: 'monowarhossain2155@gmail.com', 
      
      subject: `New Submission: ${subject} (From: ${name})`, 
      
      html: `
        <h3>New Contact Submission</h3>
        <p><b>Subject:</b> ${subject}</p>
        <table style="border-collapse: collapse;">
          <tr><td style="padding: 5px; border: 1px solid #ddd;"><b>Name:</b></td><td style="padding: 5px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 5px; border: 1px solid #ddd;"><b>Email:</b></td><td style="padding: 5px; border: 1px solid #ddd;">${email}</td></tr>
          
          <tr><td style="padding: 5px; border: 1px solid #ddd;"><b>Phone:</b></td><td style="padding: 5px; border: 1px solid #ddd;">${phone || 'N/A'}</td></tr>
          
          <tr><td style="padding: 5px; border: 1px solid #ddd;"><b>Message:</b></td><td style="padding: 5px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td></tr>
        </table>
      `,
    };
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    
    console.error('--- Nodemailer Error Details ---');
    console.error('Nodemailer Error Message:', error.message);
    console.error('Nodemailer Error Code:', error.code);
    console.error('------------------------------');

    return NextResponse.json(
      { message: 'Failed to send email. Server error.', error: error.message },
      { status: 500 }
    );
  }
}