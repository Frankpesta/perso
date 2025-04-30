"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import anime from "animejs";

export function InsightsGrid() {
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".insight-card",
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

		if (gridRef.current) {
			observer.observe(gridRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const insights = [
		{
			id: "crypto-portfolio-diversification",
			title: "How to Diversify Your Crypto Portfolio in a Volatile Market",
			category: "Cryptocurrency",
			date: "June 10, 2024",
			excerpt:
				"Learn effective strategies for diversifying your cryptocurrency investments to minimize risk while maximizing potential returns.",
			author: "Alex Rivera",
			authorTitle: "Crypto Investment Specialist",
			image: "/placeholder.svg?height=300&width=500",
		},
		{
			id: "retirement-planning-millennials",
			title: "Retirement Planning for Millennials: Start Now, Retire Rich",
			category: "Retirement",
			date: "June 8, 2024",
			excerpt:
				"Why millennials need to start retirement planning early and how small, consistent investments can lead to significant wealth.",
			author: "Sarah Johnson",
			authorTitle: "Retirement Planning Advisor",
			image: "/placeholder.svg?height=300&width=500",
		},
		{
			id: "real-estate-market-trends",
			title: "Real Estate Market Trends: Where to Invest in 2024",
			category: "Real Estate",
			date: "June 5, 2024",
			excerpt:
				"Analysis of emerging real estate markets and investment opportunities in residential, commercial, and REITs.",
			author: "Marcus Chen",
			authorTitle: "Real Estate Investment Analyst",
			image: "/placeholder.svg?height=300&width=500",
		},
		{
			id: "hedge-fund-strategies",
			title: "Hedge Fund Strategies for Retail Investors",
			category: "Investment Strategies",
			date: "June 3, 2024",
			excerpt:
				"How retail investors can implement hedge fund-like strategies to protect and grow their portfolios in any market.",
			author: "David Wilson",
			authorTitle: "Investment Strategist",
			image: "/placeholder.svg?height=300&width=500",
		},
		{
			id: "market-volatility-opportunities",
			title: "Finding Opportunities in Market Volatility",
			category: "Market Analysis",
			date: "May 30, 2024",
			excerpt:
				"How to identify and capitalize on investment opportunities during periods of increased market volatility.",
			author: "Emma Rodriguez",
			authorTitle: "Market Analyst",
			image: "/placeholder.svg?height=300&width=500",
		},
		{
			id: "children-investment-education",
			title: "Teaching Children About Investing: A Guide for Parents",
			category: "Children Investment",
			date: "May 28, 2024",
			excerpt:
				"Practical tips for parents to introduce investment concepts to children and set them up for financial success.",
			author: "James Thompson",
			authorTitle: "Family Financial Advisor",
			image: "/placeholder.svg?height=300&width=500",
		},
	];

	return (
		<div ref={gridRef} className="mb-16">
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{insights.map((insight, index) => (
					<Card key={index} className="insight-card opacity-0 overflow-hidden">
						<div className="relative h-48">
							<Image
								src={insight.image || "/placeholder.svg"}
								alt={insight.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<CardContent className="p-6">
							<div className="mb-2">
								<span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">
									{insight.category}
								</span>
								<span className="text-sm text-muted-foreground ml-3">
									{insight.date}
								</span>
							</div>
							<h3 className="text-xl font-bold mb-3">{insight.title}</h3>
							<p className="text-muted-foreground mb-4 line-clamp-3">
								{insight.excerpt}
							</p>
							<div className="flex items-center">
								<div className="h-8 w-8 rounded-full bg-muted overflow-hidden mr-3">
									<Image
										src="/placeholder.svg?height=32&width=32"
										alt={insight.author}
										width={32}
										height={32}
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="text-sm">
									<p className="font-medium">{insight.author}</p>
									<p className="text-muted-foreground">{insight.authorTitle}</p>
								</div>
								<Button
									variant="ghost"
									size="sm"
									className="ml-auto group"
									asChild>
									<Link href={`/insights/${insight.id}`}>
										Read
										<ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
									</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="mt-8 text-center">
				<Button variant="outline" size="lg">
					Load more insights
				</Button>
			</div>
		</div>
	);
}
