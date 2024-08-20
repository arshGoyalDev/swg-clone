"use client";

import { useEffect, useState } from "react";

import { InitiativeCard } from "../cards";

const Initiatives = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [cardOrder, setCardOrder] = useState("up");

  useEffect(() => {
    setTimeout(() => {
      if (cardOrder === "up") {
        if (activeCard !== 3) {
          setActiveCard(activeCard + 1);
        } else {
          setCardOrder("down");
        }
      } else {
        if (activeCard !== 1) {
          setActiveCard(activeCard - 1);
        } else {
          setCardOrder("up");
        }
      }
    }, 3000);
  }, [activeCard, cardOrder]);

  const cardData: {
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

  return (
    <section className="grid place-content-center gap-20 px-4 py-20 lg:px-12 xl:px-32">
      <div className="grid flex-col place-content-center gap-8 text-center">
        <h2 className="text-6xl font-semibold text-secondary">
          Student Welfare Group
        </h2>
        <p className="max-w-[1000px] text-lg">
          Student Welfare Group helps students in improving their skills,
          attitude and resources necessary to both succeed in the college
          environment as well as to pursue productive and satisfying lives by
          organizing different activities on the campus. Our Group strives to
          contribute to the overall educational mission of the Institute by
          facilitating the academic, emotional, social and vocational
          development of the entire campus community.
        </p>
      </div>

      <div className="relative grid place-content-center gap-20 text-center">
        <h2 className="text-5xl font-semibold text-secondary">
          SWG Initiatives
        </h2>

        <div>
          <div className="relative flex">
            {cardData.map((card) => {
              return (
                <InitiativeCard
                  key={card.id}
                  image={card.img}
                  info={card.info}
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
                if (activeCard !== 3) {
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
      </div>
    </section>
  );
};
export default Initiatives;
