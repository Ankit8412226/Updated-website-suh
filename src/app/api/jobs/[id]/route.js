import connectDB from '@/lib/mongodb';
import Job from '@/models/Job';
import { verifyToken } from '@/middleware/auth';
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

    const job = await Job.findById(params.id);

    if (!job) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json(
      { success: true, job },
      { status: 200, headers: corsHeaders() }
    );
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

    const job = await Job.findByIdAndUpdate(
      params.id,
      data,
      { new: true, runValidators: true }
    );

    if (!job) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json(
      { success: true, job },
      { status: 200, headers: corsHeaders() }
    );
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

    const job = await Job.findByIdAndDelete(params.id);

    if (!job) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Job deleted successfully' },
      { status: 200, headers: corsHeaders() }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}


