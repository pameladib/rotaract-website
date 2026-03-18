import { PrismaClient, ProjectCategory, Division } from "../src/generated/prisma/client";
import { projects } from "@/data/projects";
import { members } from "@/data/members";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! })
});

function convertCategory(category: string) {
  return category.toUpperCase().replaceAll(" ", "_");
}

function convertDivision(division: string) {
  return division.toUpperCase();
}

async function main() {

  await prisma.project.createMany({
    data: projects.map(({ id, ...p }) => ({
      ...p,
      category: convertCategory(p.category) as ProjectCategory,
      gallery: p.gallery ?? [],
    })),
    skipDuplicates: true,
  });

  await prisma.member.createMany({
    data: members.map(({ id, ...m }) => ({
      ...m,
      division: convertDivision(m.division) as Division,
    })),
    skipDuplicates: true,
  });

  console.log("Seeding done 🌱");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());