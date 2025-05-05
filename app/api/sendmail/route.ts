import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handle POST requests to send email
export async function POST(req: Request) {
  const { name, email, phone, reason, message } = await req.json();

  // Create a transporter to send the email
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change this if you use a different email service
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Gmail app password (recommended over your account password)
    },
  });

  // Email options
  const mailOptions = {
    from: email, // The email of the person submitting the form
    to: process.env.EMAIL_USER, // Your email where submissions will be sent
    subject: `New Message from ${name} - ${reason}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Reason:</strong> ${reason}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Cast error to a known type (Error)
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    console.error("Unknown error:", error);
    return NextResponse.json({ success: false, error: "An unknown error occurred" }, { status: 500 });
  }
}
