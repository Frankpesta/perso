"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function InsightsHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			animate(".insights-header-animate", {
				opacity: [0, 1],
				translateY: [20, 0],
				delay: 100,
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={headerRef} className="text-center mb-16">
			<h1 className="insights-header-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
				Market Insights & Analysis
			</h1>
			<p className="insights-header-animate opacity-0 text-xl text-muted-foreground max-w-3xl mx-auto">
				Stay informed with the latest market trends, expert analysis, and
				investment strategies to make smarter financial decisions.
			</p>
		</div>
	);
}
