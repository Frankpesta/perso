"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { animate } from "animejs";

export function CtaSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".cta-animate", {
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

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-primary text-primary-foreground py-20 md:py-32">
			<div className="container px-4 text-center">
				<h2 className="cta-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
					Ready to Start Your Investment Journey?
				</h2>
				<p className="cta-animate opacity-0 text-xl max-w-3xl mx-auto mb-8">
					Join thousands of investors who have already transformed their
					financial future with InvestWise. Start building wealth today.
				</p>
				<div className="cta-animate opacity-0 flex flex-col sm:flex-row justify-center gap-4">
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
		</section>
	);
}
