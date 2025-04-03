import nodemailer from "nodemailer";
import { H3Event } from "h3"; 

interface ContactFormBody {
  email: string;
  name: string;
  message: string;
}

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody<ContactFormBody>(event); 
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mr.aungkaungmyat.dev@gmail.com",
      pass: "eztv zjfm smrk wayq",
    },
  });

  const mailOptions = {
    from: "mr.aungkaungmyat.dev@gmail.com",
    replyTo: body.email,
    to: "mr.aungkaungmyat.dev@gmail.com",
    subject: `Contact Form Submission from ${body.name}`,
    text: body.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { message: "Email sent successfully" };
  } catch (error) {
    return { message: "Failed to send email", error };
  }
});
