"use client";

import { useEffect, useRef } from "react";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { animate } from "animejs";
import { IconMap } from "@/components/icon-map";

interface ServiceFeaturesProps {
	features: {
		title: string;
		description: string;
		icon: string; // Changed from React.ReactNode to string
	}[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
	const featuresRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".feature-card", {
						opacity: [0, 1],
						translateY: [20, 0],
						delay: (el, i) => 100 * i,
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (featuresRef.current) {
			observer.observe(featuresRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={featuresRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Key Features
			</h2>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{features.map((feature, index) => (
					<Card
						key={index}
						className="feature-card opacity-0 border border-border/50 transition-all duration-200 hover:border-primary/50 hover:shadow-md">
						<CardHeader>
							<div className="mb-4 text-primary">
								<IconMap name={feature.icon} className="w-6 h-6" />
							</div>
							<CardTitle>{feature.title}</CardTitle>
							<CardDescription>{feature.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
}
