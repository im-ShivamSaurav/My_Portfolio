// app/api/Contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch Contact Info
export async function GET() {
  try {
    const contact = await prisma.contact.findFirst();
    return NextResponse.json(contact, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching contact:', error);
    return NextResponse.json({ error: 'Error fetching contact data' }, { status: 500 });
  }
}

// POST - Create new Contact
export async function POST(req: NextRequest) {
  try {
    const { phone, email, address } = await req.json();
    const newContact = await prisma.contact.create({
      data: {
        phone,
        email,
        address,
      },
    });
    return NextResponse.json(newContact, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ error: 'Error creating contact' }, { status: 500 });
  }
}

// PUT - Update Contact
export async function PUT(req: NextRequest) {
  try {
    const { id, phone, email, address } = await req.json();
    const updatedContact = await prisma.contact.update({
      where: { id },
      data: { phone, email, address },
    });
    return NextResponse.json(updatedContact, { status: 200 });
  } catch (error: unknown) {
    console.error('Error updating contact:', error);
    return NextResponse.json({ error: 'Error updating contact' }, { status: 500 });
  }
}

// DELETE - Delete Contact
export async function DELETE({ url }: NextRequest) {
  try {
    const { searchParams } = new URL(url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing contact ID' }, { status: 400 });
    }

    await prisma.contact.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Contact deleted' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error deleting contact:', error);
    return NextResponse.json({ error: 'Error deleting contact' }, { status: 500 });
  }
}
