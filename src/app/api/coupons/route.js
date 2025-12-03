import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Coupon from '@/models/Coupon';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectDB();
    const user = await verifyToken(request);

    if (user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const data = await request.json();
    const coupon = new Coupon(data);
    await coupon.save();

    return NextResponse.json({
      success: true,
      coupon,
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
    await verifyToken(request);

    const coupons = await Coupon.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      coupons,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

