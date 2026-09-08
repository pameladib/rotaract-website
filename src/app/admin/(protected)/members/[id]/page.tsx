import prisma from "@/lib/prisma";
import AddMemberForm from "@/components/admin/MemberForm";
import { notFound } from "next/navigation";


export default async function UpdateMemberPage(
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const member = await prisma.member.findUnique({
      where: { id: Number(id) }
   });

   if(!member) {
      notFound();
   }

   return <AddMemberForm initialData={member} />;
}