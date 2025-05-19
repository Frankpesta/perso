"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedCounterProps {
	value: number;
	duration?: number; // in ms
	delay?: number; // in ms
}

export function AnimatedCounter({
	value,
	duration = 2000,
	delay = 500,
}: AnimatedCounterProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
	const controls = useAnimation();
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		if (isInView) {
			controls.start({
				"--current": value,
				transition: {
					duration: duration / 1000,
					delay: delay / 1000,
					ease: "easeOut",
				},
			});
		}
	}, [isInView, controls, value, duration, delay]);

	return (
		<motion.span
			ref={ref}
			initial={{ "--current": 0 } as any}
			animate={controls}
			style={{}}
			onUpdate={(latest) => {
				const current = (latest as any)["--current"];
				if (typeof current === "number") {
					setDisplayValue(Math.round(current));
				}
			}}>
			{displayValue}
		</motion.span>
	);
}
