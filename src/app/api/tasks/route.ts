import prisma from "@/lib/prisma";

export async function GET() {
    const fetchedTasks = await prisma.task.findMany();

    return Response.json(fetchedTasks);
}