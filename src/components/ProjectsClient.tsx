"use client";

import type { Project } from "../../generated/prisma/client";
import ProjectCard from "./ProjectCard";
import { ProjectCategory } from "../../generated/prisma/client";
import { generateRotaryYears} from "@/lib/utils";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

export default function ProjectsClient({ projects }: { projects: Project[] }) {

  const categoryLabels = {
    COMMUNITY_SERVICE: "Community Service",
    INTERNATIONAL_UNDERSTANDING: "International Understanding",
    PROFESSIONAL_DEVELOPMENT: "Professional Development",
    CLUB_SERVICE: "Club Service",
    FINANCE: "Finance",
    PUBLIC_IMAGE: "Public Image"
  };

  const rotaryYears = generateRotaryYears(2024, 3);
  const [selectedYear, setSelectedYear] = useState("ALL");

  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="py-10">
        <h1 className="mb-12 mt-2 text-center text-4xl font-bold text-gray-900">
          Our Projects
        </h1>

       <div className="flex justify-end px-4 mb-6">
  <div className="w-52">
    <label className="text-sm text-gray-500 mb-1 block">
      Filter by year
    </label>

    <Select
      value={selectedYear}
      onValueChange={(value) => setSelectedYear(value)}
    >
      <SelectTrigger className="w-full rounded-lg border border-zinc-200 bg-white shadow-sm hover:border-pink-400 focus:ring-2 focus:ring-pink-200 transition">
        <SelectValue placeholder="All Years" />
      </SelectTrigger>

      <SelectContent className="rounded-lg border border-zinc-200 shadow-md">
        <SelectItem value="ALL">All Years</SelectItem>

        {rotaryYears.map((year) => (
          <SelectItem
            key={year}
            value={year}
            className="cursor-pointer hover:bg-pink-50"
          >
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>

        {Object.keys(categoryLabels).map((category) => {
          const items = projects.filter(
            (project) => {
              if (project.category !== category as ProjectCategory) return false;
              if (selectedYear === "ALL") return true;
              return project.rotaryYear === selectedYear;
            } 
          );

          if (items.length === 0) return null;

          return (
            <section key={category} className="mb-14">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-pink-600 px-4">
                  {categoryLabels[category as ProjectCategory]} Projects
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