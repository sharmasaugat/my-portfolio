import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'sharma.saugat123@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      replyTo: email
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}