import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
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
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }])
      .select();

    if (error) {
      // Handle specific errors, e.g., unique constraint violation
      if (error.code === '23505') { // PostgreSQL unique violation code
        return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
      }
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Successfully subscribed!', data }, { status: 201 });

  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
