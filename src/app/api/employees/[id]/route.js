import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Employee from '@/models/Employee';
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

    const employee = await Employee.findOne({
      $or: [
        { _id: params.id },
        { employeeId: params.id },
        { email: params.id }
      ]
    });

    if (!employee) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      employee,
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
    const employee = await Employee.findOneAndUpdate(
      {
        $or: [
          { _id: params.id },
          { employeeId: params.id },
          { email: params.id }
        ]
      },
      data,
      { new: true, runValidators: true }
    );

    if (!employee) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      employee,
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

    const employee = await Employee.findOneAndDelete({
      $or: [
        { _id: params.id },
        { employeeId: params.id },
        { email: params.id }
      ]
    });

    if (!employee) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Employee deleted successfully',
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

