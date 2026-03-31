import MemberCard from "@/components/MemberCard";
import { Division, Role } from "../../../generated/prisma/client";
import prisma from "@/lib/prisma";
import type { Member } from "../../../generated/prisma/client";

export const dynamic = "force-dynamic";

const BOARD_ORDER = [
  "PRESIDENT",
  "VICE_PRESIDENT",
  "SECRETARY",
  "TREASURER",
  "SERGEANT_AT_ARMS",
  "IMMEDIATE_PAST_PRESIDENT",
  "ADVISOR"
];

const DIRECTOR_ORDER = [
  "COMMUNITY_SERVICE_DIRECTOR",
  "FINANCE_DIRECTOR",
  "INTERNATIONAL_UNDERSTANDING_DIRECTOR",
  "PROFESSIONAL_DEVELOPMENT_DIRECTOR",
  "CLUB_SERVICE_DIRECTOR",
  "PUBLIC_IMAGE_DIRECTOR"
];

function sortMembers(members: Member[], division: Division) {
  const filtered = members.filter(m => m.division === division);

  return filtered.sort((a, b) => {
    if (division === "BOARD") {
      return BOARD_ORDER.indexOf(a.role) - BOARD_ORDER.indexOf(b.role);
    }

    if (division === "DIRECTORS") {
      return DIRECTOR_ORDER.indexOf(a.role) - DIRECTOR_ORDER.indexOf(b.role);
    }

    return a.createdAt.getTime() - b.createdAt.getTime();
  });
}



export default async function MembersPage() {
  const members = await prisma.member.findMany({
    orderBy: {
      createdAt: "asc"
    }
  });


  const divisionLabels = {
    BOARD: "Board",
    DIRECTORS: "Directors",
    MEMBERS: "Members",
    GUESTS: "Guests",
  }

  const roleLabels = {
    PRESIDENT: "President",
    VICE_PRESIDENT: "Vice President",
    SECRETARY: "Secretary",
    TREASURER: "Treasurer",
    SERGEANT_AT_ARMS: "Sergeant At Arms",
    IMMEDIATE_PAST_PRESIDENT: "Immediate Past President",
    ADVISOR: "Advisor",
    COMMUNITY_SERVICE_DIRECTOR: "Community Service Director",
    FINANCE_DIRECTOR: "Finance Director",
    INTERNATIONAL_UNDERSTANDING_DIRECTOR: "International Understanding Director",
    PROFESSIONAL_DEVELOPMENT_DIRECTOR: "Professional Development Director",
    CLUB_SERVICE_DIRECTOR: "Club Service Director",
    PUBLIC_IMAGE_DIRECTOR: "Public Image Director",
    MEMBER: "Member",
    GUEST: "Guest"
  };


  return (
    <div className="min-h-screen bg-zinc-50">


      <main className="py-10">
        <h1 className="mb-12 mt-2 text-center text-4xl font-bold text-gray-900">
          Meet Our Members!
        </h1>

        {(Object.keys(divisionLabels) as Division[]).map((division) => {
          const items = sortMembers(members, division);

          if (items.length === 0) return null;

          return (
            <section key={division} className="mb-16">


              <div className="flex items-center justify-center mb-8 px-4">
                <div className="h-px flex-1 bg-zinc-200" />

                <h2 className="mx-6 text-3xl font-semibold text-pink-600 text-center">
                  {divisionLabels[division as Division]}
                </h2>

                <div className="h-px flex-1 bg-zinc-200" />
              </div>


              <div className="space-y-10 px-4 ">
                {items.map((item) => (
                  <MemberCard
                    key={item.id}
                    name={item.name}
                    role={roleLabels[item.role as Role]}
                    bio={item.bio ?? undefined}
                    occupation={item.occupation}
                    imageSrc={item.imageSrc}
                  />
                ))}
              </div>

            </section>
          );
        })}
      </main>
    </div>
  );
}