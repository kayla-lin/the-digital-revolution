import React, { Children, FC, ReactNode, useRef } from "react";
import TimelineElements from "./TimelineElements";
import { useScroll, motion, useSpring } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Timeline: FC<Props> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress);

  const test = scrollYProgress as any;
  console.log(test.current);
  return (
    <section className="container mx-auto flex flex-col relative">
      <svg
        height="210"
        width="500"
        className="right-1/2 w-0.5 h-full absolute z-50"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0"
          y1="0"
          pathLength="1"
          x2="0"
          y2="100%"
          className="stroke-green-300"
          style={{
            pathLength,
            strokeWidth: "stroke-width:2",
            height: "100%",
            vectorEffect: "non-scaling-stroke",
          }}
        />
      </svg>
      {/* <motion.div
        style={{ scaleX: scrollYProgress }}
        
      /> */}
      <TimelineElements>{children}</TimelineElements>
    </section>
  );
};

export default Timeline;
