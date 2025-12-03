import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectDB();
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      contact,
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

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 401 }
    );
  }
}

