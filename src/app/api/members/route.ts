import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Division } from "@/generated/prisma/client";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, role, bio, occupation, division, imageSrc } = body;

        // validation
        if (!name || !role || !occupation || !division) { // if any of the fields is null -> stop creation
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 } // bad request
            );
        }

        if (!Object.values(Division).includes(division)) { // if division does not match any of the accepted values we defined
            return NextResponse.json(
                { error: "Invalid division" },
                { status: 400 }
            );
        }

        const member = await prisma.member.create({
            data: {
                name,
                role,
                bio,
                occupation,
                division,
                imageSrc
            }
        });

        return NextResponse.json(member, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create member" },
            { status: 500 }
        );
    }
}     