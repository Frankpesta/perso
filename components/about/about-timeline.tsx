"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function AboutTimeline() {
	const timelineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".timeline-item", {
						opacity: [0, 1],
						translateY: [20, 0],
						delay: 200,
						easing: "easeOutQuad",
					});

					animate(".timeline-line", {
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

		if (timelineRef.current) {
			observer.observe(timelineRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const timeline = [
		{
			year: "2018",
			title: "Company Founded",
			description:
				"InvestWise was founded with a mission to democratize investing.",
		},
		{
			year: "2019",
			title: "First 10,000 Users",
			description:
				"Reached our first milestone of 10,000 active investors on the platform.",
		},
		{
			year: "2020",
			title: "Series A Funding",
			description:
				"Secured $15 million in Series A funding to expand our services.",
		},
		{
			year: "2021",
			title: "International Expansion",
			description:
				"Expanded operations to Europe and Asia, serving clients globally.",
		},
		{
			year: "2022",
			title: "100,000 Users Milestone",
			description:
				"Celebrated reaching 100,000 active investors on our platform.",
		},
		{
			year: "2023",
			title: "New Services Launch",
			description: "Launched real estate and children's investment services.",
		},
		{
			year: "2024",
			title: "250,000 Users & Beyond",
			description: "Reached 250,000 users and continuing to innovate and grow.",
		},
	];

	return (
		<div ref={timelineRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Our Journey
			</h2>
			<div className="relative">
				{timeline.map((item, index) => (
					<div
						key={index}
						className="timeline-item opacity-0 flex mb-8 last:mb-0">
						<div className="relative flex flex-col items-center mr-6">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
								{item.year}
							</div>
							{index < timeline.length - 1 && (
								<div className="timeline-line w-0.5 h-0 bg-primary/30 mt-2 mb-2 flex-1" />
							)}
						</div>
						<div className="flex-1 pt-1">
							<h3 className="text-xl font-bold mb-2">{item.title}</h3>
							<p className="text-muted-foreground">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
