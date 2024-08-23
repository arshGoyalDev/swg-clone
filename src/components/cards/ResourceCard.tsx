"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { appearIn } from "~/utils/animations";

const ResourceCard = ({
  id,
  title,
  content,
  bgImage,
  link,
}: {
  id: number;
  title: string;
  content: string;
  bgImage: string;
  link: string;
}) => {
  return (
    <motion.div
      variants={appearIn(id * 0.15)}
      initial={"hidden"}
      whileInView={"show"}
      className="card--resource relative h-[240px] w-[92vw] cursor-default overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-[2.5rem] rounded-bl-[2.5rem] transition-all hover:shadow-xl md:h-[300px] md:max-w-[500px]"
    >
      <img src={bgImage} alt={title} className="h-full w-full" />
      <div className="absolute left-0 top-0 z-[5] h-full w-full bg-black bg-opacity-10"></div>
      <Link href={link}>
        <div className="card--resource--info gird absolute bottom-4 left-4 right-4 z-10 place-content-center gap-1 rounded-tl-lg rounded-br-lg rounded-tr-[2rem] rounded-bl-[2rem] bg-black bg-opacity-40 p-4 text-white backdrop-blur-lg transition-all">
          <h2 className="text-lg">{title}</h2>
          <p className="text-gray-300">{content}</p>
        </div>
      </Link>
    </motion.div>
  );
};
export default ResourceCard;
