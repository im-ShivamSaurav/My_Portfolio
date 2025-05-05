// app/api/Skill/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const data = await prisma.skill.findMany();
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error fetching Skills:', error);
    return NextResponse.json({ error: 'Error fetching Skills' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.skill.create({ data: body });
    return NextResponse.json(data, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating Skill:', error);
    return NextResponse.json({ error: 'Error creating Skill' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.skill.update({ where: { id: body.id }, data: body });
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error updating Skill:', error);
    return NextResponse.json({ error: 'Error updating Skill' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.skill.delete({ where: { id } });
    return NextResponse.json({ message: 'Skill deleted' });
  } catch (error: unknown) {
    console.error('Error deleting Skill:', error);
    return NextResponse.json({ error: 'Error deleting Skill' }, { status: 500 });
  }
}
