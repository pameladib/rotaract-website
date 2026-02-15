type MemberCardProps = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

export default function MemberCard({
  name,
  role,
  bio,
  imageSrc,
}: MemberCardProps) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-6 grid items-center gap-10 md:grid-cols-2">

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={imageSrc}
            alt={name}
            className="
    w-72 h-72
    md:w-80 md:h-80
    object-cover
    shadow-lg
    rounded-xl
  "
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
            {name}
          </h3>

          <p className="mt-2 text-lg text-pink-600">{role}</p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-prose mx-auto md:mx-0">
            {bio}
          </p>

          <div className="mt-6 h-1 w-12 bg-gray-900 mx-auto md:mx-0" />
        </div>

      </div>
    </section>
  );
}