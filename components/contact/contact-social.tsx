"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import anime from "animejs";

export function ContactSocial() {
	const socialRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".social-animate",
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

		if (socialRef.current) {
			observer.observe(socialRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const socialLinks = [
		{ name: "Facebook", icon: Facebook, href: "https://facebook.com" },
		{ name: "Twitter", icon: Twitter, href: "https://twitter.com" },
		{ name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
		{ name: "Instagram", icon: Instagram, href: "https://instagram.com" },
		{ name: "YouTube", icon: Youtube, href: "https://youtube.com" },
	];

	return (
		<div ref={socialRef}>
			<Card className="social-animate opacity-0">
				<CardHeader>
					<CardTitle>Connect With Us</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground mb-4">
						Follow us on social media for the latest updates, market insights,
						and investment tips.
					</p>
					<div className="flex flex-wrap gap-3">
						{socialLinks.map((social, index) => (
							<Button key={index} variant="outline" size="icon" asChild>
								<a href={social.href} target="_blank" rel="noopener noreferrer">
									<social.icon className="h-4 w-4" />
									<span className="sr-only">{social.name}</span>
								</a>
							</Button>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
