"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import anime from "animejs";

interface ServiceCtaProps {
	service: string;
}

export function ServiceCta({ service }: ServiceCtaProps) {
	const ctaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".service-cta-animate",
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
		<div ref={ctaRef} className="bg-muted rounded-lg p-8 md:p-12 text-center">
			<h3 className="service-cta-animate opacity-0 text-2xl font-bold mb-4">
				Ready to start your {service.replace("-", " ")} journey?
			</h3>
			<p className="service-cta-animate opacity-0 text-muted-foreground mb-8 max-w-2xl mx-auto">
				Join thousands of investors who have already transformed their financial
				future with InvestWise. Start building wealth today.
			</p>
			<div className="service-cta-animate opacity-0 flex flex-col sm:flex-row justify-center gap-4">
				<Button size="lg" asChild>
					<Link href="/signup">
						Get started
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
				<Button size="lg" variant="outline" asChild>
					<Link href="/plans">View plans</Link>
				</Button>
			</div>
		</div>
	);
}
