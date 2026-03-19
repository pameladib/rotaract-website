import prisma from "@/lib/prisma";

export default async function Members() {
  const projects = await prisma.project.findMany();

  const categoryLabels = {
    COMMUNITY_SERVICE: "Community Service",
    INTERNATIONAL_UNDERSTANDING: "International Understanding",
    PROFESSIONAL_DEVELOPMENT: "Professional Development",
    CLUB_SERVICE: "Club Service",
    FINANCE: "Finance",
    PUBLIC_IMAGE: "Public Image"
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Manage Projects
      </h1>

      <div className="space-y-4 max-w-3xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-sm px-5 py-4 flex items-center justify-between"
          >
            
            <div>
              <p className="font-semibold text-gray-900">
                {project.title}
              </p>
              <p className="text-sm text-gray-500">
                {categoryLabels[project.category]}
              </p>
            </div>

            
            <div className="flex gap-3">
              <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition">
                Edit
              </button>

              <button className="px-3 py-1.5 rounded-md bg-red-100 text-red-600 hover:bg-red-200 text-sm transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}