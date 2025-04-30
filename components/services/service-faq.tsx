"use client";

import { useEffect, useRef } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { animate } from "animejs";

interface ServiceFaqProps {
	faqs: {
		question: string;
		answer: string;
	}[];
}

export function ServiceFaq({ faqs }: ServiceFaqProps) {
	const faqRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".faq-item", {
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

		if (faqRef.current) {
			observer.observe(faqRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={faqRef} className="mb-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
				Frequently Asked Questions
			</h2>
			<Accordion type="single" collapsible className="w-full">
				{faqs.map((faq, index) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className="faq-item opacity-0">
						<AccordionTrigger className="text-left">
							{faq.question}
						</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
