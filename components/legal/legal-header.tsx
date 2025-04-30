"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export function LegalHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			anime({
				targets: ".legal-header-animate",
				opacity: [0, 1],
				translateY: [20, 0],
				delay: anime.stagger(100),
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={headerRef} className="text-center mb-16">
			<h1 className="legal-header-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
				Legal Information
			</h1>
			<p className="legal-header-animate opacity-0 text-xl text-muted-foreground max-w-3xl mx-auto">
				Important legal information, regulatory details, and disclaimers
				regarding InvestWise's investment services.
			</p>
		</div>
	);
}
