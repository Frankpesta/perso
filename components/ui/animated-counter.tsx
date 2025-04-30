"use client";

import { useEffect, useState, useRef } from "react";
import { animate } from "animejs";

interface AnimatedCounterProps {
	value: number;
	duration?: number;
	delay?: number;
}

export function AnimatedCounter({
	value,
	duration = 2000,
	delay = 500,
}: AnimatedCounterProps) {
	const [displayValue, setDisplayValue] = useState(0);
	const counterRef = useRef<HTMLSpanElement>(null);
	const animationRef = useRef<any>(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !hasAnimated) {
					if (counterRef.current) {
						const obj = { count: 0 };

						animationRef.current = animate(obj, {
							count: value,
							round: 1,
							easing: "easeOutExpo",
							duration: duration,
							delay: delay,
							update: () => {
								setDisplayValue(obj.count);
							},
							complete: () => {
								setHasAnimated(true);
							},
						});
					}
				}
			},
			{ threshold: 0.1 }
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		return () => {
			observer.disconnect();
			if (animationRef.current) {
				animationRef.current.pause();
			}
		};
	}, [value, duration, delay, hasAnimated]);

	return <span ref={counterRef}>{displayValue}</span>;
}
