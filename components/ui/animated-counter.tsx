"use client";

import { useEffect, useState, useRef } from "react";
import { animate, JSAnimation } from "animejs";

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
	const animationRef = useRef<JSAnimation | null>(null); // Type for animate
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !hasAnimated) {
					if (counterRef.current) {
						const obj = { count: 0 };

						// Use animate with correct options
						animationRef.current = animate(obj, {
							count: value,
							duration: duration,
							delay: delay,
							easing: "easeOutExpo",
							round: 1, // Ensures integer values
							update: () => {
								setDisplayValue(Math.round(obj.count));
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
				animationRef.current.cancel(); // Cancel the animation
			}
		};
	}, [value, duration, delay]);

	return <span ref={counterRef}>{displayValue}</span>;
}
