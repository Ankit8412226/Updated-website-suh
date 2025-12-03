import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Testimonial from '@/models/Testimonial';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({ isActive: true }).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      testimonials,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    await verifyToken(request);

    const data = await request.json();
    const testimonial = new Testimonial(data);
    await testimonial.save();

    return NextResponse.json({
      success: true,
      testimonial,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

