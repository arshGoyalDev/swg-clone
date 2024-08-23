"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Image from "next/image";

import { fadeIn } from "~/utils/animations";

const HeroSection = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [animationOrder, setAnimationOrder] = useState("up");
  // const [groupChange, setGroupChange] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (animationOrder === "up") {
        if (currentGroup !== 2) {
          setCurrentGroup(currentGroup + 1);
        } else {
          setAnimationOrder("down");
        }
      } else {
        if (currentGroup !== 0) {
          setCurrentGroup(currentGroup - 1);
        } else {
          setAnimationOrder("up");
        }
      }
    }, 3500);
  }, [currentGroup, animationOrder]);

  const data: {
    name: string;
    title: string;
  }[] = [
    {
      name: "group-1",
      title: "Academics",
    },
    {
      name: "group-2",
      title: "CDC Preparation",
    },
    {
      name: "group-3",
      title: "College Journey",
    },
  ];

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="grid grid-cols-1 place-content-center overflow-x-hidden py-20 pb-40 pt-20 lg:pt-32"
    >
      <div className="flex flex-col items-center px-4 text-center lg:px-12 xl:px-32">
        <Image
          src="/images/hero-image.png"
          alt="hero-image"
          width={120}
          height={120}
        />
        <h1 className="relative mt-3 flex flex-col items-center gap-4 font-extralight">
          <span className="text-3xl text-gray-700 lg:text-4xl">
            Right there with you in your
          </span>
          <span
            className={`animate w-[236px] text-4xl font-semibold lg:w-fit lg:text-6xl`}
          >
            {currentGroup === 0 && (
              <span className="text-[#db9336]">{data[0]?.title}</span>
            )}
            {currentGroup === 1 && (
              <span className="text-[#78d2d3]">{data[1]?.title}</span>
            )}
            {currentGroup === 2 && (
              <span className="text-[#305f2d]">{data[2]?.title}</span>
            )}
          </span>
        </h1>
      </div>

      <div className="mt-32 grid w-full place-content-center lg:mt-52">
        <div
          className="relative grid gap-6"
        >
          <Image
            src={`/images/${data[currentGroup]?.name}/1.png`}
            alt="1"
            width={236}
            height={350}
            className="rounded-xl"
          />
          <Image
            src={`/images/${data[currentGroup]?.name}/2.png`}
            alt="1"
            width={236}
            height={350}
            className="rounded-xl"
          />

          <div className="absolute left-[-266px] top-[-160px] grid gap-6">
            <Image
              src={`/images/${data[currentGroup]?.name}/3.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
            <Image
              src={`/images/${data[currentGroup]?.name}/4.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
          </div>
          <div className="absolute right-[-266px] top-[-160px] grid gap-6">
            <Image
              src={`/images/${data[currentGroup]?.name}/5.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
            <Image
              src={`/images/${data[currentGroup]?.name}/6.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
          </div>
          <div className="absolute left-[-530px] top-[-320px] grid gap-6">
            <Image
              src={`/images/${data[currentGroup]?.name}/7.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
            <Image
              src={`/images/${data[currentGroup]?.name}/8.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
          </div>
          <div className="absolute right-[-530px] top-[-320px] grid gap-6">
            <Image
              src={`/images/${data[currentGroup]?.name}/9.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
            <Image
              src={`/images/${data[currentGroup]?.name}/4.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
          </div>

          <div className="absolute left-[-790px] top-[-480px] grid gap-6">
            <Image
              src={`/images/${data[currentGroup]?.name}/3.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
            <Image
              src={`/images/${data[currentGroup]?.name}/10.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
          </div>
          <div className="absolute right-[-790px] top-[-480px] grid gap-6">
            <Image
              src={`/images/${data[currentGroup]?.name}/2.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
            <Image
              src={`/images/${data[currentGroup]?.name}/8.png`}
              alt="1"
              width={236}
              height={350}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default HeroSection;
