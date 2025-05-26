"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
				"Navigate the dynamic world of cryptocurrencies with confidence. Our expert-guided investment strategies and advanced portfolio management tools help you maximize returns while managing risks. Whether you're a beginner or an experienced investor, we provide personalized advice, real-time market insights, and secure platforms to grow your digital assets.",
			image:
				"https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			href: "/services/crypto",
		},
		{
			title: "Hedge Fund Management",
			description:
				"Gain access to exclusive hedge funds with lower entry barriers, designed for both individual and institutional investors. Our professional management team employs sophisticated strategies to optimize returns, leveraging alternative investments and risk management techniques. Benefit from diversified portfolios and expert oversight tailored to your financial goals.",
			image: "/hedgefunds.jpg",
			href: "/services/hedge-fund",
		},
		{
			title: "Retirement Planning",
			description:
				"Plan for a secure and comfortable retirement with our comprehensive advisory services. We create personalized retirement plans tailored to your lifestyle, financial situation, and long-term goals. From tax-efficient savings strategies to investment options and withdrawal planning, our experts ensure your future is financially sound.",
			image: "/retirement2.jpg",
			href: "/services/retirement",
		},
		{
			title: "Real Estate Investment",
			description:
				"Diversify your portfolio with strategic real estate investments. Our team offers access to high-potential properties, from residential to commercial, paired with professional property management services. We guide you through market analysis, acquisition, and long-term growth strategies to maximize returns and build lasting wealth.",
			image: "/realestate.jpg",
			href: "/services/real-estate",
		},
		{
			title: "Children Investment",
			description:
				"Secure a prosperous future for your children with dedicated investment accounts designed for long-term wealth building. Our tailored solutions include tax-advantaged plans, diversified portfolios, and flexible contribution options. Start early to ensure your children have the financial foundation for education, homeownership, or other life goals.",
			image: "/hedgefund.jpg",
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
						className="service-card opacity-0 border border-border/50 transition-all duration-200 hover:border-primary/50 hover:shadow-md flex flex-col overflow-hidden">
						<img
							src={service.image}
							alt={service.title}
							className="h-55 w-full object-cover rounded-t-lg shadow-sm transition-transform duration-200 hover:scale-105 -mt-6"
							loading="lazy"
						/>
						<CardHeader className="pt-4">
							<CardTitle>{service.title}</CardTitle>
						</CardHeader>
						<CardContent className="flex-grow">
							{service.description}
						</CardContent>
						<CardFooter>
							<Button variant="ghost" asChild className="group">
								<Link href={service.href} className="text-primary">
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
