"use client";

import { useEffect, useRef } from "react";
import * as animeJs from "animejs";
const anime = animeJs.default;

export function TermsHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			anime({
				targets: ".terms-header-animate",
				opacity: [0, 1],
				translateY: [20, 0],
				delay: anime.stagger(100),
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={headerRef} className="text-center mb-16">
			<h1 className="terms-header-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
				Terms and Conditions
			</h1>
			<p className="terms-header-animate opacity-0 text-xl text-muted-foreground max-w-3xl mx-auto">
				Please read these terms and conditions carefully before using
				InvestWise's services.
			</p>
			<p className="terms-header-animate opacity-0 text-sm text-muted-foreground mt-4">
				Last updated: June 1, 2024
			</p>
		</div>
	);
}
