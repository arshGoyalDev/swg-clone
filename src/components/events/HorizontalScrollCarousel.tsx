"use client";

import { useRef } from "react";

import { motion, useTransform, useScroll } from "framer-motion";

import { EventCard } from "../cards";

import { eventsData } from "~/utils";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-10">
          {eventsData.map((event) => {
            return (
              <EventCard
                key={event.id}
                id={event.id}
                imageUrl={event.imageUrl}
                content={event.content}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
