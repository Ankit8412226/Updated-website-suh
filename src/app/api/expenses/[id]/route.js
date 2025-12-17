import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Expense from '@/models/Expense';
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

    const expense = await Expense.findById(params.id);

    if (!expense) {
      return NextResponse.json(
        { error: 'Expense not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      expense,
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
    const expense = await Expense.findByIdAndUpdate(
      params.id,
      data,
      { new: true, runValidators: true }
    );

    if (!expense) {
      return NextResponse.json(
        { error: 'Expense not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      expense,
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

    const expense = await Expense.findByIdAndDelete(params.id);

    if (!expense) {
      return NextResponse.json(
        { error: 'Expense not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Expense deleted successfully',
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

