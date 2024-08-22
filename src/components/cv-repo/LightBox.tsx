"use client";

import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */

const LightBox = ({
  cvLightBox,
  setCvLightBox,
}: {
  cvLightBox: {
    cvLink: string;
    name: string;
  };
  setCvLightBox: any;
}) => {
  const [animate, setAnimate] = useState("entry");

  useEffect(() => {
    setTimeout(() => {
      setAnimate("");
    }, 1500);
  }, [animate]);

  return (
    <div className="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-black bg-opacity-30">
      <div
        className="absolute left-0 top-0 z-40 h-full w-full"
        onClick={() => {
          setAnimate("exit");
          setTimeout(() => {
            setCvLightBox({
              cvLink: "",
              name: "",
            });
          }, 900);
  }}
      ></div>

      <div
        className={`w-[90vw] rounded-xl lg:max-h-[90vh] lg:w-[50%] lg:max-w-[660px] ${animate === "entry" && "animate--light-box--entry"} ${animate === "exit" && "animate--light-box--exit"} z-50 overflow-auto`}
      >
        <div className="flex items-center justify-between gap-4 border-b-2 border-b-gray-300 bg-white px-4 py-2">
          <h2>{cvLightBox.name}</h2>
          <button>
            <svg
              onClick={() => {
                setAnimate("exit");
                setTimeout(() => {
                  setCvLightBox({
                    cvLink: "",
                    name: "",
                  });
                }, 950);
              }}
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <img src={cvLightBox.cvLink} alt={cvLightBox.name} />
        </div>
      </div>
    </div>
  );
};
export default LightBox;
