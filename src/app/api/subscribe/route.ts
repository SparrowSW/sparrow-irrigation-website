import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  // Basic email validation
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  try {
    // Send email notification instead of storing in database
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL as string,
      to: [process.env.CONTACT_EMAIL as string],
      subject: `New Notification Subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #005A9C;">New Notification Subscriber</h2>
          <p>A new user has subscribed to receive notifications.</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p>This email address has been added to the notification list.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send notification email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Successfully subscribed!', data }, { status: 201 });

  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
