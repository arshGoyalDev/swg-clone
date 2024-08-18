"use client";

import { useState } from "react";

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="max-w-[900px] rounded-xl border-2 border-gray-200 bg-white shadow-lg">
      <div
        className={`flex items-center justify-between gap-4 ${isActive && "border-b-2 border-gray-50"} cursor-pointer p-5`}
        onClick={() => {
          isActive ? setIsActive(false) : setIsActive(true);
        }}
      >
        <div className="font-semibold">{question}</div>
        <span className={`h-8 w-8`}>
          {isActive ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9201 15.0499L13.4001 8.52989C12.6301 7.75989 11.3701 7.75989 10.6001 8.52989L4.08008 15.0499"
                stroke="#028d93"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                stroke="#000"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </span>
      </div>

      <div
        className={`${isActive ? "p-5" : "max-h-0 overflow-hidden px-5"} transition-all ease-out`}
      >
        <div className="accordion-item-body-content">{answer}</div>
      </div>
    </div>
  );
};
export default Question;
