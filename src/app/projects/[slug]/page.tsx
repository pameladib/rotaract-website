import Image from "next/image";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function ProjectPage({
  params // function receives one argument -> object with params property -> use object destructuring to directly extract params
}: {
  params: Promise<{ slug: string }>; // a Promise that will resolve into an object like { slug: string }
}) {
  const { slug } = await params; // params is a promise
  /* we must await it -> it resolves into an object -> we use { slug } (object destructuring) to extract its slug property directly 
  same as:
  const obj = await params;
  const slug = obj.slug;*/

  const project = await prisma.project.findUnique({
    where: { slug },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white font-sans">


      <main className="mx-auto max-w-6xl px-6 py-10">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">{project.title}</h1>
        </div>


        <div className="grid gap-10 md:grid-cols-2">

          <article className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>

            <h2 className="text-2xl font-semibold mt-6">What we did</h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {project.content}
            </p>
          </article>

          <aside className="space-y-4">
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={800}
              height={1000}
              className="w-full h-auto rounded-2xl shadow-sm"
            />
          </aside>

        </div>


        {project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {project.gallery.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto"
                />
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}