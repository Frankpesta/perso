"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Bitcoin,
	Building,
	LineChart,
	PiggyBank,
	Users,
} from "lucide-react";
import { animate } from "animejs";

export function ServicesSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".service-card", {
						opacity: [0, 1],
						translateY: [50, 0],
						delay: 100,
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const services = [
		{
			title: "Crypto Investment",
			description:
				"Invest in cryptocurrencies with our expert guidance and portfolio management tools.",
			icon: <Bitcoin className="h-10 w-10 text-primary" />,
			href: "/services/crypto",
		},
		{
			title: "Hedge Fund Management",
			description:
				"Access exclusive hedge funds with lower entry barriers and professional management.",
			icon: <LineChart className="h-10 w-10 text-primary" />,
			href: "/services/hedge-fund",
		},
		{
			title: "Retirement Planning",
			description:
				"Secure your future with our retirement advisory services and personalized plans.",
			icon: <PiggyBank className="h-10 w-10 text-primary" />,
			href: "/services/retirement",
		},
		{
			title: "Real Estate Investment",
			description:
				"Diversify your portfolio with real estate investments and property management.",
			icon: <Building className="h-10 w-10 text-primary" />,
			href: "/services/real-estate",
		},
		{
			title: "Children Investment",
			description:
				"Start building wealth for your children's future with dedicated investment accounts.",
			icon: <Users className="h-10 w-10 text-primary" />,
			href: "/services/children",
		},
	];

	return (
		<section ref={sectionRef} className="container px-4 py-20 md:py-32">
			<div className="text-center mb-16">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					Our Investment Services
				</h2>
				<p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
					Comprehensive investment solutions tailored to your financial goals
					and risk tolerance.
				</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{services.map((service, index) => (
					<Card
						key={index}
						className="service-card opacity-0 border border-border/50 transition-all duration-200 hover:border-primary/50 hover:shadow-md">
						<CardHeader>
							<div className="mb-4">{service.icon}</div>
							<CardTitle>{service.title}</CardTitle>
							<CardDescription>{service.description}</CardDescription>
						</CardHeader>
						<CardFooter>
							<Button variant="ghost" asChild className="group">
								<Link href={service.href}>
									Learn more
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}
