"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { animate } from "animejs";

interface ServiceHowItWorksProps {
	steps: {
		title: string;
		description: string;
	}[];
}

export function ServiceHowItWorks({ steps }: ServiceHowItWorksProps) {
	const stepsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".step-card", {
						opacity: [0, 1],
						translateY: [20, 0],
						delay: 100,
						easing: "easeOutQuad",
					});

					animate(".step-line", {
						height: ["0%", "100%"],
						delay: 500,
						duration: 1500,
						easing: "easeInOutQuart",
					});

					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (stepsRef.current) {
			observer.observe(stepsRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={stepsRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				How It Works
			</h2>
			<div className="relative">
				{steps.map((step, index) => (
					<div key={index} className="flex mb-8 last:mb-0">
						<div className="relative flex flex-col items-center mr-6">
							<div className="step-card opacity-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
								{index + 1}
							</div>
							{index < steps.length - 1 && (
								<div className="step-line w-0.5 h-0 bg-primary/30 mt-2 mb-2 flex-1" />
							)}
						</div>
						<Card className="step-card opacity-0 flex-1">
							<CardContent className="p-6">
								<h3 className="text-lg font-medium mb-2">{step.title}</h3>
								<p className="text-muted-foreground">{step.description}</p>
							</CardContent>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
}
