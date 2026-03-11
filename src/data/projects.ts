
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
        imageSrc: "/carekits/carekits.jpg",
        category: "Community Service",
        content: `During the Christmas season, our club organized the Christmas Care Kits initiative to support families in need across the Zgharta area. 
        The goal of the project was to provide essential hygiene and household supplies to help ease daily challenges for families facing difficult circumstances.
        Club members worked together to prepare and distribute care kits containing a range of essential items.
        Each package included basic hygiene and cleaning products such as toilet paper, toothpaste, wipes, toothbrushes, shampoo, shower gel, floor detergent, bleach, laundry detergent, Dettol, paper tissues, and sanitary pads.
        Beyond the material support, the initiative aimed to spread the spirit of solidarity and compassion that defines the holiday season.
        By working together to assemble and distribute the kits, Rotaract members were able to directly contribute to improving the well- being of families in our community.
        The project reflects our club’s ongoing commitment to community service and meaningful local impact, demonstrating how small collective actions can make a real difference.`,
        gallery: ["/carekits/carekits1.jpg", "/carekits/carekits2.jpg", "/carekits/carekits3.jpg", "/carekits/carekits4.jpg"]
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
        title: "Hello, 2452!",
        description: "A series of meetings with Rotaract clubs across District 2452 to exchange ideas and strengthen connections.",
        imageSrc: "/hello2452/hello2452.png",
        category: "International Understanding",
        content: `Hello 2452! is an initiative created to strengthen connections between Rotaract clubs across District 2452.

Through a series of one-on-one meetings, members from our club met with members from another Rotaract club from the district to get to know each other, exchange ideas, and talk about potential collaborations. These meetings are a great opportunity to learn about how other clubs operate, the projects they organize, and the challenges they face.

So far, we’ve had the chance to meet with nine clubs in the district, bringing us closer to our goal of connecting with every Rotaract club in District 2452. With only three clubs left to meet, we’re excited to keep building these relationships.

Hello 2452! is all about strengthening the Rotaract network, sharing ideas, and creating opportunities for future collaboration between clubs.`,
        gallery: ["/hello2452/hello2452!1.jpeg", "/hello2452/hello2452!2.jpeg", "/hello2452/hello2452!3.jpeg", "/hello2452/hello2452!4.jpeg", "/hello2452/hello2452!5.jpeg", "/hello2452/hello2452!6.jpeg", "/hello2452/hello2452!7.jpeg", "/hello2452/hello2452!8.jpeg", "/hello2452/hello2452!9.jpeg"]
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
        title: "RACx",
        description: "An event featuring guest speakers and networking opportunities for Rotaractors and young professionals.",
        imageSrc: "/racx/racx4.jpg",
        category: "Professional Development",
        content: `RACx was an event designed to bring together Rotaractors, entrepreneurs, and young professionals for a day of inspiration, learning, and meaningful connections.

Held on January 31, 2026, at Beirut Digital District (BDD), the event featured a series of talks by three guest speakers who shared their personal journeys, professional experiences, and insights on entrepreneurship and success. Through their stories, attendees gained valuable perspectives on overcoming challenges, building careers, and pursuing ambitious goals.

Beyond the talks, RACx also created a space for members to connect with Rotaractors from different clubs and expand their professional networks. The event provided an opportunity for participants to exchange ideas, meet new people, and build relationships within the Rotaract community.

By combining inspiring conversations with networking opportunities, RACx encouraged participants to reflect on their own paths and left many attendees feeling motivated to pursue new ideas and initiatives in their personal and professional lives.`,
        gallery: ["/racx/racx1.jpg", "/racx/racx2.jpg", "/racx/racx3.jpg"]
    },

    {
        id: 6,
        slug: "a-day-at-the-ranch",
        title: "A day at The Ranch",
        description: "A fun day spent at the Ranch with Rotaract Club of Tripoli El Mina, enjoying breakfast, horse riding, and a hike together.",
        imageSrc: "/theranch/theranch.jpg",
        category: "Club Service",
        content: `A Day at the Ranch was a joint activity organized with the Rotaract Club of Tripoli El Mina, giving members from both clubs the chance to spend a day outdoors and get to know each other better.

The day started with a relaxed breakfast at the Ranch, where everyone had time to talk, meet new people, and enjoy the peaceful setting before the activities began.

After breakfast, members had the opportunity to ride horses around the ranch, which was a fun experience for both beginners and those who had ridden before. It was a great way to try something different while enjoying the beautiful surroundings.

Later, the group also went on a short hike, taking advantage of the nature around the ranch and continuing the conversations along the way.

The day was a great opportunity to connect with members from another Rotaract club, spend time outdoors, and create new friendships in a relaxed and enjoyable atmosphere.`,
        gallery: ["/theranch/theranch1.jpg", "/theranch/theranch2.jpg", "/theranch/theranch3.jpg", "/theranch/theranch4.jpg"]
    },
    {
        id: 7,
        slug: "book-giving-day",
        title: "Book Giving Day",
        description: "A reading activity organized to celebrate Armenia’s Book Giving Day, encouraging members to discover new books and share their love of reading.",
        imageSrc: "/bookgivingday/bookgivingday.JPG",
        category: "International Understanding",
        content: `Book Giving Day is a tradition celebrated in Armenia on February 19, the birthday of the renowned Armenian poet and writer Hovhannes Tumanyan. Established in 2008, the initiative encourages people to gift books to friends, family, and children as a way of promoting reading, literature, and cultural values.

Inspired by this initiative launched by the Rotaract Club of Baghramyan Yerevan, our club joined the celebration by organizing a small reading activity for our members.

Each member brought a copy of their favorite book, and all the books were placed together in a pyramid. Members then randomly selected a book from the collection to read, giving everyone the opportunity to discover a new story recommended by someone else.

The activity was a simple yet meaningful way to celebrate Book Giving Day while encouraging reading and sharing our love for books with one another.`,
        gallery: ["/bookgivingday/1.jpg", "/bookgivingday/2.jpg", "/bookgivingday/3.jpg", "/bookgivingday/4.jpg", "/bookgivingday/5.jpg", "/bookgivingday/6.jpg", "/bookgivingday/7.jpg", "/bookgivingday/8.jpg"]
    },
    {
        id: 8,
        slug: "dental-health-awareness-session",
        title: "Dental Health Awareness Session",
        description: "An awareness session organized to educate students about dental hygiene and healthy habits.",
        imageSrc: "/dentalhealthawareness/dentalhealthawareness.jpg",
        category: "Professional Development",
        content: `In collaboration with Pro Dental Clinic and Dr. Nathalie Awkar Kareh, our club organized a dental health awareness session for students at Antonines School Zgharta.

During the session, Dr. Kareh spoke with students about the importance of oral hygiene, proper brushing techniques, and simple habits that help maintain healthy teeth. The goal was to raise awareness about dental care and encourage students to take better care of their oral health.

At the end of the session, over 170 participating students received toothbrushes and toothpaste, generously provided by Pro Dental Clinic.

Through this initiative, we aimed to promote healthier habits among young students while combining community service with education.`,
        gallery: ["/dentalhealthawareness/1.jpeg", "/dentalhealthawareness/2.jpeg", "/dentalhealthawareness/3.jpg", "/dentalhealthawareness/4.jpg", "/dentalhealthawareness/5.jpg", "/dentalhealthawareness/6.jpg", "/dentalhealthawareness/7.jpg", "/dentalhealthawareness/8.jpg", "/dentalhealthawareness/9.jpg",]
    },
    {
        id: 9,
        slug: "valentines-elderly-visit",
        title: " Valentine’s Elderly Visit 2026",
        description: "A visit to a local elderly home to share moments of warmth and companionship on Valentine’s Day.",
        imageSrc: "/elderlyvisit/elderlyvisit.jpeg",
        category: "Community Service",
        content: `To celebrate Valentine’s Day in a meaningful way, our members visited a local elderly home to spend time with its residents.

During the visit, we shared flowers, cake, and juice with the elderly while enjoying conversations and moments together. The goal of the visit was simply to bring joy and companionship to residents who may not often receive visitors.

The activity reminded us that small gestures can make a meaningful difference and that sharing time and kindness is one of the most valuable forms of service.
`,
        gallery: ["/elderlyvisit/1.JPG", "/elderlyvisit/2.JPG", "/elderlyvisit/3.JPG", "/elderlyvisit/4.JPG", "/elderlyvisit/5.JPG", "/elderlyvisit/6.JPG", "/elderlyvisit/7.JPG",]
    },
    {
        id: 10,
        slug: "bowling-night",
        title: "Bowling Night",
        description: "A friendly social gathering with Rotaract Club of Tripoli to strengthen connections between clubs.",
        imageSrc: "/bowling/bowling.jpg",
        category: "Club Service",
        content: `Our club organized a fun bowling night together with Rotaract Club of Tripoli.

The evening gave members from both clubs the chance to meet, interact, and enjoy a relaxed activity outside of regular meetings and projects. Between games, members shared conversations, laughs, and friendly competition.

Events like this help strengthen the relationships between Rotaract clubs while creating opportunities for future collaborations and friendships.`,
        gallery: ["/bowling/1.jpg", "/bowling/2.jpg"]
    },
    {
        id: 11,
        slug: "game-night-pyjama-edition",
        title: "Game Night – Pyjama Edition",
        description: "A cozy social evening where members gathered in their pajamas for games, food, and fun.",
        imageSrc: "/pyjamanight.jpg",
        category: "Club Service",
        content: `For this special edition of our game night, members were invited to come dressed in their pajamas for a relaxed and cozy evening together.

The night included a variety of games, food, and lots of laughter as members enjoyed spending time together in a fun and informal setting.

Events like these help strengthen friendships within the club and create memorable moments beyond our service projects.`
    },
    {
        id: 12,
        slug: "annual-christmas-dinner",
        title: "Annual Christmas Dinner",
        description: "A festive gathering where members celebrated the holiday season together.",
        imageSrc: "/christmasdinner/christmasdinner.jpg",
        category: "Club Service",
        content: `Our annual Christmas dinner brought members together to celebrate the holiday season in a warm and festive atmosphere.

The evening included cheese, wine, games, and plenty of conversation, giving everyone the chance to relax and enjoy time together outside of our regular meetings and projects.

The dinner was a great opportunity for members to reflect on the year, celebrate the club’s achievements, and create new memories together.`,
        gallery: ["/christmasdinner/1.JPG", "/christmasdinner/2.JPG", "/christmasdinner/3.JPG", "/christmasdinner/4.JPG", "/christmasdinner/5.JPG", "/christmasdinner/6.JPG", "/christmasdinner/7.JPG", "/christmasdinner/8.JPG"]
    },
    {
        id: 13,
        slug: "light-a-candle-change-a-life",
        title: "Light a Candle, Change a Life",
        description: "A holiday fundraiser where candle boxes were sold to support families in need.",
        imageSrc: "/candle.jpg",
        category: "Finance",
        content: `“Light a Candle, Change a Life” was a holiday fundraising initiative organized during the Christmas season.

Members sold boxes of candles to raise funds, with all proceeds dedicated to supporting families in need in our community.

The funds raised through this initiative were used to help prepare care kits containing essential hygiene and household supplies for families facing difficult circumstances.

Through this project, our club combined the spirit of the holidays with meaningful community service.`
    },
    {
        id: 39,
        slug: "meeting-the-pope",
        title: "Meeting The Pope",
        description: "Nine members of the Rotaract Club of Zgharta Zawie participated in a youth gathering at Bkerki during the visit of Pope Leo XIV to Lebanon.",
        imageSrc: "/popevisit/popevisit.jpg",
        category: "Club Service",
        content: `In December, Pope Leo XIV visited Lebanon and held a special gathering with young people at Bkerki, bringing together youth from across the country to share a moment of reflection, dialogue, and unity.

Nine members from the Rotaract Club of Zgharta Zawie had the opportunity to attend this gathering and be part of the event. The meeting brought together young people from different backgrounds to listen to messages of hope, peace, and responsibility toward building a better future.

For our members, the experience was both inspiring and meaningful. It offered a rare opportunity to participate in a historic moment and to reflect on the role young people can play in promoting service, compassion, and positive change within their communities.`,
gallery: ["/popevisit/1.jpg","/popevisit/2.jpg","/popevisit/3.jpg","/popevisit/4.jpg",]
    },
    {
        id: 14,
        slug: "sainte-barbe-night",
        title: "Sainte Barbe Night",
        description: "A festive gathering where members celebrated Sainte Barbe with costumes and games.",
        imageSrc: "/saintbarbe/saintbarbe.jpg",
        category: "Club Service",
        content: `To celebrate Sainte Barbe, our members gathered for a themed evening filled with costumes, games, and fun activities.

Members dressed up and participated in games while enjoying a lively and festive atmosphere. The event allowed everyone to celebrate the tradition together while strengthening friendships within the club.

It was a fun and memorable evening that brought members together through laughter and shared traditions.`,
gallery: ["/saintbarbe/1.jpg","/saintbarbe/2.jpg","/saintbarbe/3.jpg","/saintbarbe/4.jpg","/saintbarbe/5.jpg","/saintbarbe/6.jpg","/saintbarbe/7.jpg","/saintbarbe/8.jpg"]
    },
     {
        id: 15,
        slug: "back-to-school-kits",
        title: "Back To School Kits",
        description: "A community service project providing school kits to students in need.",
        imageSrc: "/schoolkits.jpeg",
        category: "Community Service",
        content: `As part of our commitment to supporting education, our club organized the Back to School Kits project.

Through this initiative, we distributed 200 school kits to students across two schools in the Zgharta area. Each kit contained essential school supplies to help students start the academic year with the materials they need.

The project aimed to ease the financial burden on families while encouraging students to continue their education with confidence and motivation.`
    },
     {
        id: 16,
        slug: "ehden-by-bike",
        title: "Ehden By Bike",
        description: "A cycling event organized in Ehden to raise awareness for breast cancer.",
        imageSrc: "/ehdenbybike/race.jpg",
        category: "Community Service",
        content: `“Ehden By Bike” was a cycling event organized during Breast Cancer Awareness Month.

Participants gathered in Ehden to take part in a bike race that combined sport, community engagement, and awareness for an important cause.

The event aimed to promote healthy lifestyles while raising awareness about breast cancer and the importance of early detection.`,
gallery: ["/ehdenbybike/1.JPG","/ehdenbybike/2.JPG","/ehdenbybike/3.JPG","/ehdenbybike/4.JPG","/ehdenbybike/5.JPG","/ehdenbybike/6.JPG","/ehdenbybike/7.JPG","/ehdenbybike/8.JPG",]
    },
     {
        id: 17,
        slug: "chess-sessions",
        title: "Chess Sessions",
        description: "An internal professional development activity where members learned and practiced chess.",
        imageSrc: "/chesssession.jpg",
        category: "Professional Development",
        content: `Our club organized internal chess sessions as part of a professional development activity for members.

During these sessions, participants learned the basics of the game, explored different strategies, and practiced playing together.

The activity provided a fun and engaging way for members to develop strategic thinking, patience, and problem-solving skills while spending time together.`
    },
     {
        id: 18,
        slug: "tour-de-beyrouth",
        title: "Tour the Beyrouth",
        description: "A cultural visit organized with other Rotaract clubs to rediscover the history and beauty of Beirut.",
        imageSrc: "/tourdebeyrouth.jpg",
        category: "Club Service",
        content: `On the occasion of World Tourism Day, our members joined Rotaractors from three other clubs — Rotaract De Beyrouth, Rotaract Beirut Cedars, and Rotaract Beirut Metropolitan — for a cultural exploration of the capital.

Together, participants toured different areas of Beirut, rediscovering its history, architecture, and cultural landmarks.

The activity was a great opportunity to appreciate the beauty and heritage of the city while strengthening connections between Rotaract clubs.`
    },
     {
        id: 19,
        slug: "ehden-book-fair",
        title: "Ehden Book Fair",
        description: "Participation in the Ehden Book Fair to support our Back to School initiative.",
        imageSrc: "/bookfair/bookfair.JPG",
        category: "Finance",
        content: `Our club participated in the annual Ehden Book Fair, where members set up a small stand selling items such as paper, crayons, and bookmarks.

All proceeds from the sales were dedicated to supporting our Back to School Kits project, helping us provide school supplies to students in need.

The event allowed us to support education while engaging with the local community in a lively cultural environment.`,
gallery: ["/bookfair/1.JPG","/bookfair/2.JPG","/bookfair/3.JPG","/bookfair/4.JPG",]
    },
     {
        id: 20,
        slug: "ehden-camp",
        title: "Ehden Camp – Call of the Tribe Edition",
        description: "A multi-club camping event bringing Rotaractors together from across Lebanon.",
        imageSrc: "/camp/camp.JPG",
        category: "Club Service",
        content: `“Ehden Camp: Call of the Tribe Edition” was a special gathering that brought together Rotaractors from clubs across Lebanon.

Organized in collaboration with Rotaract Tripoli El Mina, Rotaract De Beyrouth Millennium, and Rotaract Saida, the camp created a space for members to connect, share experiences, and build friendships.

Throughout the event, participants enjoyed shared meals, music, conversations, and memorable moments together.

The camp strengthened the bonds between clubs while celebrating the spirit of Rotaract through friendship, collaboration, and community.`,
gallery: ["/camp/1.JPG","/camp/2.JPG","/camp/3.JPG","/camp/4.JPG","/camp/5.JPG","/camp/6.JPG","/camp/7.JPG","/camp/8.JPG","/camp/9.JPG","/camp/10.JPG","/camp/11.JPG","/camp/12.JPG",]
    },
     {
        id: 21,
        slug: "water-heaters-and-hygiene-aid",
        title: "Water Heaters and Hygiene Aid",
        description: "A humanitarian project providing hygiene supplies and improved sanitation facilities for displaced families in schools across Zgharta during the war in Lebanon.",
        imageSrc: "/heatersandhygieneaids/Groupphoto.jpg",
        category: "Community Service",
        content: `During the escalation of the war in Lebanon, many families were displaced and temporarily sheltered in schools across the Zgharta area. In response to this situation, the Rotaract Club of Zgharta Zawie, in collaboration with Rotary and Interact, launched a humanitarian initiative to support the affected families.

While many organizations were focusing on food and shelter, our club identified hygiene and sanitation as an urgent need that required attention. As part of the project, water heaters were installed in the bathrooms of four schools hosting displaced families—Zgharta Public Primary School (TTF), Zgharta Public High School, Rachiine Public Primary School, and Rachiine Public High School—allowing families to access hot water for bathing and daily hygiene.

In addition, large quantities of hygiene supplies were distributed across the schools, including cleaning products, personal hygiene items, and sanitation materials. The project directly supported around 1,500 displaced individuals, helping improve living conditions during a difficult time.

The initiative was made possible through the collaboration of Rotary, Rotaract, and Interact, as well as the support of the National Disaster Relief Fund, with club members volunteering to help purchase, transport, and distribute the materials.`,
gallery: ["/heatersandhygieneaids/1.jpg","/heatersandhygieneaids/3.jpg","/heatersandhygieneaids/2.jpg","/heatersandhygieneaids/4.jpg"]
     }
     ,
     {
        id: 22,
        slug: "clothing-and-milk-for-displaced-families",
        title: "Clothing & Milk for Displaced Families",
        description: "A relief initiative providing winter clothing and baby milk to support displaced families during the war in Lebanon.",
        imageSrc: "/clothingandmilk/Packed Boxes.jpg",
        category: "Community Service",
        content: `During the escalation of the war in Lebanon, many families were displaced and temporarily sheltered in schools across the region. In response to urgent needs expressed by local schools, the Rotaract Club of Zgharta Zawie, in collaboration with Interact, launched a relief initiative to support affected families.

Zgharta Public High School requested winter clothing for displaced families, while a public school in Bcharre expressed an urgent need for baby milk. Through coordination with the National Disaster Relief Fund, the club facilitated the donation of winter clothing from Fabric Aid along with packs of baby milk.

Club members and volunteers helped transport the donations from Beirut to Zgharta, sort the clothing by size, and prepare them for distribution. To promote sustainability, the team reused cardboard boxes from local mini-markets instead of purchasing new packaging.

The donations were then delivered to the schools, providing essential winter clothing and baby milk for families in need. The project directly supported around 200 individuals, helping ensure that mothers and children had access to basic necessities during a difficult time.`,
gallery: ["/clothingandmilk/1.jpg","/clothingandmilk/2.jpg","/clothingandmilk/3.jpg","/clothingandmilk/4.jpg"]
     },
     {
        id: 23,
        slug: "your-wellbeing-first",
        title: "Your Well-Being First",
        description: "A diabetes awareness and testing initiative organized with DiaLeb to support displaced families in schools across the Zgharta region.",
        imageSrc: "/dialeb/Group Photo with Clinic.jpg",
        category: "Community Service",
        content: `In collaboration with DiaLeb, the Rotaract Club of Zgharta Zawie organized a diabetes awareness and testing initiative for displaced families living in schools across the Zgharta region.

Over two days, our team visited several schools hosting displaced families, offering free diabetes testing and raising awareness about the importance of early detection and healthy habits. The initiative primarily focused on adults, while also accommodating children with diabetes when requested by their families.

With the support of medical volunteers and a local clinic that provides free healthcare to displaced families, we were able to test around 350 individuals. A doctor was also present during the testing to answer questions and provide immediate medical guidance when needed.

The collected data was shared with the clinic to allow follow-up support for individuals identified as at risk or diagnosed with diabetes. Through this project, we aimed not only to address immediate health concerns but also to promote long-term awareness and preventive care within the community.`,
        gallery: ["/dialeb/1.jpg","/dialeb/2.jpg","/dialeb/3.jpg","/dialeb/4.jpg",]
     },
     {
        id: 24,
        slug: "16-Days-of-Activism-Against-Gender-Based-Violence",
        title: "Stand Against Gender-Based Violence",
        description: "A multi-phase awareness initiative organized as part of the global 16 Days of Activism Against Gender-Based Violence, combining education, discussion, and international collaboration.",
        imageSrc: "/genderbasedviolence/genderbasedviolence.jpg",
        category: "Community Service",
        content: `The initiative began with visits to several schools in Zgharta, where we spoke with high school students about the campaign and invited them to participate in the main event.

The central activity was an awareness session held at Centre Ajyal, organized in collaboration with ABAAD and RDFL. The session brought together around 75 participants and featured two key talks. ABAAD presented the 5Ds approach to responding to gender-based violence—practical strategies individuals can use when witnessing harmful situations. RDFL addressed the issue of cyberviolence, focusing on how young girls can be protected from online abuse. The event also included a screening of the movie It Ends With Us, which highlights the reality of domestic violence and opened the door for meaningful discussion among attendees.

Alongside the local event, we launched a social media campaign in collaboration with Rotaract clubs from France, the United Kingdom, and Nigeria, sharing educational content, prevention tips, and awareness messages throughout the 16 days.

The project concluded with an international webinar organized together with RDFL and Rotaract clubs from Aberdeen (UK), Dijon De la Chouette (France), and FUTA (Nigeria). The webinar connected participants from different countries to exchange perspectives and discuss solutions for addressing gender-based violence.

Through education, discussion, and international cooperation, this project helped raise awareness about an important issue while strengthening connections between Rotaract clubs around the world.`,
        gallery: ["/genderbasedviolence/1.jpg","/genderbasedviolence/2.jpg","/genderbasedviolence/3.jpg","/genderbasedviolence/4.jpg","/genderbasedviolence/5.jpg","/genderbasedviolence/6.jpg","/genderbasedviolence/7.jpg","/genderbasedviolence/8.jpg",]
     },
     {
        id: 25,
        slug: "christmas-market",
        title: "Christmas Market",
        description: "A festive Christmas market organized with Interact to support local businesses and raise funds for our holiday community initiative “Yen3ad 3aleykon”.",
        imageSrc: "/christmasmarket/christmasmarket.jpg",
        category: "Finance",
        content: `In collaboration with the Interact Club of Zgharta Zawie, our club organized the Annual Christmas Market, a festive event designed to support local businesses while raising funds for our holiday initiative “Yen3ad 3aleykon.”

The market brought together nine local businesses offering a variety of products including food, handmade candles, accessories, books, and hair services. Businesses were invited to participate with a minimal fee that only covered the basic event costs such as tables, electricity, and the venue, allowing them to showcase their work without additional financial pressure.

Unexpected rain forced us to move the market indoors at the last minute, which unfortunately led to some cancellations and fewer visitors since the new location was less visible. Despite these challenges, we focused on creating a warm and enjoyable atmosphere for both guests and participating businesses.

Alongside the business stands, our club organized several activities including a live pasta station, hot dog stand, carnival-style games, a bake sale, and a kids’ area. We also held a raffle with prizes donated by more than 20 local sponsors, adding excitement to the event while supporting our fundraising efforts.

All profits generated from our stands and the raffle were directed toward our community project “Yen3ad 3aleykon,” which provides assistance to families in need during the holiday season.

Even with the unexpected challenges, the Christmas Market successfully brought the community together, highlighted local businesses, and celebrated the spirit of giving during the holiday season.`,
gallery: ["/christmasmarket/1.jpg","/christmasmarket/2.jpg","/christmasmarket/3.JPEG","/christmasmarket/4.JPEG","/christmasmarket/5.JPEG","/christmasmarket/6.jpg","/christmasmarket/7.jpg","/christmasmarket/8.JPEG",]
     },
     {
        id: 27,
        slug: "yen3ad-3aleykon",
        title: "Yen3ad 3aleykon",
        description: "A holiday community initiative where our club distributed food boxes, hygiene kits, and toys to vulnerable families in the Zgharta region.",
        imageSrc: "/yen3ad3laykon/Distribution 2.JPEG",
        category: "Community Service",
        content: `During the holiday season, many households in Zgharta struggle to afford basic necessities. To help support the most vulnerable families, the Rotaract Club of Zgharta Zawie, in collaboration with Interact, organized the project “Yen3ad 3aleykon.”

Funds raised through our Christmas Market were used to purchase food items and toothbrushes, while several partners also contributed donations. Gift of Life provided hygiene products, Artists Got Milk donated milk, and toys were collected through donation boxes placed in local schools.

We identified 30 households in need, including elderly widows, blind elderly individuals, and families with children or babies. The 15 most vulnerable households received both a food box and a hygiene kit, while the remaining hygiene kits were distributed to other families in need. Toys and diapers were also provided to households with children or infants to ensure every item reached someone who truly needed it.

With the help of around 20 volunteers, our team spent more than 10 hours packing and delivering the items. Some homes were located in areas that cars could not reach, so volunteers carried the packages on foot to ensure every household received their support.

One moment from the day stayed with us. After completing our final delivery, we encountered a family with several young children. Although we had already distributed the last food box, we still had a few toys and diapers left. When we offered them to the family, the children’s faces immediately lit up with joy. Before accepting the diapers, the mother carefully checked the size and said that if they were not suitable, she would prefer that another family receive them. It was a small moment that reminded us of the kindness and dignity people maintain even in difficult circumstances.

The project was a deeply meaningful experience for our members. Seeing the smiles, hearing people wish us “Yen3ad 3aleykon,” and knowing we could help, even in a small way, made all the effort worthwhile.`,
gallery: ["/yen3ad3laykon/1.JPEG","/yen3ad3laykon/2.JPEG","/yen3ad3laykon/3.JPEG","/yen3ad3laykon/4.JPEG"]
     },
     {
        id: 28,
        slug: "elderly-visit-2025",
        title: "Elderly Visit 2025",
        description: "A holiday visit to the local elderly home to provide hygiene supplies and spend time with residents who often lack family support.",
        imageSrc: "/elderlyvisit2025/Entrance.JPEG",
        category: "Community Service",
        content: `During the holiday season, the Rotaract Club of Zgharta Zawie, in collaboration with the Interact Club of Zgharta Zawie, organized its annual visit to the local Elderly Home Center.

Our team donated hygiene products and milk to support the residents’ daily needs. To make the visit more joyful, we also brought cake and juice and spent time with the residents, sharing music, conversations, and moments of companionship.

Beyond the donations, the goal of the visit was to remind the residents that they are valued and remembered. It was a meaningful experience for our members and a simple way to spread warmth and kindness during the holiday season.`,
        gallery: ["/elderlyvisit2025/1.JPEG","/elderlyvisit2025/2.JPEG","/elderlyvisit2025/3.JPEG","/elderlyvisit2025/4.JPEG",]
     },
     {
        id: 29,
        slug: "eduport",
        title: "Eduport",
        description: "An international online event where Rotaractors studying abroad shared their experiences to help students better understand life and education overseas.",
        imageSrc: "/eduport/eduport.JPEG",
        category: "International Understanding",
        content: `EduPort was an international initiative organized by Rotaract clubs to support students interested in studying abroad. The event brought together Rotaractors currently studying or working in different countries to share their real-life experiences.

Held online over two days, the sessions covered topics such as adapting to new cultures, dealing with homesickness, managing academic pressure, and building a life in a new country. Participants were able to ask questions and learn directly from students who had already gone through the experience.

The project was a collaborative effort between several Rotaract clubs, including RC Nozha United and RC Zgharta Zawie, and was organized entirely by volunteers. Despite having no budget, the initiative successfully connected students with valuable insights and strengthened international relationships between clubs.`,
gallery: ["/eduport/5.JPEG","/eduport/2.JPEG","/eduport/3.JPEG","/eduport/4.JPEG",]
     },
     {
        id: 30,
        slug: "zgharta-cross-country-2025",
        title: "Zgharta Cross Country 2025",
        description: "A 4 km community race organized for World Health Day to promote physical well-being and raise awareness about maternal and newborn health.",
        imageSrc: "/zghartacrosscountry/race.JPEG",
        category: "Community Service",
        content: `To celebrate World Health Day, the Rotaract Club of Zgharta Zawie organized Zgharta Cross Country 2025, a 4 km race that brought together more than 200 runners from across North Lebanon.

The race took place in the center of Zgharta, where the municipality closed the main road to create a safe and lively environment for participants and spectators. Runners of all ages participated, including children, teenagers, and adults, making the event truly inclusive.

In addition to the race, the event also included a short awareness session on maternal and newborn health, interactive activities, refreshments for runners, and post-race physiotherapy support. Local partners, volunteers, and sponsors played an important role in making the event possible.

The race created a vibrant atmosphere in the town and highlighted the importance of health, community engagement, and collaboration. It also strengthened the connection between the club and the community, leaving a lasting positive impact and paving the way for future editions of the event.
`,
        gallery: ["/zghartacrosscountry/1.JPEG","/zghartacrosscountry/2.JPEG","/zghartacrosscountry/3.JPEG","/zghartacrosscountry/4.JPEG","/zghartacrosscountry/5.JPEG","/zghartacrosscountry/6.JPEG","/zghartacrosscountry/7.JPEG","/zghartacrosscountry/8.JPEG",]
     },
     {
        id: 31,
        slug: "barme-lebneniye",
        title: "Barme Lebneniye",
        description: "A cultural fellowship initiative where Rotaractors explore different Lebanese cities while connecting with clubs across the country.",
        imageSrc: "/barmelebneniye/Zahle Edition  - 4.PNG",
        category: "Club Service",
        content: `Barme Lebneniye (meaning “A Tour of Lebanon”) is a fellowship and cultural project that brings Rotaractors together to explore different Lebanese cities while building connections between clubs.

Each edition is organized in collaboration with a local Rotaract club. Participants spend a full day discovering the city, its culture, and its traditions while strengthening friendships between clubs. The project is also open to non-Rotaractors, giving many people the chance to experience Rotaract for the first time.

Since its launch, the project has organized five editions across six cities, including Ehden, Byblos, Batroun, Zahle, Tripoli, and Beirut, bringing together over 100 participants.

Beyond cultural exploration, the initiative has helped create lasting relationships between clubs, leading to several joint projects and ongoing collaboration across the Rotaract network in Lebanon.`,
gallery: ["/barmelebneniye/9.JPEG","/barmelebneniye/2.JPEG","/barmelebneniye/3.JPEG","/barmelebneniye/4.JPEG","/barmelebneniye/5.JPEG","/barmelebneniye/6.JPEG","/barmelebneniye/7.JPEG","/barmelebneniye/8.JPEG","/barmelebneniye/1.JPEG","/barmelebneniye/10.PNG","/barmelebneniye/11.PNG","/barmelebneniye/12.PNG"]

     },
     {
        id: 32,
        slug: "drift-and-dine",
        title: "Drift & Dine",
        description: "A collaborative visit to the Billy Karam Museum where Rotaractors explored automotive history while strengthening connections between clubs.",
        imageSrc: "/driftanddine/Group Photo 2.jpg",
        category: "Club Service",
        content: `On February 1, 2025, the Rotaract Clubs of Zgharta Zawie, Byblos, and Beirut Millennium came together for a unique visit to the Billy Karam Museum.

The day began with a welcome from Billy Karam, who shared stories from his career and his Guinness World Record achievements before guiding us through the museum. The two-story museum features numerous rooms filled with diecast cars, rare collectibles, and detailed dioramas that showcase the history of motorsports and automotive culture.

After the tour, we presented Billy with a medal as a token of appreciation. In a memorable moment, he even offered one of our members a ride in his Porsche 996 GT2, creating an exciting highlight for the day.

The event continued with lunch in Kaslik, followed by a spontaneous karting race, bringing out everyone’s competitive spirit and perfectly ending a day filled with learning, fun, and fellowship between clubs.`,
        gallery: ["/driftanddine/1.jpg","/driftanddine/2.JPEG","/driftanddine/3.jpg","/driftanddine/4.jpg","/driftanddine/5.jpg","/driftanddine/6.jpg","/driftanddine/7.jpg","/driftanddine/8.jpg",]
     },
     {
        id: 33,
        slug: "mini-golf",
        title: "Mini Golf",
        description: "A fellowship event where Rotaractors from several Lebanese clubs gathered for a mini golf outing to strengthen connections and build friendships.",
        imageSrc: "/minigolf/Group Photo 3.jpg",
        category: "Club Service",
        content: `Members from the Rotaract Clubs of Zgharta Zawie, Aley, De Beirut Cosmopolitan, and De Beyrouth came together for a mini golf outing followed by dinner, creating a relaxed environment for members to connect outside their regular club activities.

To encourage interaction, the teams were intentionally mixed so that each group included members from different clubs. This allowed participants to get to know one another, share experiences, and build new friendships while enjoying the activity.

After the game, everyone gathered for dinner, where members continued their conversations and exchanged ideas for future collaborations between clubs. The event helped strengthen relationships across the Rotaract network and encouraged further joint initiatives between the clubs.`,
        gallery: ["/minigolf/1.jpg","/minigolf/2.jpg","/minigolf/3.jpg","/minigolf/4.jpg","/minigolf/5.jpg","/minigolf/6.jpg","/minigolf/7.jpg","/minigolf/8.jpg",]
     }
     ,
     {
        id: 34,
        slug: "cheese-wine-bingo-night",
        title: "Cheese & Wine Bingo Night 2.0",
        description: "A fundraising event organized with Rotaract clubs to support the Zgharta Social Movement Dispensary and help provide essential cardiac screening equipment.",
        imageSrc: "/cheeseandwine/Buffet 1.JPEG",
        category: "Finance",
        content: `The Cheese & Wine Bingo Night 2.0 was organized by the Rotaract Clubs of Zgharta Zawie, Sahel Metn, and Byblos as a fundraising event in support of the Zgharta Social Movement Dispensary, which provides affordable healthcare services to people in need.

The evening took place at Maximus Hotel and brought together members and guests for a night of food, games, and fellowship. A buffet featuring cheese, charcuterie, salads, bread, fruits, and pasta was served alongside a selection of wines, creating a warm and festive atmosphere.

The highlight of the night was the bingo game, where participants competed for prizes generously donated by sponsors. A tombola raffle added even more excitement and opportunities to win gifts.

Through the event, $929 was raised, which was directed toward purchasing a cardiac ECG machine and its equipment for the dispensary. This contribution will help the center provide essential heart screenings and improve access to healthcare for patients in the community.

Beyond the fundraising aspect, the event strengthened collaboration between the participating Rotaract clubs and brought members of the community together for a meaningful cause.`,
        gallery: ["/cheeseandwine/1.JPEG","/cheeseandwine/2.JPEG","/cheeseandwine/3.JPEG","/cheeseandwine/4.JPEG",]
     }
      ,
     {
        id: 35,
        slug: "stand-with-lebanon",
        title: "Stand With Lebanon",
        description: "A fundraising initiative launched in response to the war to support displaced families and contribute to post-war recovery efforts in Lebanon.",
        imageSrc: "/standwithlebanon/Bracelet.JPEG",
        category: "Finance",
        content: `In October, the Rotaract Club of Zgharta Zawie, in collaboration with the Interact Club of Zgharta Zawie, launched the “Stand with Lebanon” initiative as a quick response to the war.

Members designed and sold bracelets featuring the message “Stand with Lebanon”, symbolizing solidarity, resilience, and hope. Rotaractors sold the bracelets for $5, while Interactors sold them for $2, making them accessible to a wider audience and encouraging community participation.

The funds were initially intended to help displaced families stay warm during the winter. After the war ended in November, the proceeds were redirected to support the reconstruction of a hospital in Tyre that had been damaged during the conflict.

Beyond fundraising, the initiative strengthened collaboration between Rotaract and Interact members and demonstrated how collective action can provide meaningful support during challenging times.`,
        gallery: ["/standwithlebanon/Badminton.JPEG", "/standwithlebanon/Office.JPEG"]
     } ,
     {
        id: 33,
        slug: "let-peace-be-your-light",
        title: "Let Peace Be Your Light",
        description: "A collaborative candle fundraiser organized with the Rotaract Club of Tyre to support the restoration of Tyre Public Hospital.",
        imageSrc: "/letpeacebeyourlight/4.JPEG",
        category: "Finance",
        content: `The “Let Peace Be Your Light” initiative was a collaborative fundraising project organized by the Rotaract Club of Zgharta Zawie in partnership with the Rotaract Club of Tyre. The project focused on selling custom-designed scented candles engraved with a message of peace, symbolizing hope, unity, and healing.

The candles were produced in collaboration with a local small business that had previously participated in our Christmas Market, supporting local entrepreneurship. They were available in four scents: Vanilla, Coconut, Oud, and Jasmine, and were packaged with a design created by club members.

Each candle was sold for $12, with a production cost of $6, generating $6 in profit per candle. In total, 32 candles were sold, raising $192 in support of the restoration of Tyre Public Hospital, helping improve access to healthcare for the community.

Beyond fundraising, the project strengthened collaboration between the two clubs and demonstrated how small initiatives can contribute to meaningful community impact.`,
        gallery: ["/letpeacebeyourlight/1.JPEG","/letpeacebeyourlight/2.JPEG","/letpeacebeyourlight/3.JPEG"]
     }
     ,
     {
        id: 34,
        slug: "al-core",
        title: "Al Core ",
        description: "An international humanitarian project restoring the water system at Tyre Public Hospital through collaboration between Rotaract clubs in Lebanon and Italy.",
        imageSrc: "/alcore/Canzoni Stonate - 5.JPEG",
        category: "International Understanding",
        content: `Al Core is a cross-national humanitarian initiative led by the Rotaract Club of Zgharta Zawie, in partnership with the Rotaract Clubs of Afragola – Frattamaggiore “Porte di Napoli” (Italy) and Tyre (Lebanon).

The project aimed to restore the water system at Tyre Public Hospital, which had been severely damaged during the war in southern Lebanon. As the only public hospital in Tyre, the facility serves thousands of patients every year, making reliable access to clean water essential for medical care, hygiene, and daily hospital operations.

The initial fundraising goal was $4,049, but thanks to the dedication of Rotaractors and the generosity of donors, the initiative successfully raised $4,300. The funds were generated through multiple initiatives, including the “Stand with Lebanon” bracelet campaign, the “Let Peace Be Your Light” candle fundraiser, art sales, and fundraising events organized in Italy.

This international collaboration ensured that the hospital could restore its water system and continue serving the community safely. The project also strengthened international Rotaract partnerships and led to a twinning relationship between the Rotaract Clubs of Zgharta Zawie and Afragola – Frattamaggiore “Porte di Napoli”, highlighting the power of cross-border cooperation to create meaningful impact.`,
        gallery: ["/alcore/1.JPEG","/alcore/2.JPEG","/alcore/3.JPEG","/alcore/4.JPEG",]
     }
     ,
     {
        id: 35,
        slug: "twinning-napoli",
        title: "Twinning",
        description: "A twinning partnership between the Rotaract Club of Zgharta Zawie and the Rotaract Club of Afragola – Frattamaggiore “Porte di Napoli”, built on international friendship and collaboration.",
        imageSrc: "/twinningnapoli/Twinning Certificate - D2101 Template.JPEG",
        category: "International Understanding",
        content: `The twinning between the Rotaract Club of Zgharta Zawie (Lebanon) and the Rotaract Club of Afragola – Frattamaggiore “Porte di Napoli” (Italy) began with a friendship formed during MEDICON Antalya in June 2024, when Joseph from Zgharta Zawie met Alfonso from Afragola. The connection between the two members quickly grew into a meaningful relationship between their clubs.

When war broke out in Lebanon in October 2024, Alfonso reached out to express solidarity and support. This gesture strengthened the bond between the two clubs and inspired them to work together on humanitarian initiatives, including the Al Core project supporting Tyre Public Hospital.

As the collaboration grew, both clubs decided to formalize their partnership. On February 20, 2025, they officially signed their twinning agreement during the “Twinning & Trivia” event, marking the beginning of a long-term relationship built on friendship, cooperation, and international understanding.

This twinning reflects the spirit of Rotaract by showing how connections between members from different countries can grow into lasting partnerships, encouraging collaboration, cultural exchange, and joint projects that create meaningful impact across borders.`,
        gallery: ["/twinningnapoli/1.JPEG","/twinningnapoli/2.JPEG","/twinningnapoli/3.PNG", "/twinningnapoli/4.JPEG"]
     },
     {
        id: 36,
        slug: "one-potato-many-cultures",
        title: "One Potato, Many Cultures",
        description: "An international cultural exchange where Rotaract clubs shared and prepared traditional potato-based recipes to celebrate the International Day of Potato.",
        imageSrc: "/onepotatomanycultures/1.jpg",
        category: "International Understanding",
        content: `One Potato, Many Cultures was an international cultural exchange project organized to celebrate the International Day of Potato. The initiative brought together the Rotaract Club of Zgharta Zawie with three partner clubs: Afragola – Frattamaggiore “Porte di Napoli” (Italy), Victoria Falls (Zimbabwe), and Club Opportunity (Tunisia).

Each participating club shared an authentic potato-based recipe from their country, giving members the opportunity to discover new flavors and learn about different culinary traditions. After exchanging the recipes, members gathered to prepare and cook the dishes together, recreating the recipes from the other countries.

The activity turned into a fun and engaging cultural experience where members could taste dishes from different parts of the world while learning about the cultures behind them. The project highlighted how food can bring people together and served as a creative way to strengthen international friendships between Rotaract clubs.`,
        gallery: ["/onepotatomanycultures/2.jpg","/onepotatomanycultures/3.jpg","/onepotatomanycultures/4.jpg","/onepotatomanycultures/5.jpg","/onepotatomanycultures/6.jpg","/onepotatomanycultures/7.jpg","/onepotatomanycultures/8.jpg","/onepotatomanycultures/9.jpg"]
     },
     {
        id: 37,
        slug: "fcbc",
        title: "For the Club, By the Club",
        description: "An internal professional development initiative where Rotaract members share their skills and knowledge to help one another grow.",
        imageSrc: "/fcbc/fcbc.jpg",
        category: "Professional Development",
        content: `For the Club, By the Club is an ongoing professional development initiative within the Rotaract Club of Zgharta Zawie, designed to encourage members to learn from one another and develop practical skills together.

The idea behind the initiative is simple: members share their own expertise with the club through workshops and training sessions, creating a culture of peer-to-peer learning. This allows members to strengthen skills that are useful both within Rotaract and in their personal or professional lives.

So far, two sessions have been organized as part of the series: an Introduction to Excel workshop, focused on improving digital skills, and an Introduction to Canva session, which helped members learn the basics of design and social media branding. These sessions were led by experienced club members who shared their knowledge with the rest of the team.

As the initiative continues, future sessions will cover topics such as leadership, project management, public speaking, and other practical skills, ensuring that members can continue learning and growing together. Through this collaborative approach, the initiative helps build stronger, more capable Rotaractors while fostering a spirit of teamwork and shared responsibility within the club.`,
        gallery: ["/fcbc/1.jpeg","/fcbc/2.jpeg","/fcbc/3.jpeg","/fcbc/4.jpeg","/fcbc/5.jpg","/fcbc/6.jpg","/fcbc/7.jpg","/fcbc/8.jpg",]
     },
     {
        id: 38,
        slug: "paths-and-perspectives",
        title: "Paths & Perspectives",
        description: "A nationwide professional development initiative where seven Rotaract clubs across Lebanon organized career-focused sessions to help students and young professionals transition from education to the workforce.",
        imageSrc: "/Paths & Perspectives/1.JPEG",
        category: "Professional Development",
        content: `Paths & Perspectives was a collaborative initiative organized by seven Rotaract clubs across Lebanon to help students and young professionals prepare for the transition from university to the professional world.

The project consisted of a series of interactive sessions led by industry experts, covering key aspects of career development such as international opportunities, networking, job searching, and workplace skills. These sessions were held in different locations across Lebanon, including Tripoli, Beirut, and Byblos, as well as online, making the initiative accessible to a wide audience.

Topics included Erasmus+ exchange opportunities, LinkedIn networking strategies, resume writing and interview preparation, and workplace communication and conflict resolution. Each session provided participants with practical insights and tools that could help them navigate today’s competitive job market.

By bringing together multiple Rotaract clubs, speakers, and organizations, the project became one of the largest Rotaract professional development initiatives in Lebanon, demonstrating the power of collaboration and the organization’s commitment to empowering young professionals.`,
        gallery: ["/Paths & Perspectives/2.JPEG","/Paths & Perspectives/3.JPEG","/Paths & Perspectives/4.JPEG","/Paths & Perspectives/5.JPEG","/Paths & Perspectives/6.JPEG","/Paths & Perspectives/7.PNG","/Paths & Perspectives/8.JPEG","/Paths & Perspectives/9.JPEG","/Paths & Perspectives/10.JPEG","/Paths & Perspectives/11.JPEG","/Paths & Perspectives/12.JPEG","/Paths & Perspectives/13.JPEG","/Paths & Perspectives/14.JPEG","/Paths & Perspectives/15.JPEG","/Paths & Perspectives/16.JPEG","/Paths & Perspectives/17.JPEG"]
     }
];