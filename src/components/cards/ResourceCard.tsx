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
    <Link href={link}>
      <motion.div
        variants={appearIn(id * 0.15)}
        initial={"hidden"}
        whileInView={"show"}
        className="card--resource relative h-[240px] w-[92vw] overflow-hidden rounded-bl-[3rem] rounded-br-2xl rounded-tl-2xl rounded-tr-[3rem] transition-all hover:shadow-xl md:h-[300px] md:max-w-[500px]"
      >
        <img src={bgImage} alt={title} className="h-full w-full" />
        <div className="absolute left-0 top-0 z-[5] h-full w-full bg-black bg-opacity-10"></div>
        <div className="gird absolute bottom-4 left-4 right-4 z-10 place-content-center gap-1 rounded-bl-[2rem] rounded-br-lg text-white rounded-tl-lg rounded-tr-[2rem] bg-zinc-900 bg-opacity-50 p-4 backdrop-blur-lg transition-all">
          <h2 className="text-lg">{title}</h2>
          <p className="text-gray-300">{content}</p>
        </div>
      </motion.div>
    </Link>
  );
};
export default ResourceCard;
