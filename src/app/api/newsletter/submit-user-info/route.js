import connectDB from '@/lib/mongodb';
import UserInfo from '@/models/UserInfo';
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
    const { name, interest, favorite } = await request.json();

    if (!name || !interest || !favorite) {
      return NextResponse.json(
        { error: 'All fields are required' },
        {
          status: 400,
          headers: corsHeaders(),
        }
      );
    }

    const userInfo = new UserInfo({ name, interest, favorite });
    await userInfo.save();

    return NextResponse.json({
      success: true,
      message: 'User info submitted successfully',
      userInfo,
    }, {
      status: 201,
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
        headers: corsHeaders(),
      }
    );
  }
}
