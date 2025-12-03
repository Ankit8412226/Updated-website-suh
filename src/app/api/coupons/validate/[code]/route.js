import connectDB from '@/lib/mongodb';
import Coupon from '@/models/Coupon';
import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
  try {
    await connectDB();
    const { cartTotal, productIds } = await request.json();
    const code = params.code.toUpperCase();

    const coupon = await Coupon.findOne({ code, isActive: true });

    if (!coupon) {
      return NextResponse.json({
        valid: false,
        message: 'Invalid coupon code',
      });
    }

    // Check validity dates
    const now = new Date();
    if (coupon.validFrom && now < coupon.validFrom) {
      return NextResponse.json({
        valid: false,
        message: 'Coupon not yet valid',
      });
    }

    if (coupon.validUntil && now > coupon.validUntil) {
      return NextResponse.json({
        valid: false,
        message: 'Coupon has expired',
      });
    }

    // Check minimum purchase
    if (coupon.minPurchase && cartTotal < coupon.minPurchase) {
      return NextResponse.json({
        valid: false,
        message: `Minimum purchase of $${coupon.minPurchase} required`,
      });
    }

    // Check usage limit
    if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
      return NextResponse.json({
        valid: false,
        message: 'Coupon usage limit reached',
      });
    }

    // Check applicable products
    if (coupon.applicableProducts && coupon.applicableProducts.length > 0) {
      const hasApplicableProduct = productIds.some(id =>
        coupon.applicableProducts.includes(id)
      );
      if (!hasApplicableProduct) {
        return NextResponse.json({
          valid: false,
          message: 'Coupon not applicable to selected products',
        });
      }
    }

    return NextResponse.json({
      valid: true,
      coupon: {
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        maxDiscount: coupon.maxDiscount,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { valid: false, message: error.message },
      { status: 500 }
    );
  }
}

