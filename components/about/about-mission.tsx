"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import anime from "animejs";

export function AboutMission() {
	const missionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".mission-card",
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

		if (missionRef.current) {
			observer.observe(missionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={missionRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Our Mission & Vision
			</h2>
			<div className="grid gap-6 md:grid-cols-2">
				<Card className="mission-card opacity-0">
					<CardContent className="p-6">
						<h3 className="text-xl font-bold mb-4">Mission</h3>
						<p className="text-muted-foreground">
							To democratize investing by providing accessible, transparent, and
							innovative investment solutions that help people achieve their
							financial goals, regardless of their background or starting point.
						</p>
					</CardContent>
				</Card>
				<Card className="mission-card opacity-0">
					<CardContent className="p-6">
						<h3 className="text-xl font-bold mb-4">Vision</h3>
						<p className="text-muted-foreground">
							A world where everyone has the opportunity to build wealth and
							secure their financial future through smart, accessible
							investments tailored to their unique needs and goals.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
