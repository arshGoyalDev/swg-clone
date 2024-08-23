import { easeInOut } from "framer-motion/dom";

const fadeIn = (direction: string) => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        ease: easeInOut,
      },
    },
  };
};
export default fadeIn;
