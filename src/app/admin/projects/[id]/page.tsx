import ProjectForm from "@/components/admin/ProjectForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function UpdateProjectPage(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const project = await prisma.project.findUnique({
        where: { id: Number(id) }
    });

    if (!project) {
        notFound();
    }

    return <ProjectForm initialData={project} />
}