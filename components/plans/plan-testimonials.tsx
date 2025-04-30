"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { animate } from "animejs";

export function PlanTestimonials() {
	const testimonialsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".plan-testimonial", {
						opacity: [0, 1],
						translateY: [20, 0],
						delay: 100,
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (testimonialsRef.current) {
			observer.observe(testimonialsRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const testimonials = [
		{
			quote:
				"The Basic plan was perfect for me to start my investment journey. The educational resources helped me understand the market better.",
			author: "Alex Johnson",
			title: "Basic Plan User",
			image: "/placeholder.svg?height=80&width=80",
		},
		{
			quote:
				"Upgrading to the Standard plan was a game-changer. The monthly portfolio rebalancing and tax optimization features have significantly improved my returns.",
			author: "Sarah Williams",
			title: "Standard Plan User",
			image: "/placeholder.svg?height=80&width=80",
		},
		{
			quote:
				"As a Premium plan user, having a dedicated advisor has made all the difference. The personalized strategies have helped me achieve my financial goals faster than I expected.",
			author: "Michael Chen",
			title: "Premium Plan User",
			image: "/placeholder.svg?height=80&width=80",
		},
	];

	return (
		<div ref={testimonialsRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				What Our Clients Say
			</h2>
			<div className="grid gap-6 md:grid-cols-3">
				{testimonials.map((testimonial, index) => (
					<Card
						key={index}
						className="plan-testimonial opacity-0 border-none bg-muted/50">
						<CardContent className="p-6">
							<Quote className="h-8 w-8 text-primary/20 mb-4" />
							<blockquote className="mb-4 text-base">
								"{testimonial.quote}"
							</blockquote>
							<div className="flex items-center">
								<div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-muted">
									<img
										src={testimonial.image || "/placeholder.svg"}
										alt={testimonial.author}
										width={40}
										height={40}
										className="h-full w-full object-cover"
									/>
								</div>
								<div>
									<div className="font-medium">{testimonial.author}</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.title}
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
