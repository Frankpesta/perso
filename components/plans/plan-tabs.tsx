"use client";

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import anime from "animejs";

export function PlanTabs() {
	const [activeTab, setActiveTab] = useState("crypto");
	const tabsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".tabs-animate",
						opacity: [0, 1],
						translateY: [20, 0],
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (tabsRef.current) {
			observer.observe(tabsRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		anime({
			targets: ".plan-card",
			opacity: [0, 1],
			translateY: [20, 0],
			delay: anime.stagger(100),
			easing: "easeOutQuad",
		});
	}, [activeTab]);

	const services = [
		{
			id: "crypto",
			name: "Crypto Investment",
		},
		{
			id: "hedge-fund",
			name: "Hedge Fund",
		},
		{
			id: "retirement",
			name: "Retirement",
		},
		{
			id: "real-estate",
			name: "Real Estate",
		},
		{
			id: "children",
			name: "Children Investment",
		},
	];

	const plans = {
		crypto: [
			{
				name: "Starter",
				price: "$50",
				description:
					"Perfect for beginners exploring cryptocurrency investments.",
				features: [
					"Access to top 10 cryptocurrencies",
					"Basic market analysis tools",
					"Weekly market insights",
					"Email support",
					"Minimum investment: $50",
				],
			},
			{
				name: "Growth",
				price: "$250",
				description:
					"Ideal for investors looking to grow their crypto portfolio.",
				features: [
					"Access to 50+ cryptocurrencies",
					"Advanced market analysis tools",
					"Daily market insights",
					"Priority email support",
					"Automated portfolio rebalancing",
					"Minimum investment: $250",
				],
				popular: true,
			},
			{
				name: "Premium",
				price: "$1,000",
				description: "For serious crypto investors seeking maximum returns.",
				features: [
					"Access to 100+ cryptocurrencies",
					"Professional trading tools",
					"Real-time market alerts",
					"24/7 dedicated support",
					"Custom investment strategies",
					"Tax optimization tools",
					"Minimum investment: $1,000",
				],
			},
		],
		"hedge-fund": [
			{
				name: "Access",
				price: "$5,000",
				description: "Entry-level access to hedge fund investments.",
				features: [
					"Access to 5 hedge funds",
					"Quarterly performance reports",
					"Basic risk assessment tools",
					"Email support",
					"Minimum investment: $5,000",
				],
			},
			{
				name: "Select",
				price: "$25,000",
				description: "Expanded access to diverse hedge fund strategies.",
				features: [
					"Access to 15 hedge funds",
					"Monthly performance reports",
					"Advanced risk assessment tools",
					"Priority support",
					"Quarterly strategy consultations",
					"Minimum investment: $25,000",
				],
				popular: true,
			},
			{
				name: "Elite",
				price: "$100,000",
				description: "Premium access to exclusive hedge fund opportunities.",
				features: [
					"Access to 30+ hedge funds",
					"Weekly performance reports",
					"Comprehensive risk management",
					"24/7 dedicated advisor",
					"Custom portfolio construction",
					"Tax optimization strategies",
					"Minimum investment: $100,000",
				],
			},
		],
		retirement: [
			{
				name: "Essential",
				price: "$100",
				description: "Start building your retirement nest egg.",
				features: [
					"Basic retirement planning tools",
					"Access to index funds",
					"Annual retirement check-up",
					"Email support",
					"Minimum investment: $100",
				],
			},
			{
				name: "Balanced",
				price: "$500",
				description:
					"Comprehensive retirement planning for mid-career professionals.",
				features: [
					"Advanced retirement calculators",
					"Diversified investment options",
					"Semi-annual retirement check-up",
					"Priority support",
					"Tax-efficient strategies",
					"Minimum investment: $500",
				],
				popular: true,
			},
			{
				name: "Secure",
				price: "$2,000",
				description: "Maximum security and growth for your retirement funds.",
				features: [
					"Personalized retirement roadmap",
					"Full investment universe access",
					"Quarterly retirement check-up",
					"Dedicated retirement advisor",
					"Estate planning assistance",
					"Tax optimization strategies",
					"Minimum investment: $2,000",
				],
			},
		],
		"real-estate": [
			{
				name: "Explorer",
				price: "$1,000",
				description: "Begin your real estate investment journey.",
				features: [
					"Access to REITs",
					"Basic property analysis tools",
					"Quarterly market reports",
					"Email support",
					"Minimum investment: $1,000",
				],
			},
			{
				name: "Developer",
				price: "$10,000",
				description:
					"Expand your real estate portfolio with diverse properties.",
				features: [
					"Access to REITs and property funds",
					"Advanced property analysis tools",
					"Monthly market reports",
					"Priority support",
					"Property investment webinars",
					"Minimum investment: $10,000",
				],
				popular: true,
			},
			{
				name: "Magnate",
				price: "$50,000",
				description: "Premium access to exclusive real estate opportunities.",
				features: [
					"Full real estate investment universe",
					"Professional property analysis suite",
					"Weekly market insights",
					"Dedicated real estate advisor",
					"Custom investment strategies",
					"Property acquisition assistance",
					"Minimum investment: $50,000",
				],
			},
		],
		children: [
			{
				name: "Future",
				price: "$50",
				description: "Start building wealth for your child's future.",
				features: [
					"Child investment account setup",
					"Basic educational resources",
					"Annual growth reports",
					"Email support",
					"Minimum investment: $50",
				],
			},
			{
				name: "Scholar",
				price: "$250",
				description: "Comprehensive education funding and wealth building.",
				features: [
					"Education-focused investment options",
					"College cost calculators",
					"Semi-annual growth reports",
					"Priority support",
					"Age-based portfolio adjustments",
					"Minimum investment: $250",
				],
				popular: true,
			},
			{
				name: "Legacy",
				price: "$1,000",
				description:
					"Maximum growth potential for your child's financial future.",
				features: [
					"Comprehensive investment options",
					"Education and beyond planning",
					"Quarterly growth reports",
					"Dedicated family advisor",
					"Custom milestone-based strategies",
					"Tax-advantaged account options",
					"Minimum investment: $1,000",
				],
			},
		],
	};

	const currentPlans = plans[activeTab as keyof typeof plans];

	return (
		<div ref={tabsRef} className="mb-16">
			<Tabs
				defaultValue="crypto"
				value={activeTab}
				onValueChange={setActiveTab}
				className="w-full">
				<TabsList className="tabs-animate opacity-0 grid grid-cols-2 md:grid-cols-5 w-full mb-8">
					{services.map((service) => (
						<TabsTrigger key={service.id} value={service.id}>
							{service.name}
						</TabsTrigger>
					))}
				</TabsList>
				<TabsContent value={activeTab} className="mt-0">
					<div className="grid gap-8 md:grid-cols-3">
						{currentPlans.map((plan, index) => (
							<Card
								key={index}
								className={`plan-card opacity-0 relative overflow-hidden ${
									plan.popular ? "border-primary shadow-md" : "border-border/50"
								}`}>
								{plan.popular && (
									<div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
										Popular
									</div>
								)}
								<CardHeader>
									<CardTitle>{plan.name}</CardTitle>
									<div className="mt-4 flex items-baseline text-5xl font-extrabold">
										{plan.price}
										<span className="ml-1 text-2xl font-medium text-muted-foreground">
											/min
										</span>
									</div>
									<CardDescription className="mt-4">
										{plan.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										{plan.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-start">
												<Check className="h-5 w-5 text-primary shrink-0 mr-2" />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
								<CardFooter>
									<Button
										className={
											plan.popular
												? ""
												: "bg-muted text-foreground hover:bg-muted/80"
										}
										size="lg"
										asChild
										variant={plan.popular ? "default" : "outline"}>
										<Link href="/signup">Get started</Link>
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
