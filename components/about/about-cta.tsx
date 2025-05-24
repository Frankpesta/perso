"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { animate } from "animejs";

export function AboutCta() {
	const ctaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".about-cta-animate", {
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

	const handleSignup = () => {
		window.location.href = "https://app.baseinvestment.com/register";
	};
	return (
		<div ref={ctaRef} className="bg-muted rounded-lg p-8 md:p-12 text-center">
			<h3 className="about-cta-animate opacity-0 text-2xl font-bold mb-4">
				Join Our Growing Community
			</h3>
			<p className="about-cta-animate opacity-0 text-muted-foreground mb-8 max-w-2xl mx-auto">
				Be part of our mission to democratize investing and build a better
				financial future for everyone. Start your investment journey with Base
				Investment Group Limited today.
			</p>
			<div className="about-cta-animate opacity-0 flex flex-col sm:flex-row justify-center gap-4">
				<Button size="lg" onClick={handleSignup}>
					Get started
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
				<Button size="lg" variant="outline" asChild>
					<Link href="/contact">Contact us</Link>
				</Button>
			</div>
		</div>
	);
}
