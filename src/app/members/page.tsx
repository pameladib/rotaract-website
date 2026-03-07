import MemberCard from "@/components/MemberCard";
import Navbar from "@/components/Navbar";
import { members, divisions } from "@/data/members";

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
    

      <main className="py-10">
        <h1 className="mb-12 mt-2 text-center text-4xl font-bold text-gray-900">
          Meet Our Members!
        </h1>

        {divisions.map((division) => {
          const items = members.filter(
            (member) => member.division === division
          );

          if (items.length === 0) return null;

          return (
            <section key={division} className="mb-16">
              
              {/* Centered Division Header */}
              <div className="flex items-center justify-center mb-8 px-4">
                <div className="h-px flex-1 bg-zinc-200" />

                <h2 className="mx-6 text-3xl font-semibold text-pink-600 text-center">
                  {division}
                </h2>

                <div className="h-px flex-1 bg-zinc-200" />
              </div>

              {/* Members List */}
              <div className="space-y-10 px-4">
                {items.map((item) => (
                  <MemberCard
                    key={item.id}
                    name={item.name}
                    role={item.role}
                    bio={item.bio}
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