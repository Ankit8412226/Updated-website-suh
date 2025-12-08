import connectDB from '@/lib/mongodb';
import UserInfo from '@/models/UserInfo';
import { NextResponse } from 'next/server';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request) {
  try {
    await connectDB();
    const { name, interest, favorite } = await request.json();

    if (!name || !interest || !favorite) {
      return NextResponse.json(
        { error: 'All fields are required' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
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
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}
