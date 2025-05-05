import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // You can remove this log if it's unnecessary
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
