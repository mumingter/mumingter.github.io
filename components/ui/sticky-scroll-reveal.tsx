"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | undefined;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--slate-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative h-full w-1/3">
        <div className="h-40" />
        {content.map((item, index) => (
          <div key={item.title + index} className="mb-10">
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-2xl font-bold text-foreground"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-lg text-foreground max-w-sm mt-2"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        <div className="h-40" />
      </div>
      <div
        style={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-[30rem] rounded-md sticky top-10 overflow-hidden",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};