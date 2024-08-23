"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { appearIn } from "~/utils/animations";

const BlogCard = () => {
  return (
    <Link href={"https://medium.com/@swgiitkgp/foresight-2024-internship-at-oracle-aryan-kumar-84d1b13945fd"} target="blank">
      <motion.div
        variants={appearIn(0.25)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="cursor-pointer rounded-xl border-2 border-gray-800 xl:max-w-[400px]"
      >
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*qEsjv26X2waUUQnKDeHR9A.jpeg"
            alt={"djdj"}
            className="max-h-96 w-full rounded-t-xl object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-2 p-4">
          <p className="font-semibold text-gray-950">Software</p>
          <p className="text-start text-xl">
            Focus on dynamic programming and graph-related problems. Aim to
            solve at least 100-150 (dp + graph) LeetCode questions to become
            proficient.
          </p>
          <p className="font-medium text-gray-700">June 10, 2024</p>
        </div>
      </motion.div>
    </Link>
  );
};
export default BlogCard;
