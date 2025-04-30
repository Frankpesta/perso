"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as animeJs from "animejs";
const anime = animeJs.default;

export function LegalContact() {
	const contactRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".legal-contact-animate",
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

		if (contactRef.current) {
			observer.observe(contactRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={contactRef} className="mb-12">
			<Card className="legal-contact-animate opacity-0">
				<CardHeader>
					<CardTitle>Legal Contact Information</CardTitle>
				</CardHeader>
				<CardContent className="prose dark:prose-invert max-w-none">
					<p>
						For legal inquiries, notices, or concerns regarding InvestWise's
						services, please contact our legal department:
					</p>

					<div className="not-prose my-6 space-y-2">
						<p>
							<strong>Legal Department</strong>
							<br />
							InvestWise, Inc.
							<br />
							123 Wall Street, Suite 1500
							<br />
							New York, NY 10005
							<br />
							United States
						</p>

						<p>
							<strong>Email:</strong> legal@investwise.com
							<br />
							<strong>Phone:</strong> +1 (212) 555-0123
						</p>
					</div>

					<p>
						For general inquiries, customer support, or technical assistance,
						please visit our{" "}
						<Link href="/contact" className="text-primary hover:underline">
							Contact Us
						</Link>{" "}
						page.
					</p>

					<div className="not-prose mt-6">
						<Button asChild>
							<Link href="/contact">Contact Us</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
