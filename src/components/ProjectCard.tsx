import Link from "next/link";

type ProjectCardProps = {
    href: string;          
    title: string;
    description: string;
    imageSrc: string;      
};

export default function ProjectCard({
    href,
    title,
    description,
    imageSrc,
}: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="
  group block overflow-hidden rounded-2xl bg-white
  shadow-md transition-transform duration-200
  hover:scale-[1.03] hover:shadow-xl
  w-64
"
        >
            <div className="relative h-48 w-full">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-semibold group-hover:text-pink-600 transition-colors">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    );
}