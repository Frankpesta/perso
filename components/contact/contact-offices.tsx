"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { animate } from "animejs";

export function ContactOffices() {
	const officesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".office-animate", {
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

		if (officesRef.current) {
			observer.observe(officesRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const offices = [
		{
			city: "New York",
			address: "123 Wall Street, New York, NY 10005",
			phone: "+1 (212) 555-1234",
			email: "newyork@investwise.com",
		},
		{
			city: "London",
			address: "45 Finsbury Square, London, EC2A 1HP",
			phone: "+44 20 7123 4567",
			email: "london@investwise.com",
		},
		{
			city: "Singapore",
			address: "10 Marina Boulevard, Singapore 018983",
			phone: "+65 6123 4567",
			email: "singapore@investwise.com",
		},
	];

	return (
		<div ref={officesRef}>
			<Card className="office-animate opacity-0">
				<CardHeader>
					<CardTitle>Our Offices</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						{offices.map((office, index) => (
							<div key={index} className="space-y-2">
								<h3 className="font-bold">{office.city}</h3>
								<div className="flex items-start space-x-2 text-sm">
									<MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
									<span>{office.address}</span>
								</div>
								<div className="flex items-center space-x-2 text-sm">
									<Phone className="h-4 w-4 text-muted-foreground" />
									<span>{office.phone}</span>
								</div>
								<div className="flex items-center space-x-2 text-sm">
									<Mail className="h-4 w-4 text-muted-foreground" />
									<span>{office.email}</span>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
