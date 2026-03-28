import prisma from "@/lib/prisma";
import ProjectsList from "@/components/admin/ProjectsList";

export default async function Members() {
  const projects = await prisma.project.findMany();

  return (
    <ProjectsList projects = {projects} />
  );
}