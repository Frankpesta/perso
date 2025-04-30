"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import anime from "animejs";

export function FaqCta() {
	const ctaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".faq-cta-animate",
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
			<h3 className="faq-cta-animate opacity-0 text-2xl font-bold mb-4">
				Still have questions?
			</h3>
			<p className="faq-cta-animate opacity-0 text-muted-foreground mb-8 max-w-2xl mx-auto">
				Our team is here to help. Contact us for personalized assistance with
				any questions you may have about our investment services.
			</p>
			<div className="faq-cta-animate opacity-0">
				<Button size="lg" asChild>
					<Link href="/contact">
						<MessageCircle className="mr-2 h-4 w-4" />
						Contact our support team
					</Link>
				</Button>
			</div>
		</div>
	);
}
