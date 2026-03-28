import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ProjectCategory } from "@/generated/prisma/client";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  try {
    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project" },
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

    const existing = await prisma.project.findUnique({ // recommended to make sure the item exists first
      where: { id: Number(id) }, // prisma.id is always a string so we must convert it to a number using Number()
    });

    if (!existing) {
      return NextResponse.json( // stop update if the item does not exist
        { error: "Item not found" },
        { status: 404 }
      );
    }

    // optional validation
    if (body.category && !Object.values(ProjectCategory).includes(body.category)) { // check if body.category was set 
      return NextResponse.json( // if yes -> check if it matches any of the accepted values we defined
        { error: "Invalid division" },
        { status: 400 }
      );
    }

    const updated = await prisma.project.update({
      where: { id: Number(id) }, // prisma.id is always a string so we must convert it to a number using Number()
      data: {
        ...body, // take everything the frontend sent and use it to update
        ...(body.imageSrc === "" && { imageSrc: existing.imageSrc }) // but if the imageSrc sent is an empty string "", reuse the existing image -> prevents image loss if no image is sent on update
      } // this is conditional object building using the spread operator ... and JS AND (&&) which returns the first falsy value or the last one if all values are truthy
    });

    /* If user clears image -> restore old image
       If user uploads new image -> use new one 
    */

    return NextResponse.json(updated, { status: 200 }); // upon success -> return updated item 

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 }
    );
  }
}