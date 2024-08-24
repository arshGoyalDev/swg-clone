// initiatives data

const initiativesData: {
  id: number;
  img: string;
  info: string;
}[] = [
  {
    id: 1,
    img: "https://swgiitkgp.org/assets/images/smp.jpg",
    info: "Connects students with a senior who is their guide though the college",
  },
  {
    id: 2,
    img: "https://swgiitkgp.org/assets/images/pds.jpg",
    info: "Sessions where PDS mentors not just clear concepts and doubts but provide practice as well",
  },
  {
    id: 3,
    img: "https://swgiitkgp.org/assets/images/depc.jpg",
    info: "All one can need for DepC (except for the report of working hard) is here!",
  },
];

// blogsData

const blogsData: {
  id: number;
  profilePic: string;
  name: string;
  type: string;
  content: string;
  link: string;
}[] = [
  {
    id: 1,
    profilePic: "https://miro.medium.com/v2/resize:fit:1100/0*9Rdu49655XKu31-u",
    name: "Atal Ashutosh Agarwal",
    type: "Adieu KGP",
    content:
      "KGP is a great time for exploration. Be extremely selfish about taking out the most value for yourself out of this experience. You should not worry about rejections, interns or placements. In the long run these things do not matter. You should focus on creating your own brand. Always believe in living a big life (larger than yourself).",
    link: "/",
  },
  {
    id: 2,
    profilePic:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*8GG4amXg9ZEnYqyELnDmOQ.jpeg",
    name: "Daksh Varshney",
    type: "Foresight Internship",
    content:
      "You must be proficient in DSA. There are multiple resources for preparing it like Interviewbit, GeeksForGeeks, Leetcode, and CSES. Keep giving contests on platforms like Codeforces and Codechef to practice solving questions in a time-bound environment. Also, keep a good habit of calculating time complexity and space complexity while solving a problem.",
    link: "/",
  },
];

// team data

const teamData: {
  heads: {
    id: number;
    name: string;
    role: string;
    profilePic: string;
  }[];

  advisors: {
    id: number;
    name: string;
    profilePic: string;
  }[];
} = {
  heads: [
    {
      id: 1,
      name: "Akshat Kapoor",
      role: "Tech Head",
      profilePic: "https://swgiitkgp.org/assets/images/akshat.jpg",
    },
    {
      id: 2,
      name: "Astitva Srivastava",
      role: "Core Head",
      profilePic: "https://swgiitkgp.org/assets/images/astha.jpg",
    },
    {
      id: 3,
      name: "Astha Kumari",
      role: "Executive Head",
      profilePic: "https://swgiitkgp.org/assets/images/astitva.jpg",
    },
    {
      id: 4,
      name: "Bhawesh Kukreja",
      role: "Design Head",
      profilePic: "https://swgiitkgp.org/assets/images/bhawesh.jpg",
    },
    {
      id: 5,
      name: "Shashank Tiwari",
      role: "Executive Head",
      profilePic: "https://swgiitkgp.org/assets/images/shashank.jpg",
    },
    {
      id: 6,
      name: "Shivam Bisen",
      role: "Videography Head",
      profilePic: "https://swgiitkgp.org/assets/images/shivam.jpg",
    },
    {
      id: 7,
      name: "Shravan Barad",
      role: "Core Head",
      profilePic: "https://swgiitkgp.org/assets/images/shravan.jpg",
    },
    {
      id: 8,
      name: "Vumika Ghosh",
      role: "Pr/Lit Head",
      profilePic: "https://swgiitkgp.org/assets/images/vumika.jpg",
    },
  ],
  advisors: [
    {
      id: 1,
      name: "Anish Behuray",
      profilePic: "https://swgiitkgp.org/assets/images/anish.jpg",
    },

    {
      id: 2,
      name: "Jainish Solanki",
      profilePic: "https://swgiitkgp.org/assets/images/jainish.jpg",
    },

    {
      id: 3,
      name: "JSR Sujit",
      profilePic: "https://swgiitkgp.org/assets/images/sujit.png",
    },
    {
      id: 4,
      name: "Khushi Agarwal",
      profilePic: "https://swgiitkgp.org/assets/images/khushi.jpg",
    },
    {
      id: 5,

      name: "Priyanshi Khetan",
      profilePic: "https://swgiitkgp.org/assets/images/priyanshi.jpg",
    },
    {
      id: 6,

      name: "Sapharu Veena Nikhita",
      profilePic: "https://swgiitkgp.org/assets/images/nikhita.png",
    },
    {
      id: 7,

      name: "Shubham Singh",
      profilePic: "https://swgiitkgp.org/assets/images/shubham.jpg",
    },
    {
      id: 8,

      name: "Yash Kumar",
      profilePic: "https://swgiitkgp.org/assets/images/yash.jpg",
    },
  ],
};

