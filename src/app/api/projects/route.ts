import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ProjectCategory } from "@/generated/prisma/client";

async function generateUniqueSlug(title: string) {
    const baseSlug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");

    let slug = baseSlug;
    let count = 2;

    while (true) {
        const existing = await prisma.project.findUnique({
            where: { slug },
        });

        if (!existing) return slug;

        slug = `${baseSlug}-${count}`;
        count++;
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, description, category, content, imageSrc, rotaryYear } = body;

        // validation
        if (!title || !description || !category || !content || !imageSrc) { // if any of the fields is null -> stop creation
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 } // bad request
            );
        }

        const slug = await generateUniqueSlug(title);

        if (!Object.values(ProjectCategory).includes(category)) { // if category does not match any of the accepted values we defined
            return NextResponse.json(
                { error: "Invalid category" },
                { status: 400 }
            );
        }

        const project = await prisma.project.create({
            data: {
                slug,
                title,
                description,
                imageSrc,
                category,
                content,
                rotaryYear
            }
        });

        return NextResponse.json(project, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create project" },
            { status: 500 }
        );
    }
}     