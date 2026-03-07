import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white font-sans">
  

     <main className="mx-auto max-w-6xl px-6 py-10">

  {/* Title centered at the top */}
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold">{project.title}</h1>
  </div>

  {/* Two-column content */}
  <div className="grid gap-10 md:grid-cols-2">

    {/* Left side - text */}
    <article className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        {project.description}
      </p>

      <h2 className="text-2xl font-semibold mt-6">What we did</h2>

      <p className="text-gray-700 leading-relaxed">
        {/* Later you will replace this with full article content */}
        Detailed story about the project, impact, partners, etc.
      </p>
    </article>

    {/* Right side - images */}
    <aside className="space-y-4">
      <Image
        src={project.imageSrc}
        alt={project.title}
        width={800}
        height={1000}
        className="w-full h-auto rounded-2xl shadow-sm"
      />

      {/* Later you can add more images here */}
    </aside>

  </div>
</main>
    </div>
  );
}