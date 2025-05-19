"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function LegalHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			animate(".legal-header-animate", {
				opacity: [0, 1],
				translateY: [20, 0],
				delay: 100,
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
				regarding Base Investment Group Limited's investment services.
			</p>
		</div>
	);
}
