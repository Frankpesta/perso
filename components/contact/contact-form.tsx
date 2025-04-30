"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { animate } from "animejs";

export function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const formRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".form-animate", {
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

		if (formRef.current) {
			observer.observe(formRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate form submission
		setTimeout(() => {
			setIsLoading(false);
			toast("We have received your message and we will get back to you soon.");
		}, 1500);
	};

	return (
		<div ref={formRef}>
			<Card className="form-animate opacity-0">
				<CardHeader>
					<CardTitle>Send us a message</CardTitle>
					<CardDescription>
						Fill out the form below and we'll get back to you as soon as
						possible.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="first-name">First name</Label>
								<Input
									id="first-name"
									placeholder="John"
									required
									disabled={isLoading}
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="last-name">Last name</Label>
								<Input
									id="last-name"
									placeholder="Doe"
									required
									disabled={isLoading}
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="john.doe@example.com"
								required
								disabled={isLoading}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">Phone number (optional)</Label>
							<Input
								id="phone"
								type="tel"
								placeholder="+1 (555) 000-0000"
								disabled={isLoading}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="subject">Subject</Label>
							<Select disabled={isLoading}>
								<SelectTrigger id="subject">
									<SelectValue placeholder="Select a subject" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="general">General Inquiry</SelectItem>
									<SelectItem value="support">Technical Support</SelectItem>
									<SelectItem value="account">Account Management</SelectItem>
									<SelectItem value="investment">Investment Advice</SelectItem>
									<SelectItem value="feedback">Feedback</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								placeholder="How can we help you?"
								rows={5}
								required
								disabled={isLoading}
							/>
						</div>
						<Button type="submit" className="w-full" disabled={isLoading}>
							{isLoading ? "Sending..." : "Send message"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
