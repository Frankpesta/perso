"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export function PlanHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			anime({
				targets: ".plan-header-animate",
				opacity: [0, 1],
				translateY: [20, 0],
				delay: anime.stagger(100),
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={headerRef} className="text-center mb-16">
			<h1 className="plan-header-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
				Investment Plans
			</h1>
			<p className="plan-header-animate opacity-0 text-xl text-muted-foreground max-w-3xl mx-auto">
				Choose the right investment plan for your financial goals. We offer
				tailored solutions for every investor profile.
			</p>
		</div>
	);
}
