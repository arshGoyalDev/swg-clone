"use client";

import { useState, useEffect } from "react";

import { BlogCard } from "../cards";

import { blogsData } from "~/utils";

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
