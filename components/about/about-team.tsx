"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";
import { animate } from "animejs";

export function AboutTeam() {
	const teamRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".team-card", {
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

		if (teamRef.current) {
			observer.observe(teamRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const team = [
		{
			name: "Sarah Johnson",
			title: "CEO & Founder",
			bio: "Former investment banker with 15+ years of experience in financial markets.",
			image: "/lead4.jpg",
		},
		{
			name: "David Chen",
			title: "Chief Investment Officer",
			bio: "Veteran hedge fund manager with a track record of consistent returns.",
			image: "/lead2.webp",
		},
		{
			name: "Carlos Rodriguez",
			title: "Head of Technology",
			bio: "Tech innovator with expertise in fintech and blockchain solutions.",
			image: "/lead1.jpg",
		},
		{
			name: "James Wilson",
			title: "Chief Financial Officer",
			bio: "Certified financial analyst with experience at top global firms.",
			image: "/lead3.jpg",
		},
	];

	return (
		<div ref={teamRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Our Leadership Team
			</h2>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{team.map((member, index) => (
					<Card key={index} className="team-card opacity-0">
						<CardContent className="p-6">
							<div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
								<Image
									src={member.image || "/placeholder.svg"}
									alt={member.name}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 25vw"
								/>
							</div>
							<h3 className="text-xl font-bold">{member.name}</h3>
							<p className="text-primary mb-2">{member.title}</p>
							<p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
							<div className="flex gap-2">
								<Button variant="ghost" size="icon" className="h-8 w-8">
									<Linkedin className="h-4 w-4" />
									<span className="sr-only">LinkedIn</span>
								</Button>
								<Button variant="ghost" size="icon" className="h-8 w-8">
									<Twitter className="h-4 w-4" />
									<span className="sr-only">Twitter</span>
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
