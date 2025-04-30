"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Lightbulb, Gem, Globe, Zap } from "lucide-react";
import { animate } from "animejs";

export function AboutValues() {
	const valuesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".value-card", {
						opacity: [0, 1],
						translateY: [20, 0],
						delay: 100,
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (valuesRef.current) {
			observer.observe(valuesRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const values = [
		{
			icon: <Shield className="h-8 w-8 text-primary" />,
			title: "Trust & Security",
			description:
				"We prioritize the security of your investments and personal information above all else.",
		},
		{
			icon: <Users className="h-8 w-8 text-primary" />,
			title: "Client-Centered",
			description:
				"Every decision we make is guided by what's best for our clients and their financial goals.",
		},
		{
			icon: <Lightbulb className="h-8 w-8 text-primary" />,
			title: "Innovation",
			description:
				"We continuously innovate to provide cutting-edge investment solutions and technologies.",
		},
		{
			icon: <Gem className="h-8 w-8 text-primary" />,
			title: "Excellence",
			description:
				"We strive for excellence in everything we do, from customer service to investment strategies.",
		},
		{
			icon: <Globe className="h-8 w-8 text-primary" />,
			title: "Inclusivity",
			description:
				"We believe everyone deserves access to quality investment opportunities, regardless of their background.",
		},
		{
			icon: <Zap className="h-8 w-8 text-primary" />,
			title: "Empowerment",
			description:
				"We empower our clients with the knowledge and tools they need to make informed investment decisions.",
		},
	];

	return (
		<div ref={valuesRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Our Core Values
			</h2>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{values.map((value, index) => (
					<Card key={index} className="value-card opacity-0">
						<CardContent className="p-6">
							<div className="mb-4">{value.icon}</div>
							<h3 className="text-xl font-bold mb-2">{value.title}</h3>
							<p className="text-muted-foreground">{value.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
