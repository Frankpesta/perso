"use client";

import { useEffect, useRef } from "react";
// Update the import statement for anime.js
import * as animeJs from "animejs";
const anime = animeJs.default;

export function PrivacyHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			anime({
				targets: ".privacy-header-animate",
				opacity: [0, 1],
				translateY: [20, 0],
				delay: anime.stagger(100),
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={headerRef} className="text-center mb-16">
			<h1 className="privacy-header-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
				Privacy Policy
			</h1>
			<p className="privacy-header-animate opacity-0 text-xl text-muted-foreground max-w-3xl mx-auto">
				How we collect, use, and protect your personal information.
			</p>
			<p className="privacy-header-animate opacity-0 text-sm text-muted-foreground mt-4">
				Last updated: June 1, 2024
			</p>
		</div>
	);
}
