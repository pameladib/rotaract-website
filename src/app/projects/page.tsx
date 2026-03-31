import ProjectsClient from "@/components/ProjectsClient";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // Next.js server-only config -> tells Next.js to not cache this page and always fetch fresh data

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: [
      { rotaryYear: "desc" },
      { createdAt: "desc" }
    ],
  });

  return <ProjectsClient projects={projects} />;
}