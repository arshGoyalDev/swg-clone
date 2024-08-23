import { easeInOut } from "framer-motion";

const appearIn = (delay: number) => {
  return {
    hidden: {
      x: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: 1,
        ease: easeInOut,
      },
    },
  };
};
export default appearIn;
