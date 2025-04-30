"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate } from "animejs";

export function AboutHero() {
	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (heroRef.current) {
			animate(".about-hero-animate", {
				opacity: [0, 1],
				translateY: [20, 0],
				delay: 100,
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div
			ref={heroRef}
			className="grid gap-8 md:grid-cols-2 md:gap-12 items-center mb-16">
			<div className="space-y-6">
				<h1 className="about-hero-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					About InvestWise
				</h1>
				<p className="about-hero-animate opacity-0 text-xl text-muted-foreground">
					We're on a mission to democratize investing and make wealth-building
					accessible to everyone.
				</p>
				<p className="about-hero-animate opacity-0 text-muted-foreground">
					Founded in 2018, InvestWise has grown from a small startup to a
					trusted investment platform serving over 250,000 investors worldwide.
					Our team of financial experts and technology innovators work together
					to provide the best investment experience possible.
				</p>
			</div>
			<div className="about-hero-animate opacity-0 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
				<Image
					src="/placeholder.svg?height=400&width=600"
					alt="About InvestWise"
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 50vw"
					priority
				/>
			</div>
		</div>
	);
}
