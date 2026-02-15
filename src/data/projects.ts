
export type ProjectCategory = "Community Service" | "Finance" | "International Understanding" | "Professional Development" | "Club Service";


export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    imageSrc: string;
    category: ProjectCategory;
}

export const categories: ProjectCategory[] = ["Community Service", "Finance", "International Understanding", "Professional Development", "Club Service"];
export const projects: Project[] = [
    {
        id: 1,
        slug: "care-kits-distribution",
        title: "Care Kits Distribution",
        description: "distributing care kits for people in need",
        imageSrc: "/carekits.jpg",
        category: "Community Service",
    },

     {
        id: 2,
        slug: "the-housemaid-movie-screening",
        title: "The Housemaid movie screening",
        description: "Fundraiser to support the treatment of tongue cancer patients",
        imageSrc: "/moviescreeningfundraiser.jpg",
        category: "Finance",
    },

     {
        id: 3,
        slug: "hello-2452",
        title: "Hello 2452!",
        description: "Meeting clubs of the district",
        imageSrc: "/hello2452.png",
        category: "International Understanding",
    },
     {
        id: 4,
        slug: "many-cultures-one-table",
        title: "Many Cultures, One Table",
        description: "Cultural nights",
        imageSrc: "/culturalnights.jpg",
        category: "International Understanding",
    },
     {
        id: 5,
        slug: "explore-the-world-with-rotaract",
        title: "Explore The World With Rotaract",
        description: "Explore countries and claim your Rotaract Passport!",
        imageSrc: "/explorewithrotaract.jpg",
        category: "International Understanding",
    },
     {
        id: 6,
        slug: "racx",
        title: "RACX!",
        description: "Networking and PD sessions",
        imageSrc: "/racx.jpg",
        category: "Professional Development",
    },

    {
        id: 7,
        slug: "a-day-at-the-ranch",
        title: "A day at The Ranch",
        description: "with Rotaract Tripoli Al Mina",
        imageSrc: "/theranch.jpg",
        category: "Club Service",
    }


];