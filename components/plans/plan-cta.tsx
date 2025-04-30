"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { animate } from "animejs";

export function PlanCta() {
	const ctaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".plan-cta-animate", {
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

		if (ctaRef.current) {
			observer.observe(ctaRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ctaRef}
			className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
			<h3 className="plan-cta-animate opacity-0 text-2xl font-bold mb-4">
				Ready to start your investment journey?
			</h3>
			<p className="plan-cta-animate opacity-0 text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
				Choose the plan that fits your needs and start building wealth today.
				Our team is ready to help you achieve your financial goals.
			</p>
			<div className="plan-cta-animate opacity-0 flex flex-col sm:flex-row justify-center gap-4">
				<Button size="lg" variant="secondary" asChild>
					<Link href="/signup">
						Create an account
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
				<Button
					size="lg"
					variant="outline"
					asChild
					className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
					<Link href="/contact">Talk to an advisor</Link>
				</Button>
			</div>
		</div>
	);
}
