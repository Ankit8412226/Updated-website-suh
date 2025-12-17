import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Sale from '@/models/Sale';
import { NextResponse } from 'next/server';
import { corsHeaders, handleCORS } from '@/lib/cors';

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

export async function GET(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const sale = await Sale.findById(params.id);

    if (!sale) {
      return NextResponse.json(
        { error: 'Sale not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      sale,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const data = await request.json();
    const sale = await Sale.findByIdAndUpdate(
      params.id,
      data,
      { new: true, runValidators: true }
    );

    if (!sale) {
      return NextResponse.json(
        { error: 'Sale not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      sale,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const sale = await Sale.findByIdAndDelete(params.id);

    if (!sale) {
      return NextResponse.json(
        { error: 'Sale not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Sale deleted successfully',
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

