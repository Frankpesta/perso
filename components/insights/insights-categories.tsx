"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import anime from "animejs";

export function InsightsCategories() {
	const [activeCategory, setActiveCategory] = useState("all");
	const categoriesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".category-button",
						opacity: [0, 1],
						translateY: [20, 0],
						delay: anime.stagger(50),
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (categoriesRef.current) {
			observer.observe(categoriesRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const categories = [
		{ id: "all", name: "All Insights" },
		{ id: "market-analysis", name: "Market Analysis" },
		{ id: "investment-strategies", name: "Investment Strategies" },
		{ id: "crypto", name: "Cryptocurrency" },
		{ id: "real-estate", name: "Real Estate" },
		{ id: "retirement", name: "Retirement" },
	];

	return (
		<div ref={categoriesRef} className="mb-12">
			<div className="flex flex-wrap gap-3">
				{categories.map((category) => (
					<Button
						key={category.id}
						variant={activeCategory === category.id ? "default" : "outline"}
						size="sm"
						className="category-button opacity-0"
						onClick={() => setActiveCategory(category.id)}>
						{category.name}
					</Button>
				))}
			</div>
		</div>
	);
}
