"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import anime from "animejs";

export function InsightsCta() {
	const ctaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".insights-cta-animate",
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

		if (ctaRef.current) {
			observer.observe(ctaRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ctaRef}
			className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
			<h3 className="insights-cta-animate opacity-0 text-2xl font-bold mb-4">
				Ready to Start Investing?
			</h3>
			<p className="insights-cta-animate opacity-0 text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
				Put these insights into action. Create an account today and start
				building your investment portfolio with expert guidance.
			</p>
			<div className="insights-cta-animate opacity-0 flex flex-col sm:flex-row justify-center gap-4">
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
					<Link href="/plans">View investment plans</Link>
				</Button>
			</div>
		</div>
	);
}
