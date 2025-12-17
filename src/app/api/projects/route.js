import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Project from '@/models/Project';
import Employee from '@/models/Employee';
import { NextResponse } from 'next/server';
import { corsHeaders, handleCORS } from '@/lib/cors';

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

export async function POST(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const data = await request.json();
    const project = new Project(data);
    await project.save();

    // Populate employee details
    await project.populate('assignedEmployees.employeeId');

    return NextResponse.json({
      success: true,
      project,
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

export async function GET(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const serviceType = searchParams.get('serviceType');
    const clientName = searchParams.get('clientName');
    const isActive = searchParams.get('isActive');

    const query = {};
    if (status) query.status = status;
    if (serviceType) query.serviceType = serviceType;
    if (clientName) query.clientName = { $regex: clientName, $options: 'i' };
    if (isActive !== null) query.isActive = isActive === 'true';

    const projects = await Project.find(query)
      .populate('assignedEmployees.employeeId')
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      projects,
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

