"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import anime from "animejs/lib/anime.es.js";

export function LegalOverview() {
	const overviewRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".legal-overview-animate",
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

		if (overviewRef.current) {
			observer.observe(overviewRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={overviewRef} className="mb-12">
			<Card className="legal-overview-animate opacity-0">
				<CardHeader>
					<CardTitle>Legal Overview</CardTitle>
				</CardHeader>
				<CardContent className="prose dark:prose-invert max-w-none">
					<p>
						InvestWise is a financial services platform that provides investment
						services to individuals and institutions. This page contains
						important legal information that governs your use of our services
						and website.
					</p>
					<p>
						The information provided on this website is for general
						informational purposes only and does not constitute financial,
						investment, tax, or legal advice. We recommend consulting with
						qualified professionals before making any investment decisions.
					</p>
					<p>
						InvestWise is registered as a financial services provider and
						operates in compliance with applicable laws and regulations. Our
						services are subject to the terms and conditions outlined in our
						service agreements, which you should review carefully before using
						our platform.
					</p>
					<p>
						By accessing and using the InvestWise platform, you acknowledge that
						you have read, understood, and agree to be bound by our{" "}
						<a href="/terms" className="text-primary hover:underline">
							Terms and Conditions
						</a>{" "}
						and{" "}
						<a href="/privacy" className="text-primary hover:underline">
							Privacy Policy
						</a>
						.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
