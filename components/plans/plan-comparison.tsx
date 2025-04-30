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
import { Check, X } from "lucide-react";
import { animate } from "animejs";

export function PlanComparison() {
	const comparisonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".comparison-animate", {
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

		if (comparisonRef.current) {
			observer.observe(comparisonRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={comparisonRef} className="mb-16">
			<h2 className="comparison-animate opacity-0 text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Plan Comparison
			</h2>
			<div className="comparison-animate opacity-0 overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[200px]">Feature</TableHead>
							<TableHead>Basic</TableHead>
							<TableHead>Standard</TableHead>
							<TableHead>Premium</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">Investment Options</TableCell>
							<TableCell>Limited</TableCell>
							<TableCell>Expanded</TableCell>
							<TableCell>Full Universe</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Advisory Services</TableCell>
							<TableCell>
								<X className="h-5 w-5 text-muted-foreground" />
							</TableCell>
							<TableCell>Basic</TableCell>
							<TableCell>Dedicated Advisor</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Market Analysis</TableCell>
							<TableCell>Weekly</TableCell>
							<TableCell>Daily</TableCell>
							<TableCell>Real-time</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">
								Portfolio Rebalancing
							</TableCell>
							<TableCell>Quarterly</TableCell>
							<TableCell>Monthly</TableCell>
							<TableCell>Weekly</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Tax Optimization</TableCell>
							<TableCell>
								<X className="h-5 w-5 text-muted-foreground" />
							</TableCell>
							<TableCell>
								<Check className="h-5 w-5 text-primary" />
							</TableCell>
							<TableCell>
								<Check className="h-5 w-5 text-primary" />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">
								Educational Resources
							</TableCell>
							<TableCell>Basic</TableCell>
							<TableCell>Advanced</TableCell>
							<TableCell>Premium</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Customer Support</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Email & Phone</TableCell>
							<TableCell>24/7 Dedicated</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Mobile App Access</TableCell>
							<TableCell>
								<Check className="h-5 w-5 text-primary" />
							</TableCell>
							<TableCell>
								<Check className="h-5 w-5 text-primary" />
							</TableCell>
							<TableCell>
								<Check className="h-5 w-5 text-primary" />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
