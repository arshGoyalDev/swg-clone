"use client";

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";

import { appearIn } from "~/utils/animations";

const CvCard = ({
  id,
  cvLink,
  name,
  companyName,
  setCvLightBox,
}: {
  id: number;
  cvLink: string;
  name: string;
  companyName: string;
  setCvLightBox: any;
}) => {
  return (
    <motion.div
      variants={appearIn(0.1*id)}
      initial={"hidden"}
      whileInView={"show"}
      className="relative cursor-pointer rounded-xl border-4 border-gray-200 shadow-xl"
      onClick={() => {
        setCvLightBox({
          name: name,
          cvLink: cvLink,
        });
      }}
    >
      <div className="w-[80vw] overflow-hidden rounded-xl sm:max-w-[320px]">
        <img src={cvLink} alt={companyName + "cv"} />
      </div>

      <div className="absolute -bottom-4 left-4 right-4 grid place-content-center gap-1 rounded-lg bg-black bg-opacity-25 py-4 text-white backdrop-blur-lg">
        <p className="text-lg">{companyName}</p>
        <p className="text-gray-200">{name}</p>
      </div>
    </motion.div>
  );
};
export default CvCard;
