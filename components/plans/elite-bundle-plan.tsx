"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export function EliteBundlePlan() {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".elite-animate", {
						opacity: [0, 1],
						translateY: [20, 0],
						duration: 800,
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

	return (
		<section
			ref={sectionRef}
			className="elite-animate opacity-0 max-w-4xl mx-auto px-4 py-12">
			<Card className="bg-background shadow-xl rounded-2xl border border-muted">
				<CardContent className="p-6 sm:p-8 space-y-6">
					<div className="space-y-2">
						<Badge className="bg-primary text-white text-sm">
							Elite Bundle Plan
						</Badge>
						<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
							Exclusive High-Yield Investment Opportunity
						</h2>
					</div>

					<p className="text-muted-foreground">
						Investing above <strong>$100,000</strong> immediately qualifies you
						for the Elite Bundle Plan. The company directly offers you a space
						in this premium plan if available.
					</p>

					<p>
						The Elite Bundle Plan is a high-return investment option, managed by
						expert company traders. Your dedicated account manager will guide
						you through every step to ensure a successful investment experience.
					</p>

					<ul className="space-y-2 pl-5 list-disc text-muted-foreground">
						<li>
							Daily returns of <strong>5.5%</strong> and weekly returns of{" "}
							<strong>25–38%</strong>
						</li>
						<li>
							Structured for a <strong>12-week compounding contract</strong>{" "}
							with withdrawal at the end
						</li>
						<li>Expert guidance from your dedicated account manager</li>
						<li>Early termination allowed with full service charge payment</li>
					</ul>

					<div className="pt-4">
						<div className="flex items-center space-x-2 text-green-600 font-medium">
							<CheckCircle className="h-5 w-5" />
							<span>Highest earning package in the company</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
