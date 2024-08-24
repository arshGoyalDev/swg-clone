"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { appearIn } from "~/utils/animations";

const TeamCard = ({
  id,
  name,
  role,
  profilePic,
}: {
  id: number;
  name: string;
  role?: string;
  profilePic: string;
}) => {
  return (
    <motion.div
      variants={appearIn(id * 0.15)}
      initial={"hidden"}
      whileInView={"show"}
      className="card--team relative h-[280px] w-[80vw] rounded-xl shadow-lg sm:w-full sm:max-w-[280px]"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={profilePic}
          alt={name}
          className="h-[280px] w-full object-cover"
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-black bg-opacity-15"></div>
      <div className="absolute bottom-2 left-2 right-2 xl:bottom-4 xl:left-4 xl:right-4 z-10 grid place-content-center gap-1 rounded-xl bg-black bg-opacity-75 p-4 text-white backdrop-blur-md transition-all">
        <h2 className="text-lg">{name}</h2>
        {role && <p className="text-gray-300">{role}</p>}
      </div>

      <div className="absolute -top-8 -left-3 xl:left-0 xl:top-0 z-[15] flex xl:h-full p-4 xl:w-full translate-y-5 items-center justify-center gap-3 rounded-xl xl:opacity-0 transition-all duration-300 xl:hover:translate-y-0 bg-black bg-opacity-80 xl:hover:opacity-100 xl:hover:backdrop-blur-2xl">
        <Link href=""  className="hover:scale-125 hover:rotate-6 transition-all duration-300">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                stroke="#ffffff"
                stroke-width="2"
              ></path>
              <circle cx="16.5" cy="7.5" r="1.5" fill="#ffffff"></circle>
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="#ffffff"
                stroke-width="2"
              ></circle>
            </g>
          </svg>
        </Link>

        <Link href={""}  className="hover:scale-125 hover:rotate-6 transition-all duration-300">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
        </Link>
        <Link href={""}  className="hover:scale-125 hover:rotate-6 transition-all duration-300">
          <svg
            width="40"
            height="40"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect
                width="132"
                height="132"
                x="30"
                y="30"
                stroke="#ffffff"
                stroke-width="12"
                rx="16"
              ></rect>
              <path
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="M66 86v44"
              ></path>
              <circle cx="66" cy="64" r="8" fill="#ffffff"></circle>
              <path
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-width="12"
                d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
              ></path>
            </g>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};
export default TeamCard;
