
export type ProjectCategory = "Community Service" | "Finance" | "International Understanding" | "Professional Development" | "Club Service";


export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    imageSrc: string;
    category: ProjectCategory;
    content: string;
    gallery?: string[];
}

export const categories: ProjectCategory[] = ["Community Service", "Finance", "International Understanding", "Professional Development", "Club Service"];
export const projects: Project[] = [
    {
        id: 1,
        slug: "care-kits-distribution",
        title: "Care Kits Distribution",
        description: "Distributing essential hygiene kits to families in need in the Zgharta area.",
        imageSrc: "/carekits.jpg",
        category: "Community Service",
        content: `During the Christmas season, our club organized the Christmas Care Kits initiative to support families in need across the Zgharta area. 
        The goal of the project was to provide essential hygiene and household supplies to help ease daily challenges for families facing difficult circumstances.
        Club members worked together to prepare and distribute care kits containing a range of essential items.
        Each package included basic hygiene and cleaning products such as toilet paper, toothpaste, wipes, toothbrushes, shampoo, shower gel, floor detergent, bleach, laundry detergent, Dettol, paper tissues, and sanitary pads.
        Beyond the material support, the initiative aimed to spread the spirit of solidarity and compassion that defines the holiday season.
        By working together to assemble and distribute the kits, Rotaract members were able to directly contribute to improving the well- being of families in our community.
        The project reflects our club’s ongoing commitment to community service and meaningful local impact, demonstrating how small collective actions can make a real difference.`,
        gallery: ["/carekits1.jpg", "/carekits2.jpg", "/carekits3.jpg", "/carekits4.jpg"]
    },

    {
        id: 2,
        slug: "the-housemaid-movie-screening",
        title: "The Housemaid movie screening",
        description: "A fundraiser movie screening organized to support patients undergoing treatment for tongue cancer.",
        imageSrc: "/moviescreeningfundraiser.jpg",
        category: "Finance",
        content: `In collaboration with Rotaract clubs of De Beyrouth Millenium, Lebanon Eco, Beirut Cosmopolitan, and AUB, as well as Vox Cinemas, our club organized a special fundraiser screening of the film “The Housemaid”.
        The event brought together community members for an evening of cinema while supporting an important cause.

All proceeds from the screening were dedicated to supporting the treatment of patients diagnosed with tongue cancer, helping raise awareness about the challenges faced by individuals battling the disease and contributing to their medical support.

The event combined entertainment with meaningful impact, demonstrating how cultural activities can also serve as platforms for solidarity and community engagement. 
Attendees not only enjoyed a compelling film but also participated in an initiative aimed at making a tangible difference in people’s lives.

Through partnerships with local organizations and community participation, the project highlighted the power of collaboration in supporting important health-related causes.`
    },

    {
        id: 3,
        slug: "hello-2452",
        title: "Hello 2452!",
        description: "A series of meetings with Rotaract clubs across District 2452 to exchange ideas and strengthen connections.",
        imageSrc: "/hello2452.png",
        category: "International Understanding",
        content: `Hello 2452! is an initiative created to strengthen connections between Rotaract clubs across District 2452.

Through a series of one-on-one meetings, members from our club met with members from another Rotaract club from the district to get to know each other, exchange ideas, and talk about potential collaborations. These meetings are a great opportunity to learn about how other clubs operate, the projects they organize, and the challenges they face.

So far, we’ve had the chance to meet with nine clubs in the district, bringing us closer to our goal of connecting with every Rotaract club in District 2452. With only three clubs left to meet, we’re excited to keep building these relationships.

Hello 2452! is all about strengthening the Rotaract network, sharing ideas, and creating opportunities for future collaboration between clubs.`,
        gallery: ["/hello2452!1.jpeg", "/hello2452!2.jpeg", "/hello2452!3.jpeg","/hello2452!4.jpeg", "/hello2452!5.jpeg", "/hello2452!6.jpeg","/hello2452!7.jpeg", "/hello2452!8.jpeg", "/hello2452!9.jpeg"]
    },
    {
        id: 4,
        slug: "many-cultures-one-table",
        title: "Many Cultures, One Table",
        description: "An international cultural exchange where our club discovers and experiences other cultures with Rotaract partners around the world.",
        imageSrc: "/culturalnights.jpg",
        category: "International Understanding",
        content: `Many Cultures, One Table is an international cultural exchange initiative currently being developed by our club. 
        The goal of the project is to create meaningful connections between Rotaract clubs around the world while celebrating cultural diversity.

Through this initiative, each participating club hosts a cultural evening dedicated to another country. During the event, members explore the partner club’s culture by preparing traditional dishes, watching a recommended local film, and learning about important cultural traditions.

For our club, this project is an opportunity to discover new cultures while also sharing our own. When collaborating with an international Rotaract club, each club introduces its country to the other, allowing both groups to experience the culture in an interactive and engaging way.

After both cultural nights take place, members from the two clubs will meet online to exchange their experiences, discuss what they learned, and strengthen the connection between the clubs.

Many Cultures, One Table aims to promote international understanding, cultural curiosity, and friendship between Rotaractors across borders — values that lie at the heart of the Rotaract spirit.`
    },
    {
        id: 5,
        slug: "racx",
        title: "RACX!",
        description: "An event featuring guest speakers and networking opportunities for Rotaractors and young professionals.",
        imageSrc: "/racx.jpg",
        category: "Professional Development",
        content: `RACx was an event designed to bring together Rotaractors, entrepreneurs, and young professionals for a day of inspiration, learning, and meaningful connections.

Held on January 31, 2026, at Beirut Digital District (BDD), the event featured a series of talks by three guest speakers who shared their personal journeys, professional experiences, and insights on entrepreneurship and success. Through their stories, attendees gained valuable perspectives on overcoming challenges, building careers, and pursuing ambitious goals.

Beyond the talks, RACx also created a space for members to connect with Rotaractors from different clubs and expand their professional networks. The event provided an opportunity for participants to exchange ideas, meet new people, and build relationships within the Rotaract community.

By combining inspiring conversations with networking opportunities, RACx encouraged participants to reflect on their own paths and left many attendees feeling motivated to pursue new ideas and initiatives in their personal and professional lives.`,
        gallery: ["/racx1.jpg", "/racx2.jpg", "/racx3.jpg"]
    },

    {
        id: 6,
        slug: "a-day-at-the-ranch",
        title: "A day at The Ranch",
        description: "A fun day spent at the Ranch with Rotaract Club of Tripoli El Mina, enjoying breakfast, horse riding, and a hike together.",
        imageSrc: "/theranch.jpg",
        category: "Club Service",
        content: `A Day at the Ranch was a joint activity organized with the Rotaract Club of Tripoli El Mina, giving members from both clubs the chance to spend a day outdoors and get to know each other better.

The day started with a relaxed breakfast at the Ranch, where everyone had time to talk, meet new people, and enjoy the peaceful setting before the activities began.

After breakfast, members had the opportunity to ride horses around the ranch, which was a fun experience for both beginners and those who had ridden before. It was a great way to try something different while enjoying the beautiful surroundings.

Later, the group also went on a short hike, taking advantage of the nature around the ranch and continuing the conversations along the way.

The day was a great opportunity to connect with members from another Rotaract club, spend time outdoors, and create new friendships in a relaxed and enjoyable atmosphere.`,
        gallery: ["/theranch1.jpg", "/theranch2.jpg", "/theranch3.jpg", "/theranch4.jpg"]
    }


];