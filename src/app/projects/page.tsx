import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/data/projects";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">


      <main className="py-10">
        <h1 className="mb-12 mt-2 text-center text-4xl font-bold text-gray-900">
          Our Projects
        </h1>

        {categories.map((category) => {
          const items = projects.filter((project) => project.category === category);
          if (items.length === 0) return null;

          return (
            <section key={category} className="mb-14">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-pink-600 px-4">
                  {category} Projects
                </h2>


                <div className="ml-6 h-px flex-1 bg-zinc-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 xl:flex xl:overflow-x-auto gap-6 pb-3 px-2 md:px-4 justify-items-center">
                {items.map((item) => (
                  <div key={item.id} className="lg:flex-shrink-0">
                    <ProjectCard
                      href={`/projects/${item.slug}`}
                      title={item.title}
                      description={item.description}
                      imageSrc={item.imageSrc}
                    />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}