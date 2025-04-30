"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import anime from "animejs/lib/anime.es.js";

export function StatsSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".stats-card",
						opacity: [0, 1],
						translateY: [20, 0],
						delay: anime.stagger(100),
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const stats = [
		{
			value: 10,
			unit: "B+",
			label: "Assets Under Management",
		},
		{
			value: 250,
			unit: "K+",
			label: "Active Investors",
		},
		{
			value: 15,
			unit: "%",
			label: "Average Annual Return",
		},
		{
			value: 24,
			unit: "/7",
			label: "Customer Support",
		},
	];

	return (
		<section ref={sectionRef} className="bg-muted py-20 md:py-32">
			<div className="container px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
						Our Impact in Numbers
					</h2>
					<p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
						We're proud of the trust our clients place in us and the results we
						deliver.
					</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<Card
							key={index}
							className="stats-card opacity-0 border-none bg-background">
							<CardContent className="p-6 text-center">
								<div className="text-4xl font-bold mb-2 flex items-center justify-center">
									<AnimatedCounter value={stat.value} duration={2000} />
									<span>{stat.unit}</span>
								</div>
								<p className="text-muted-foreground">{stat.label}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
