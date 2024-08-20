"use client";

import { useState, useEffect } from "react";

import { BlogCard } from "../cards";

const FeaturedBlogs = () => {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (activeCard !== 1) {
        setActiveCard(activeCard - 1);
      } else {
        setActiveCard(activeCard + 1);
      }
    }, 4000);
  }, [activeCard]);

  const blogsData = [
    {
      id: 1,
      profilePic:
        "https://miro.medium.com/v2/resize:fit:1100/0*9Rdu49655XKu31-u",
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

  return (
    <section className="grid place-content-center gap-20 bg-primary bg-opacity-20 px-4 py-20 lg:px-12 xl:px-32">
      <h2 className="text-6xl font-semibold text-secondary">
        Student Welfare Group
      </h2>
      <div className="flex flex-col items-center">
        <div className="max-w-[600px]">
          {blogsData.map((card) => {
            return (
              <BlogCard
                key={card.id}
                profilePic={card.profilePic}
                name={card.name}
                blogType={card.type}
                link={card.link}
                content={card.content}
                active={activeCard === card.id ? true : false}
              />
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-5">
          <button
            className="grid h-12 w-12 place-content-center rounded-full bg-primary"
            onClick={() => {
              if (activeCard !== 1) {
                setActiveCard(activeCard - 1);
              }
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                stroke="#fff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            className="grid h-12 w-12 place-content-center rounded-full bg-primary"
            onClick={() => {
              if (activeCard !== 2) {
                setActiveCard(activeCard + 1);
              }
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                stroke="#fff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturedBlogs;
