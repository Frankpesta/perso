"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import anime from "animejs";

export function InsightsFeatured() {
	const featuredRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".featured-insight-animate",
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

		if (featuredRef.current) {
			observer.observe(featuredRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={featuredRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Featured Insight
			</h2>
			<Card className="featured-insight-animate opacity-0 overflow-hidden border-none">
				<div className="grid md:grid-cols-2 gap-0">
					<div className="relative h-64 md:h-auto">
						<Image
							src="/placeholder.svg?height=600&width=800"
							alt="Market trends"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
					<CardContent className="p-6 md:p-8 lg:p-10 flex flex-col">
						<div className="mb-2">
							<span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">
								Market Analysis
							</span>
							<span className="text-sm text-muted-foreground ml-3">
								June 15, 2024
							</span>
						</div>
						<h3 className="text-2xl font-bold mb-4">
							The Future of Decentralized Finance: Trends to Watch in 2024
						</h3>
						<p className="text-muted-foreground mb-6 flex-grow">
							Decentralized Finance (DeFi) continues to reshape the financial
							landscape. In this analysis, we explore the key trends that will
							define the DeFi space in 2024 and how investors can position
							themselves to benefit from this evolving ecosystem.
						</p>
						<div className="flex items-center">
							<div className="h-10 w-10 rounded-full bg-muted overflow-hidden mr-3">
								<Image
									src="/placeholder.svg?height=40&width=40"
									alt="Author"
									width={40}
									height={40}
									className="h-full w-full object-cover"
								/>
							</div>
							<div>
								<p className="font-medium">Michael Chen</p>
								<p className="text-sm text-muted-foreground">
									Chief Investment Officer
								</p>
							</div>
							<Button variant="ghost" className="ml-auto group" asChild>
								<Link href="/insights/defi-trends-2024">
									Read more
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Link>
							</Button>
						</div>
					</CardContent>
				</div>
			</Card>
		</div>
	);
}
