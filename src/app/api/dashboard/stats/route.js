import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Contact from '@/models/Contact';
import Newsletter from '@/models/Newsletter';
import Order from '@/models/Order';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await connectDB();
    await verifyToken(request);

    const [
      totalOrders,
      totalRevenue,
      totalContacts,
      totalSubscribers,
      recentOrders,
    ] = await Promise.all([
      Order.countDocuments(),
      Order.aggregate([
        { $match: { status: { $ne: 'cancelled' } } },
        { $group: { _id: null, total: { $sum: '$total' } } },
      ]),
      Contact.countDocuments(),
      Newsletter.countDocuments({ isActive: true }),
      Order.find().sort({ createdAt: -1 }).limit(10),
    ]);

    const revenue = totalRevenue[0]?.total || 0;

    return NextResponse.json({
      success: true,
      stats: {
        totalOrders,
        totalRevenue: revenue,
        totalContacts,
        totalSubscribers,
        recentOrders,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

