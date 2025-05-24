"use client";

import { useEffect, useRef } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { CheckIcon, X } from "lucide-react";
import { animate } from "animejs";

// Imported or defined plans array
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

export function PlanComparison() {
	const comparisonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".comparison-animate", {
						opacity: [0, 1],
						translateY: [20, 0],
						duration: 600,
						delay: 100,
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (comparisonRef.current) {
			observer.observe(comparisonRef.current);
		}

		return () => observer.disconnect();
	}, []);

	// Collect all unique features
	const allFeatures = Array.from(
		new Set(plans.flatMap((plan) => plan.features))
	);

	return (
		<div ref={comparisonRef} className="mb-16">
			<h2 className="comparison-animate opacity-0 text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Compare Our Plans
			</h2>

			<div className="comparison-animate opacity-0 overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[250px]">Features</TableHead>
							{plans.map((plan) => (
								<TableHead key={plan.name}>
									<div className="flex flex-col">
										<span className="font-semibold">{plan.name}</span>
										<span className="text-sm">{plan.price}</span>
										{plan.popular && (
											<span className="text-xs text-primary font-bold">
												★ Popular
											</span>
										)}
									</div>
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{allFeatures.map((feature) => (
							<TableRow key={feature}>
								<TableCell className="font-medium">{feature}</TableCell>
								{plans.map((plan) => (
									<TableCell key={plan.name + feature}>
										{plan.features.includes(feature) ? (
											<span>
												<CheckIcon className="h-5 w-5 text-primary" />
											</span>
										) : (
											<X className="h-5 w-5 text-muted-foreground" />
										)}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
