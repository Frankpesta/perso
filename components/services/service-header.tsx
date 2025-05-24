"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { animate } from "animejs";

interface ServiceHeaderProps {
	title: string;
	description: string;
	image: string;
}

export function ServiceHeader({
	title,
	description,
	image,
}: ServiceHeaderProps) {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			animate(".service-header-animate", {
				opacity: [0, 1],
				translateY: [20, 0],
				delay: 100,
				easing: "easeOutQuad",
			});
		}
	}, []);

	const handleSignup = () => {
		window.location.href = "https://app.baseinvst.com/register";
	};

	return (
		<div
			ref={headerRef}
			className="grid gap-8 md:grid-cols-2 md:gap-12 items-center mb-16">
			<div className="space-y-6">
				<h1 className="service-header-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					{title}
				</h1>
				<p className="service-header-animate opacity-0 text-xl text-muted-foreground">
					{description}
				</p>
				<div className="service-header-animate opacity-0 flex flex-col sm:flex-row gap-4">
					<Button size="lg" onClick={handleSignup}>
						Get started
					</Button>
					<Button size="lg" variant="outline" asChild>
						<Link href="/plans">View plans</Link>
					</Button>
				</div>
			</div>
			<div className="service-header-animate opacity-0 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 50vw"
					priority
				/>
			</div>
		</div>
	);
}
