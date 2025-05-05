// app/api/BaseInfo/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const data = await prisma.baseInfo.findFirst();
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error fetching BaseInfo:', error);
    return NextResponse.json({ error: 'Error fetching BaseInfo' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.baseInfo.create({ data: body });
    return NextResponse.json(data, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating BaseInfo:', error);
    return NextResponse.json({ error: 'Error creating BaseInfo' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.baseInfo.update({ where: { id: body.id }, data: body });
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error updating BaseInfo:', error);
    return NextResponse.json({ error: 'Error updating BaseInfo' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.baseInfo.delete({ where: { id } });
    return NextResponse.json({ message: 'BaseInfo deleted' });
  } catch (error: unknown) {
    console.error('Error deleting BaseInfo:', error);
    return NextResponse.json({ error: 'Error deleting BaseInfo' }, { status: 500 });
  }
}
