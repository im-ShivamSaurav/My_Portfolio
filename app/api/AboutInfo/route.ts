// app/api/AboutInfo/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const data = await prisma.aboutInfo.findFirst();
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error fetching AboutInfo:', error);
    return NextResponse.json({ error: 'Error fetching AboutInfo' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.aboutInfo.create({ data: body });
    return NextResponse.json(data, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating AboutInfo:', error);
    return NextResponse.json({ error: 'Error creating AboutInfo' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.aboutInfo.update({ where: { id: body.id }, data: body });
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error updating AboutInfo:', error);
    return NextResponse.json({ error: 'Error updating AboutInfo' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.aboutInfo.delete({ where: { id } });
    return NextResponse.json({ message: 'AboutInfo deleted' });
  } catch (error: unknown) {
    console.error('Error deleting AboutInfo:', error);
    return NextResponse.json({ error: 'Error deleting AboutInfo' }, { status: 500 });
  }
}
