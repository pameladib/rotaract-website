export type Division =
    "Board" | "Directors" | "Members" | "Guests";

export type Member = {
    id: number;
    name: string;
    role: string;
    bio: string;
    occupation: string;
    imageSrc: string;
    division: Division;
}

export const divisions: Division[] = ["Board", "Directors", "Members", "Guests"];
export const members: Member[] = [
    {
        id: 1,
        name: "Marwan El Kareh",
        role: "President",
        bio: "A strong believer that leadership is defined by action rather than position. Enjoys coffee, trading, and watching football.",
        occupation: `Industrial Engineer, working in supply chain`,
        imageSrc: "/members/marwan.jpeg",
        division: "Board"
    },
    {
        id: 2,
        name: "Josephine Ghazale",
        role: "Vice President",
        bio: "Believes that kindness is one of life’s core purposes. In a world that can often feel uncertain, choosing kindness and creating meaningful memories with the people we love are what give life its true value.",
        occupation: "Economist",
        imageSrc: "/members/josephine.jpeg",
        division: "Board"
    },
     {
        id: 3,
        name: "George Ghaleb",
        role: "Treasurer",
        bio: "His passion for medicine led him to join Rotaract, whose mission and values align with his commitment to helping others and creating a positive impact.",
        occupation: "Medical Student",
        imageSrc: "/members/george.jpg",
        division: "Board"
    },
    {
        id: 4,
        name: "Charbel Namnoum",
        role: "Sergeant-at-Arms (SAA)",
        bio: "Passionate about community service and nature, with a love for hiking, birdwatching, and wildlife.",
        occupation: "Agriculture Engineer",
        imageSrc: "/members/charbel.jpeg",
        division: "Board"
    },
    {
        id: 5,
        name: "Sasha Dib",
        role: "Immediate Past President",
        bio: "Rotaractor since 2020. Passionate about service, sustainability, and creating real impact.",
        occupation: "Environmental Consultant",
        imageSrc: "/members/sasha.jpeg",
        division: "Board"
    },
    {
        id: 6,
        name: "Joseph Al Am",
        role: "Advisor",
        bio: "Software engineer passionate about technology, data, and innovation. He works in software quality assurance and financial data systems and has held leadership roles in Rotaract, including Club President and District Webmaster.",
        occupation: "QA and Automation Engineer",
        imageSrc: "/members/joseph.jpeg",
        division: "Board"
    },
    {
        id: 7,
        name: "Anthony Geitany",
        role: "Community Service Director",
        bio: "Enjoys football, cars, and technology, and is always interested in discovering new innovations and trends in these fields.",
        occupation: "Computer Engineering Student",
        imageSrc: "/members/anthony.jpeg",
        division: "Directors"
    },
      {
        id: 8,
        name: "Rita Douaihy",
        role: "Finance Director",
        bio: "A pre-med student passionate about medicine and driven by curiosity and continuous learning. Enjoys staying active and contributing to community initiatives.",
        occupation: "Pre-med Student",
        imageSrc: "members/rita.jpg",
        division: "Directors"
    },
    
    {
        id: 9,
        name: "Pamela Dib",
        role: "International Understanding Director",
        bio: "Driven by curiosity, technology, and personal growth, with a passion for building projects, staying active, and always learning something new.",
        occupation: "Computer Science Student | Web Development Enthusiast",
        imageSrc: "/members/pamela.jpg",
        division: "Directors"
    },
     {
        id: 10,
        name: "Teressa Fenianos",
        role: "Professional Development Director",
        bio: "A passionate reader who enjoys exploring new ideas through books. She also stays active through boxing and Pilates, embracing both strength and balance.",
        occupation: "Business Student",
        imageSrc: "/members/teressa.jpeg",
        division: "Directors"
    },
    
     {
        id: 11,
        name: "Marilyn Barmo",
        role: "Club Service Director",
        bio: "Likes keeping things real and straightforward, and says what she actually thinks.",
        occupation: "Undergraduate Law Student",
        imageSrc: "members/marilyn.jpeg",
        division: "Directors"
    },
   
     {
        id: 12,
        name: "Joya Ghostine",
        role: "Public Image Director",
        bio: "Passionate about social media with a love for pilates, nightlife and marketing.",
        occupation: "Mass Media and Communication Student",
        imageSrc: "members/joya.jpeg",
        division: "Directors"
    },
   
    {
        id: 13,
        name: "Claudy Bacha",
        role: "Guest",
        bio: "Passionate about helping children communicate and grow. In her free time, she enjoys reading and discovering new cuisines as a self-proclaimed foodie.",
        occupation: "Speech Therapist",
        imageSrc: "/members/claudy.jpg",
        division: "Guests"
    },
     {
        id: 14,
        name: "Maria Christina Frem",
        role: "Guest",
        bio: "A law student with a strong interest in politics and the legal field, passionate about justice and social issues. Also enjoys fashion and creative expression.",
        occupation: "Law Student",
        imageSrc: "/members/maria.jpg",
        division: "Guests"
    },
     {
        id: 15,
        name: "Joe Finianos",
        role: "Guest",
        bio: "A law student passionate about justice and the study of law. Interested in developing legal knowledge and skills.",
        occupation: "Law Student",
        imageSrc: "/members/joe.jpg",
        division: "Guests"
    },
    {
        id: 16,
        name: "Anna Maria Ghaleb",
        role: "Guest",
        bio: "In her free time, she enjoys reading books on self-development or romance, practicing yoga, and staying active in her community through social and religious events.",
        occupation: "Pharmacist",
        imageSrc: "/members/anna.jpg",
        division: "Guests"
    },

];