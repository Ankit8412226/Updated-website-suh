import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Order from '@/models/Order';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();

    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    const order = new Order({
      ...data,
      orderNumber,
    });
    await order.save();

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

export async function GET(request) {
  try {
    await connectDB();
    await verifyToken(request); // Require auth

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    let query = {};
    if (email) {
      query['customer.email'] = email;
    }

    const orders = await Order.find(query).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      orders,
      count: orders.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 401 }
    );
  }
}

