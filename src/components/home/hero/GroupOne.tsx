"use client";

import { motion } from "framer-motion";

import { fadeIn } from "~/utils/animations";

import Image from "next/image";

const GroupOne = () => {
  return (
    <div className="relative grid gap-6">
      <motion.div
        variants={fadeIn("up", 0.75)}
        whileInView={"show"}
        initial={"hidden"}
        viewport={{ once: false }}
        className="relative grid gap-6"
      >
        <Image
          src={`/images/group-1/1.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
        <Image
          src={`/images/group-1/5.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        whileInView={"show"}
        initial={"hidden"}
        viewport={{ once: false }}
        className="absolute left-[-266px] top-[-160px] grid gap-6"
      >
        <Image
          src={`/images/group-1/3.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
        <Image
          src={`/images/group-1/4.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 1)}
        whileInView={"show"}
        initial={"hidden"}
        viewport={{ once: false }}
        className="absolute right-[-266px] top-[-160px] grid gap-6"
      >
        <Image
          src={`/images/group-1/8.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
        <Image
          src={`/images/group-1/6.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.25)}
        whileInView={"show"}
        initial={"hidden"}
        viewport={{ once: false }}
        className="absolute left-[-530px] top-[-320px] grid gap-6"
      >
        <Image
          src={`/images/group-1/7.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
        <Image
          src={`/images/group-1/8.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 1.25)}
        whileInView={"show"}
        initial={"hidden"}
        viewport={{ once: false }}
        className="absolute right-[-530px] top-[-320px] grid gap-6"
      >
        <Image
          src={`/images/group-1/9.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
        <Image
          src={`/images/group-1/4.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("up")}
        whileInView={"show"}
        initial={"hidden"}
        viewport={{ once: false }}
        className="absolute left-[-790px] top-[-480px] grid gap-6"
      >
        <Image
          src={`/images/group-1/3.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
        <Image
          src={`/images/group-1/10.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 1.5)}
        whileInView={"show"}
        initial={"hidden"}
        viewport={{ once: false }}
        className="absolute right-[-790px] top-[-480px] grid gap-6"
      >
        <Image
          src={`/images/group-1/2.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
        <Image
          src={`/images/group-1/8.png`}
          alt="1"
          width={236}
          height={350}
          className="rounded-xl"
        />
      </motion.div>
    </div>
  );
};
export default GroupOne;
