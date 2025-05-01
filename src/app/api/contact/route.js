import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  // Create a transporter (you can use your Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ACCOUNT, // your email
      pass: process.env.GMAIL_APP_PASSWORD, // use App Password (not your real password!)
    },
    tls: {
      rejectUnauthorized: false, // <--- ADD THIS
    },
  });

  const mailOptions = {
    from: email, // sender email (user input)
    to: process.env.GMAIL_ACCOUNT, // your email to receive message
    subject: subject,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
