"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { animate } from "animejs";

export function FaqCategories() {
	const [activeCategory, setActiveCategory] = useState("general");
	const categoriesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".category-button", {
						opacity: [0, 1],
						translateY: [20, 0],
						delay: 50,
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
		{ id: "general", name: "General" },
		{ id: "account", name: "Account" },
		{ id: "investments", name: "Investments" },
		{ id: "security", name: "Security" },
		{ id: "payments", name: "Payments" },
		{ id: "services", name: "Services" },
	];

	return (
		<div ref={categoriesRef} className="mb-12">
			<div className="flex flex-wrap gap-3 justify-center">
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
