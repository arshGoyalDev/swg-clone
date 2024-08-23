"use client";

import { motion } from "framer-motion";

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
      className="card--team relative h-[280px] w-[80vw] rounded-xl sm:w-full sm:max-w-[280px]"
    >
      <div className="overflow-hidden rounded-xl">
        <img src={profilePic} alt={name} className="h-[280px] w-full object-cover" />
      </div>
      <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-black bg-opacity-15"></div>
      <div className="card--team--info absolute -bottom-5 left-4 right-4 z-10 grid place-content-center gap-1 rounded-xl bg-black bg-opacity-60 p-4 text-white backdrop-blur-md transition-all">
        <h2 className="text-lg">{name}</h2>
        {role && <p className="text-gray-300">{role}</p>}
      </div>
    </motion.div>
  );
};
export default TeamCard;
