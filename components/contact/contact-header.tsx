"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export function ContactHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerRef.current) {
			anime({
				targets: ".contact-header-animate",
				opacity: [0, 1],
				translateY: [20, 0],
				delay: anime.stagger(100),
				easing: "easeOutQuad",
			});
		}
	}, []);

	return (
		<div ref={headerRef} className="text-center mb-16">
			<h1 className="contact-header-animate opacity-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
				Get in Touch
			</h1>
			<p className="contact-header-animate opacity-0 text-xl text-muted-foreground max-w-3xl mx-auto">
				Have questions or need assistance? Our team is here to help you with any
				inquiries about our investment services.
			</p>
		</div>
	);
}
