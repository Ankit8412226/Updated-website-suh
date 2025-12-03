import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Newsletter from '@/models/Newsletter';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectDB();
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json({
        success: true,
        message: 'Email already subscribed',
      });
    }

    const newsletter = new Newsletter({ email });
    await newsletter.save();

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    await verifyToken(request); // Require auth

    const subscribers = await Newsletter.find({ isActive: true }).sort({ subscribedAt: -1 });

    return NextResponse.json({
      success: true,
      subscribers,
      count: subscribers.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 401 }
    );
  }
}

