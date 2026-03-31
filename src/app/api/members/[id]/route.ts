import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Division, Role } from "../../../../../generated/prisma/client";

function getDivisionFromRole(role: Role): Division {
  if (role === "PRESIDENT" || role === "VICE_PRESIDENT" || role === "SECRETARY" || role === "TREASURER" || role === "SERGEANT_AT_ARMS" || role === "IMMEDIATE_PAST_PRESIDENT" || role === "ADVISOR")
    return "BOARD";
  if (role === "COMMUNITY_SERVICE_DIRECTOR" || role === "FINANCE_DIRECTOR" || role === "INTERNATIONAL_UNDERSTANDING_DIRECTOR" || role === "PROFESSIONAL_DEVELOPMENT_DIRECTOR" || role === "CLUB_SERVICE_DIRECTOR" || role === "PUBLIC_IMAGE_DIRECTOR")
    return "DIRECTORS";
  if (role === "MEMBER") return "MEMBERS";
  if (role === "GUEST") return "GUESTS";
  throw new Error("Invalid role");

}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  try {
    await prisma.member.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete member" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // extract the id property of params directly

  try {
    const body = await req.json();

    const existing = await prisma.member.findUnique({ // recommended to make sure the item exists first
      where: { id: Number(id) }, // prisma.id is always a string so we must convert it to a number using Number()
    });

    if (!existing) {
      return NextResponse.json( // stop update if the item does not exist
        { error: "Item not found" },
        { status: 404 }
      );
    }

    // optional validation
    if (body.role && !Object.values(Role).includes(body.role)) { // check if body.division was set 
      return NextResponse.json( // if yes -> check if it matches any of the accepted values we defined
        { error: "Invalid role" },
        { status: 400 }
      );
    }

    const role = body.role ?? existing.role; // nullish coalescing operator ?? -> "use the left value if it exists, otherwise use the right value"
    // if body.role exists, role = body.role. if not, role = existing.role -> guarantees role is never undefined if the user was to submit the update form without selecting a role 

    const updated = await prisma.member.update({
      where: { id: Number(id) }, // prisma.id is always a string so we must convert it to a number using Number()
      data: {
        ...body, // take all properties from body and put them here
        ...(body.imageSrc === "" && { imageSrc: existing.imageSrc }), // later properties override earlier ones
        role, // shorthand for role: role. here we are overriding with role (the value we defined above) just to guarantee that role will not be undefined
        division: getDivisionFromRole(body.role) // if imageSrc sent on update is an empty string -> reuse the existing image -> prevents accidental image loss
      }
    });

    return NextResponse.json(updated, { status: 200 }); // upon success -> return updated item 

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 }
    );
  }
}