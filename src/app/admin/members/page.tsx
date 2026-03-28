import prisma from "@/lib/prisma";
import MembersList from "@/components/admin/MembersList";

export const dynamic = "force-dynamic";

export default async function Members() {
  const members = await prisma.member.findMany();

  return (
      <MembersList members={members}/>
  );
}