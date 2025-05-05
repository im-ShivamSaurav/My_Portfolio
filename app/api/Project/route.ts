// app/api/Project/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const data = await prisma.project.findMany();
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error fetching Projects:', error);
    return NextResponse.json({ error: 'Error fetching Projects' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.project.create({ data: body });
    return NextResponse.json(data, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating Project:', error);
    return NextResponse.json({ error: 'Error creating Project' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.project.update({ where: { id: body.id }, data: body });
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error updating Project:', error);
    return NextResponse.json({ error: 'Error updating Project' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error: unknown) {
    console.error('Error deleting Project:', error);
    return NextResponse.json({ error: 'Error deleting Project' }, { status: 500 });
  }
}
