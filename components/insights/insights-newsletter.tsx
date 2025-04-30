"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { animate } from "animejs";

export function InsightsNewsletter() {
	const newsletterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".newsletter-animate", {
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

		if (newsletterRef.current) {
			observer.observe(newsletterRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={newsletterRef} className="mb-16">
			<Card className="newsletter-animate opacity-0 bg-muted/50">
				<CardHeader>
					<CardTitle className="text-center">
						Subscribe to Our Investment Insights
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-center text-muted-foreground mb-6">
						Get the latest market analysis, investment strategies, and financial
						insights delivered directly to your inbox.
					</p>
					<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
						<Input
							type="email"
							placeholder="Enter your email"
							className="flex-grow"
							required
						/>
						<Button type="submit">Subscribe</Button>
					</form>
					<p className="text-center text-xs text-muted-foreground mt-4">
						By subscribing, you agree to our Privacy Policy and Terms of
						Service.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
