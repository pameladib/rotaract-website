import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Division, Role } from "../../../../generated/prisma/client";

function getDivisionFromRole(role: Role): Division {
    if(role === "PRESIDENT" || role === "VICE_PRESIDENT" || role === "SECRETARY" || role === "TREASURER" || role === "SERGEANT_AT_ARMS" || role === "IMMEDIATE_PAST_PRESIDENT" || role === "ADVISOR")
        return "BOARD";
    if(role === "COMMUNITY_SERVICE_DIRECTOR" || role === "FINANCE_DIRECTOR" || role === "INTERNATIONAL_UNDERSTANDING_DIRECTOR" || role === "PROFESSIONAL_DEVELOPMENT_DIRECTOR" || role ===  "CLUB_SERVICE_DIRECTOR" || role ===  "PUBLIC_IMAGE_DIRECTOR")
        return "DIRECTORS";
    if(role === "MEMBER") return "MEMBERS";
    if(role === "GUEST") return "GUESTS";
    throw new Error("Invalid role");

}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, role, bio, occupation, imageSrc } = body;

        // validation
        if (!name || !role || !occupation || !imageSrc) { // if any of the fields is null -> stop creation
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 } // bad request
            );
        }

        if (!Object.values(Role).includes(role)) { // if role does not match any of the accepted values we defined
            return NextResponse.json(
                { error: "Invalid role" },
                { status: 400 }
            );
        }

        const division = getDivisionFromRole(role);

        const member = await prisma.member.create({
            data: {
                name, // object shorthand syntax, same as name: name
                role,
                bio,
                occupation,
                division,
                imageSrc,
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