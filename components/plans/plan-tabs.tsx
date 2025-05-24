"use client";

import { useEffect, useRef } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { animate } from "animejs";

export function PlanTabs() {
	const tabsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".tabs-animate", {
						opacity: [0, 1],
						translateY: [20, 0],
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (tabsRef.current) {
			observer.observe(tabsRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		animate(".plan-card", {
			opacity: [0, 1],
			translateY: [20, 0],
			delay: 100,
			easing: "easeOutQuad",
		});
	}, []);

	const plans = [
		{
			name: "Starter Plan",
			price: "$200",
			description: "For those beginning their investment journey.",
			features: [
				"Min $200 - Max $2,000",
				"60% ROI monthly",
				"2% ROI daily",
				"Weekly withdrawal by wallet",
				"Committed portfolio manager",
				"25% service commission",
				"Investment duration: 60 days",
				"30% capital insurance",
				"10% referral rate",
			],
		},
		{
			name: "Rush Plan",
			price: "$3,000",
			description: "Accelerated returns for focused investors.",
			features: [
				"Min $3,000 - Max $5,000",
				"66% ROI monthly",
				"2.2% ROI daily",
				"Weekly withdrawal by wallet",
				"Committed portfolio manager",
				"25% service commission",
				"Investment duration: 90 days",
				"30% capital insurance",
				"10% referral rate",
			],
			popular: true,
		},
		{
			name: "Contract Plan",
			price: "$10,000",
			description: "Strategic contract-based wealth building.",
			features: [
				"Min $10,000 - Max $30,000",
				"90% ROI monthly",
				"3% ROI daily",
				"Weekly withdrawal by wallet",
				"Committed portfolio manager",
				"25% service commission",
				"Investment duration: 180 days",
				"30% capital insurance",
				"15% referral rate",
			],
		},
		{
			name: "Ultimate Plan",
			price: "$50,000",
			description: "Elite investors with maximum potential returns.",
			features: [
				"Min $50,000 - Max $100,000",
				"100% ROI monthly",
				"3.5% ROI daily",
				"Weekly withdrawal by wallet",
				"Committed portfolio manager",
				"25% service commission",
				"Investment duration: 250 days",
				"30% capital insurance",
				"20% referral rate",
			],
		},
	];

	const handleSignup = () => {
		window.location.href = "https://app.baseinvestment.com/register";
	};

	return (
		<div ref={tabsRef} className="mb-16">
			<h2 className="tabs-animate opacity-0 text-3xl font-bold mb-6 text-center">
				Our Investment Plans
			</h2>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{plans.map((plan, index) => (
					<Card
						key={index}
						className={`plan-card opacity-0 relative overflow-hidden ${
							plan.popular ? "border-primary shadow-md" : "border-border/50"
						}`}>
						{plan.popular && (
							<div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
								Popular
							</div>
						)}
						<CardHeader>
							<CardTitle>{plan.name}</CardTitle>
							<div className="mt-4 flex items-baseline text-4xl font-extrabold">
								{plan.price}
								<span className="ml-1 text-lg font-medium text-muted-foreground">
									/min
								</span>
							</div>
							<CardDescription className="mt-4">
								{plan.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-3">
								{plan.features.map((feature, i) => (
									<li key={i} className="flex items-start">
										<Check className="h-5 w-5 text-primary shrink-0 mr-2" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button
								className={
									plan.popular
										? ""
										: "bg-muted text-foreground hover:bg-muted/80"
								}
								size="lg"
								onClick={handleSignup}
								variant={plan.popular ? "default" : "outline"}>
								Get started
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
