"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number | "some" | "all";
  delay?: number;
}

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: direction === "vertical" ? 0 : undefined,
        x: direction === "horizontal" ? 0 : undefined,
        scale: 1,
        transition: {
          delay: delay / 1000, 
          duration: 1.2,     
          ease: [0.25, 0.1, 0.25, 1], 
        },
      });
      
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const initial = {
    opacity: animateOpacity ? initialOpacity : 1,
    y: direction === "vertical" ? (reverse ? -distance : distance) : 0,
    x: direction === "horizontal" ? (reverse ? -distance : distance) : 0,
    scale,
  };

  return (
    <motion.div ref={ref} initial={initial} animate={controls}>
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
