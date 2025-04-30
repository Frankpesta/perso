"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatedChart } from "@/components/ui/animated-chart";
import { animate } from "animejs";

export function HeroSection() {
	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (heroRef.current) {
			animate(".hero-animate-item", {
				opacity: [0, 1],
				translateY: [20, 0],
				delay: 100,
				easing: "easeOutQuad",
			});

			animate(".hero-bg-dots", {
				opacity: [0, 0.3],
				delay: 800,
				duration: 1500,
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={heroRef} className="relative overflow-hidden">
			{/* Background dots */}
			<div className="hero-bg-dots absolute inset-0 opacity-0">
				<div className="absolute inset-0 bg-[radial-gradient(#6366F1_1px,transparent_1px)] dark:bg-[radial-gradient(#6366F1_1px,transparent_1px)] bg-[length:20px_20px]" />
			</div>

			<div className="container px-4 py-20 md:py-32 lg:py-40">
				<div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
					<div className="space-y-8">
						<h1 className="hero-animate-item opacity-0 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
							Built for the Future of{" "}
							<span className="text-primary">Investing</span>
						</h1>
						<p className="hero-animate-item opacity-0 text-xl text-muted-foreground md:text-2xl">
							Analyze, buy, and invest with tools purpose-built for how you
							build wealth.
						</p>
						<div className="hero-animate-item opacity-0 flex flex-col sm:flex-row gap-4">
							<Button size="lg" asChild>
								<Link href="/signup">
									Get started
									<ChevronRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/plans">View plans</Link>
							</Button>
						</div>
						<div className="hero-animate-item opacity-0 flex items-center gap-4 text-sm text-muted-foreground">
							<div className="flex -space-x-2">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className="h-8 w-8 rounded-full border-2 border-background bg-muted"
									/>
								))}
							</div>
							<p>
								<span className="font-medium text-foreground">10,000+</span>{" "}
								investors trust us with their financial future
							</p>
						</div>
					</div>
					<div className="hero-animate-item opacity-0 relative lg:h-[600px]">
						<AnimatedChart />
					</div>
				</div>
			</div>
		</div>
	);
}
