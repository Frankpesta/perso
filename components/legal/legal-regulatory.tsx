"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as animeJs from "animejs";
const anime = animeJs.default;

export function LegalRegulatory() {
	const regulatoryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".legal-regulatory-animate",
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

		if (regulatoryRef.current) {
			observer.observe(regulatoryRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={regulatoryRef} className="mb-12">
			<Card className="legal-regulatory-animate opacity-0">
				<CardHeader>
					<CardTitle>Regulatory Information</CardTitle>
				</CardHeader>
				<CardContent className="prose dark:prose-invert max-w-none">
					<h3>Regulatory Status</h3>
					<p>
						InvestWise is registered as a financial services provider with the
						appropriate regulatory authorities in the jurisdictions where we
						operate. Our services are subject to oversight by these regulatory
						bodies to ensure compliance with applicable laws and regulations.
					</p>

					<h3>Licensing Information</h3>
					<p>InvestWise holds the following licenses and registrations:</p>
					<ul>
						<li>
							Securities and Exchange Commission (SEC) - Registered Investment
							Advisor
						</li>
						<li>
							Financial Industry Regulatory Authority (FINRA) - Broker-Dealer
						</li>
						<li>
							Commodity Futures Trading Commission (CFTC) - Commodity Trading
							Advisor
						</li>
						<li>National Futures Association (NFA) - Member</li>
						<li>
							Various state securities regulators - As required for operations
						</li>
					</ul>

					<h3>Compliance</h3>
					<p>
						InvestWise is committed to maintaining the highest standards of
						compliance with all applicable laws and regulations, including:
					</p>
					<ul>
						<li>Anti-Money Laundering (AML) regulations</li>
						<li>Know Your Customer (KYC) requirements</li>
						<li>Securities laws and regulations</li>
						<li>Data protection and privacy laws</li>
						<li>Consumer protection regulations</li>
					</ul>

					<h3>Investor Protection</h3>
					<p>
						Client accounts at InvestWise are protected by the Securities
						Investor Protection Corporation (SIPC) up to $500,000, including a
						maximum of $250,000 for cash claims. SIPC protection does not cover
						market losses or protect against the decline in value of your
						securities.
					</p>
					<p>
						For more information about SIPC coverage, please visit{" "}
						<a
							href="https://www.sipc.org"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline">
							www.sipc.org
						</a>
						.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