// resources data

const resourcesData: {
  id: number;
  title: string;
  content: string;
  bgImage: string;
  link: string;
}[] = [
  {
    id: 1,
    title: "1st Year Resources",
    content:
      "From books to notes to previous year papers, all things acads for 1st year.",
    bgImage: "https://swgiitkgp.org/assets/images/1st-year.jpg",
    link: "https://drive.google.com/drive/folders/1cZjU_l2NUIuxnRofN30DqavQZ1tHr4Wy",
  },
  {
    id: 2,
    title: "2nd Year Resources",
    content: "Branch wise study material for 2nd year.",
    bgImage: "https://swgiitkgp.org/assets/images/2nd-year.jpg",
    link: "https://swgiitkgp.org/2nd_year_material",
  },
  {
    id: 3,
    title: "Academic Information",
    content:
      "All important information about scholarships and more for students.",
    bgImage: "https://swgiitkgp.org/assets/images/academic.jpg",
    link: "http://iitkgp.ac.in/for-students",
  },
  {
    id: 4,
    title: "Fundae Docs",
    content: "All the tools to crack problems you will face in KGP.",
    bgImage: "https://swgiitkgp.org/assets/images/fundae.jpg",
    link: "https://drive.google.com/drive/folders/1kHOCcFcWkncHaAPZtzOCHUDn4aKQ84KV?usp=sharing",
  },
  {
    id: 5,
    title: "GMAT Resources",
    content: "Guide to Applying for Overseas Education",
    bgImage: "https://swgiitkgp.org/assets/images/gmat.png",
    link: "https://drive.google.com/drive/folders/1YZnPLwAwuY8cEg9-HnVdvmku6VJnDCdl",
  },
];

const eventsData: {
  imageUrl: string;
  content: string;
  id: number;
}[] = [
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/SMP.png",
    content:
      "Connects students with a senior, who will be mentoring the students thoughout their college.",
    id: 1,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/FORESIGHT.png",
    content:
      "All the guidance that you need for cracking your dream Internship or Placement. Read blogs here.",
    id: 2,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/OCT.png",
    content:
      "Session to resolve all doubts regarding the Off-Campus internship and placement opportunities and how to prepare for them. Click here to watch the session.",
    id: 3,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/FORESIGHT.png",
    content:
      "Session to resolve all doubts regarding the Off-Campus internship and placement opportunities and how to prepare for them. Click here to watch the session.",
    id: 4,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/PDS.png",
    content:
      "Sessions where PDS mentors will be clearing concepts and doubts, and will provide practice as well. Click here to join MS Teams.",
    id: 5,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/EXAM.png",
    content:
      "The answer to all your doubts related to exam prep, from the study material one should use to the difficulty of the previous year papers, everything is here! Watch recording here.",
    id: 6,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/COS.png",
    content:
      "Session to resolve all doubts regarding the different career opportunities and how to prepare for them. Click here to watch the session.",
    id: 7,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/DEPCT.png",
    content:
      "All one can need for DepC (except for the report of working hard) is here! Watch the recording here.",
    id: 8,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/RGW.png",
    content:
      "Initiative to guide students and provide them a roadmap to kickstart their journey in R&D. Click here to watch recording.",
    id: 9,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/CT.png",
    content: "Initiative for the freshers to let them know the campus better.",
    id: 10,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/UPSCT.png",
    content:
      "Toughest exams simplified by the civil servants who were once aspirants. Click here to watch the session.",
    id: 11,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/AKGP.png",
    content:
      "Initiative to preserve memories and experiences of graduating seniors to create a unique treasured masterpiece. Click here to read the blogs",
    id: 12,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/AOST.png",
    content:
      "Sessions to resolve queries about Breadth, Minors, Micro-courses and much more. Click here to watch the session",
    id: 13,
  },
  {
    imageUrl: "https://swgiitkgp.org/assets/EventI/APP.png",
    content:
      "One stop solution for all academic, non academic and cdc doubts!!",
    id: 14,
  },
];

export { initiativesData, blogsData, teamData, resourcesData, eventsData };
