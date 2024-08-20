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
    name: string;
    role: string;
    profilePic: string;
  }[];

  advisors: {
    name: string;
    profilePic: string;
  }[];
} = {
  heads: [
    {
      name: "Akshat Kapoor",
      role: "Tech Head",
      profilePic: "https://swgiitkgp.org/assets/images/akshat.jpg",
    },
    {
      name: "Astitva Srivastava",
      role: "Core Head",
      profilePic: "https://swgiitkgp.org/assets/images/astha.jpg",
    },
    {
      name: "Astha Kumari",
      role: "Executive Head",
      profilePic: "https://swgiitkgp.org/assets/images/astitva.jpg",
    },
    {
      name: "Bhawesh Kukreja",
      role: "Design Head",
      profilePic: "https://swgiitkgp.org/assets/images/bhawesh.jpg",
    },
    {
      name: "Shashank Tiwari",
      role: "Executive Head",
      profilePic: "https://swgiitkgp.org/assets/images/shashank.jpg",
    },
    {
      name: "Shivam Bisen",
      role: "Videography Head",
      profilePic: "https://swgiitkgp.org/assets/images/shivam.jpg",
    },
    {
      name: "Shravan Barad",
      role: "Core Head",
      profilePic: "https://swgiitkgp.org/assets/images/shravan.jpg",
    },
    {
      name: "Vumika Ghosh",
      role: "Pr/Lit Head",
      profilePic: "https://swgiitkgp.org/assets/images/vumika.jpg",
    },
  ],
  advisors: [
    {
      name: "Anish Behuray",
      profilePic: "https://swgiitkgp.org/assets/images/anish.jpg",
    },

    {
      name: "Jainish Solanki",
      profilePic: "https://swgiitkgp.org/assets/images/jainish.jpg",
    },
    {
      name: "JSR Sujit",
      profilePic: "https://swgiitkgp.org/assets/images/sujit.png",
    },
    {
      name: "Khushi Agarwal",
      profilePic: "https://swgiitkgp.org/assets/images/khushi.jpg",
    },
    {
      name: "Priyanshi Khetan",
      profilePic: "https://swgiitkgp.org/assets/images/priyanshi.jpg",
    },
    {
      name: "Sapharu Veena Nikhita",
      profilePic: "https://swgiitkgp.org/assets/images/nikhita.png",
    },
    {
      name: "Shubham Singh",
      profilePic: "https://swgiitkgp.org/assets/images/shubham.jpg",
    },
    {
      name: "Yash Kumar",
      profilePic: "https://swgiitkgp.org/assets/images/yash.jpg",
    },
  ],
};

export { initiativesData, blogsData, teamData };
