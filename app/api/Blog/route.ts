// app/api/Blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const data = await prisma.blog.findMany();
    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching Blogs:', error.message);
    } else {
      console.error('Unknown error fetching Blogs:', error);
    }
    return NextResponse.json({ error: 'Error fetching Blogs' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.blog.create({ data: body });
    return NextResponse.json(data, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error creating Blog:', error.message);
    } else {
      console.error('Unknown error creating Blog:', error);
    }
    return NextResponse.json({ error: 'Error creating Blog' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await prisma.blog.update({ where: { id: body.id }, data: body });
    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error updating Blog:', error.message);
    } else {
      console.error('Unknown error updating Blog:', error);
    }
    return NextResponse.json({ error: 'Error updating Blog' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.blog.delete({ where: { id } });
    return NextResponse.json({ message: 'Blog deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error deleting Blog:', error.message);
    } else {
      console.error('Unknown error deleting Blog:', error);
    }
    return NextResponse.json({ error: 'Error deleting Blog' }, { status: 500 });
  }
}
