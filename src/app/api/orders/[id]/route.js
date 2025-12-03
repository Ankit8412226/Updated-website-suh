import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Order from '@/models/Order';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await connectDB();
    await verifyToken(request);

    const order = await Order.findOne({ orderNumber: params.id });

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDB();
    await verifyToken(request);

    const data = await request.json();

    const order = await Order.findOneAndUpdate(
      { orderNumber: params.id },
      { ...data, updatedAt: new Date() },
      { new: true }
    );

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

