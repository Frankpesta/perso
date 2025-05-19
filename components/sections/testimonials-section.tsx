"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { animate } from "animejs";

export function TestimonialsSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".testimonial-animate", {
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

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const testimonials = [
		{
			quote:
				"Base Investment Group Limited has transformed how I manage my investments. The platform is intuitive and the returns have been exceptional.",
			author: "Sofia Davis",
			title: "Entrepreneur",
			image: "/4.jpg",
		},
		{
			quote:
				"The crypto investment service has helped me navigate the complex world of digital assets with confidence and security.",
			author: "Marcus Chen",
			title: "Software Engineer",
			image: "/2.jpg",
		},
		{
			quote:
				"Setting up a college fund for my children was seamless with Base Investment Group Limited. Their dedicated advisors made the process simple.",
			author: "Amelia Rodriguez",
			title: "Marketing Director",
			image: "/3.jpg",
		},
	];

	const handlePrev = () => {
		if (isAnimating) return;
		setIsAnimating(true);

		animate(".testimonial-card", {
			opacity: [1, 0],
			translateX: [0, -20],
			easing: "easeInQuad",
			duration: 300,
			complete: () => {
				setActiveIndex((prev) =>
					prev === 0 ? testimonials.length - 1 : prev - 1
				);

				animate(".testimonial-card", {
					opacity: [0, 1],
					translateX: [20, 0],
					easing: "easeOutQuad",
					duration: 300,
					complete: () => setIsAnimating(false),
				});
			},
		});
	};

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);

		animate(".testimonial-card", {
			opacity: [1, 0],
			translateX: [0, 20],
			easing: "easeInQuad",
			duration: 300,
			complete: () => {
				setActiveIndex((prev) =>
					prev === testimonials.length - 1 ? 0 : prev + 1
				);

				animate(".testimonial-card", {
					opacity: [0, 1],
					translateX: [-20, 0],
					easing: "easeOutQuad",
					duration: 300,
					complete: () => setIsAnimating(false),
				});
			},
		});
	};

	const currentTestimonial = testimonials[activeIndex];

	return (
		<section ref={sectionRef} className="container px-4 py-20 md:py-32">
			<div className="text-center mb-16 testimonial-animate opacity-0">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					What Our Clients Say
				</h2>
				<p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
					Hear from investors who have transformed their financial future with
					Base Investment Group Limited.
				</p>
			</div>

			<div className="max-w-4xl mx-auto">
				<Card className="testimonial-card border-none bg-muted/50">
					<CardContent className="p-8 md:p-12">
						<Quote className="h-12 w-12 text-primary/20 mb-6" />
						<blockquote className="mb-8 text-xl md:text-2xl font-medium">
							"{currentTestimonial.quote}"
						</blockquote>
						<div className="flex items-center">
							<div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-muted">
								<img
									src={currentTestimonial.image || "/placeholder.svg"}
									alt={currentTestimonial.author}
									width={48}
									height={48}
									className="h-full w-full object-cover"
								/>
							</div>
							<div>
								<div className="font-medium">{currentTestimonial.author}</div>
								<div className="text-sm text-muted-foreground">
									{currentTestimonial.title}
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<div className="flex justify-center mt-8 gap-2 testimonial-animate opacity-0">
					<Button
						variant="outline"
						size="icon"
						onClick={handlePrev}
						disabled={isAnimating}>
						<ChevronLeft className="h-4 w-4" />
						<span className="sr-only">Previous testimonial</span>
					</Button>
					<Button
						variant="outline"
						size="icon"
						onClick={handleNext}
						disabled={isAnimating}>
						<ChevronRight className="h-4 w-4" />
						<span className="sr-only">Next testimonial</span>
					</Button>
				</div>
			</div>
		</section>
	);
}
