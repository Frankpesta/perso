"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, PhoneCall, MessageSquare } from "lucide-react";
import anime from "animejs";

export function ContactSupport() {
	const supportRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".support-animate",
						opacity: [0, 1],
						translateY: [20, 0],
						delay: anime.stagger(100),
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (supportRef.current) {
			observer.observe(supportRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={supportRef}>
			<Card className="support-animate opacity-0">
				<CardHeader>
					<CardTitle>Support Hours</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						<div className="flex items-start space-x-3">
							<Clock className="h-5 w-5 text-primary mt-0.5" />
							<div>
								<h3 className="font-medium">Business Hours</h3>
								<p className="text-sm text-muted-foreground">
									Monday - Friday: 9:00 AM - 8:00 PM EST
								</p>
								<p className="text-sm text-muted-foreground">
									Saturday: 10:00 AM - 4:00 PM EST
								</p>
								<p className="text-sm text-muted-foreground">Sunday: Closed</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<PhoneCall className="h-5 w-5 text-primary mt-0.5" />
							<div>
								<h3 className="font-medium">Phone Support</h3>
								<p className="text-sm text-muted-foreground">
									+1 (800) 555-9876
								</p>
								<p className="text-sm text-muted-foreground">
									Available during business hours
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<MessageSquare className="h-5 w-5 text-primary mt-0.5" />
							<div>
								<h3 className="font-medium">Live Chat</h3>
								<p className="text-sm text-muted-foreground">
									Available 24/7 for Premium members
								</p>
								<p className="text-sm text-muted-foreground">
									Business hours only for Standard members
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
