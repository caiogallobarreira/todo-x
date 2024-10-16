import { PrismaClient } from '@prisma/client';
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { withAccelerate } from '@prisma/extension-accelerate';

const neon = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaNeon(neon);

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter }).$extends(withAccelerate());
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;