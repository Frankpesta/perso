"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export function FaqHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			anime({
				targets: ".faq-header-animate",
				opacity: [0, 1],
				translateY: [20, 0],
				delay: anime.stagger(100),
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={headerRef} className="text-center mb-16">
			<h1 className="faq-header-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
				Frequently Asked Questions
			</h1>
			<p className="faq-header-animate opacity-0 text-xl text-muted-foreground max-w-3xl mx-auto">
				Find answers to common questions about our investment services, platform
				features, and account management.
			</p>
		</div>
	);
}
