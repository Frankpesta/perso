"use client";

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
import emailjs from "@emailjs/browser";

export function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);
	const [subject, setSubject] = useState("");

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

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		if (!formRef.current) return;

		try {
			await emailjs.sendForm(
				"service_3po2ikr", // Replace with your actual service ID
				"template_22ckzyc", // Replace with your actual template ID
				formRef.current,
				"4pYHB_yDU0rpsWdlY" // Replace with your actual public API key
			);

			toast.success("Message sent successfully!");
			formRef.current.reset();
			setSubject(""); // reset select
		} catch (error) {
			console.error(error);
			toast.error("Failed to send message. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div ref={sectionRef}>
			<Card className="form-animate opacity-0">
				<CardHeader>
					<CardTitle>Send us a message</CardTitle>
					<CardDescription>
						Fill out the form below and we'll get back to you as soon as
						possible.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="first-name">First name</Label>
								<Input
									name="first_name"
									id="first-name"
									placeholder="John"
									required
									disabled={isLoading}
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="last-name">Last name</Label>
								<Input
									name="last_name"
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
								name="email"
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
								name="phone"
								id="phone"
								type="tel"
								placeholder="+1 (555) 000-0000"
								disabled={isLoading}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="subject">Subject</Label>
							<Select
								disabled={isLoading}
								value={subject}
								onValueChange={(value) => setSubject(value)}>
								<SelectTrigger id="subject">
									<SelectValue placeholder="Select a subject" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="General Inquiry">
										General Inquiry
									</SelectItem>
									<SelectItem value="Technical Support">
										Technical Support
									</SelectItem>
									<SelectItem value="Account Management">
										Account Management
									</SelectItem>
									<SelectItem value="Investment Advice">
										Investment Advice
									</SelectItem>
									<SelectItem value="Feedback">Feedback</SelectItem>
								</SelectContent>
							</Select>
							<input type="hidden" name="subject" value={subject} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								name="message"
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
