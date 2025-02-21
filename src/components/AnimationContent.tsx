"use client";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

interface Props {
    children: React.ReactNode;
    distance?: number;
    direction?: "vertical" | "horizontal";
    reverse?: boolean;
    config?: {
        tension: number;
        friction: number;
    };
    initialOpacity?: number;
    animateOpacity?: boolean;
    scale?: number;
    threshold?: number;
    delay?: number;
}

const AnimatedContent = ({
    children,
    distance = 100,
    direction = "vertical",
    reverse = false,
    config = { tension: 50, friction: 25 },
    initialOpacity = 0,
    animateOpacity = true,
    scale = 1,
    threshold = 0.1,
    delay = 0
}: Props) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    observer.unobserve(ref.current!);
                    timeoutRef.current = setTimeout(() => {
                        setInView(true);
                    }, delay);
                }
            },
            { threshold }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [threshold, delay]);

    const directions = {
        vertical: "Y",
        horizontal: "X",
    };

    const springProps = useSpring({
        from: inView
            ? {}
            : {
                  transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`}) scale(${scale})`,
                  opacity: animateOpacity ? initialOpacity : 1,
              },
        to: inView
            ? {
                  transform: `translate${directions[direction]}(0px) scale(1)`,
                  opacity: 1,
              }
            : undefined,
        config,
    });

    return (
        <animated.div ref={ref} style={springProps}>
            {children}
        </animated.div>
    );
};

export default AnimatedContent;
