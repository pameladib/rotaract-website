import prisma from "@/lib/prisma";
import ProjectsList from "@/components/admin/ProjectsList";

export const dynamic = "force-dynamic";

export default async function Members() {
  const projects = await prisma.project.findMany();

  return (
    <ProjectsList projects = {projects} />
  );
}