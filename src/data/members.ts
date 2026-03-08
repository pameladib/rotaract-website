export type Division = 
    "Board" | "Directors" | "Members" | "Guests";

export type Member = {
    id: number;
    name: string;
    role: string;
    bio: string;
    imageSrc: string;
    division: Division;
}

export const divisions: Division[] = ["Board", "Directors", "Members", "Guests"];
export const members: Member[] = [
    {
        id: 1,
        name: "Marwan Kareh",
        role: "President",
        bio: "Industrial engineer",
        imageSrc: "/marwan.jpg",
        division: "Board"
    },
    {
        id: 2,
        name: "Sasha Dib",
        role: "Immediate Past President",
        bio: "Environmental engineer",
        imageSrc: "/sasha.jpg",
        division: "Board"
    },
    {
        id: 3,
        name: "George Ghaleb",
        role: "Treasurer",
        bio: "Med Student",
        imageSrc: "/george.jpg",
        division: "Board"
    },
    {
        id: 4,
        name: "Josephine Ghazale",
        role: "Vice President",
        bio: "Economics",
        imageSrc: "/josephine.jpg",
        division: "Board"
    },
    {
        id: 5,
        name: "Pamela Dib",
        role: "International Understanding Director",
        bio: "CS student",
        imageSrc: "/pamela.jpg",
        division: "Directors"
    },
    {
        id: 6,
        name: "Claudy Bacha",
        role: "Guest",
        bio: "Speech Therapist",
        imageSrc: "/claudy.jpg",
        division: "Guests"
    },

];