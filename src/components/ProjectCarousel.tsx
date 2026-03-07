"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects"; // @ is an alias for the src folder
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard"; // ./ means current folder

export default function ProjectCarousel() {
    const [visibleCount, setVisibleCount] = useState(3);
    const [startIndex, setStartIndex] = useState(0);
    const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

    useEffect(() => {
        if (window.innerWidth < 768) setVisibleCount(1);
        else setVisibleCount(3);
    }, []);

    useEffect(() => {
        const id = setInterval(handleRightClick, 4000);

        return () => clearInterval(id);
    }, []);

    function handleLeftClick() {
        setStartIndex(prev =>
            prev === 0 ? projects.length - visibleCount : prev - 1
        );
    }

    function handleRightClick() {
        setStartIndex(prev =>
            prev === projects.length - visibleCount ? 0 : prev + 1
        );
    }

    return (
        <div className="w-full items-center justify-center gap-6 py-10">
            <h2 className="text-4xl md:text-4xl font-bold text-center mb-10 mt-16">
                Explore Our Projects
            </h2>
            <div className="flex justify-center">

            <button
                onClick={handleLeftClick}
                className="self-center p-3 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
                <ChevronLeft size={28} />
            </button>

            <div className="flex gap-6">
                {visibleProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                    />
                ))}
            </div>

            <button
                onClick={handleRightClick}
                className="self-center p-3 rounded-full bg-white shadow hover:bg-gray-100 transition">
                <ChevronRight size={28} />
            </button>
            </div>
        </div>
    );
}