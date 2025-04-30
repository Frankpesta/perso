"use client";

import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { animate } from "animejs";

export function FaqSearch() {
	const searchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (searchRef.current) {
			animate(".search-animate", {
				opacity: [0, 1],
				translateY: [20, 0],
				delay: 100,
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={searchRef} className="mb-12">
			<div className="search-animate opacity-0 max-w-md mx-auto">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search for answers..."
						className="pl-10"
					/>
				</div>
			</div>
		</div>
	);
}
