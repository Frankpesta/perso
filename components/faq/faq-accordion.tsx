"use client";

import { useEffect, useRef } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { animate } from "animejs";

export function FaqAccordion() {
	const accordionRef = useRef<HTMLDivElement>(null);

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

		if (accordionRef.current) {
			observer.observe(accordionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const faqs = [
		{
			question: "What is Base Investment Group Limited?",
			answer:
				"Base Investment Group Limited is a comprehensive investment platform that offers a range of services including cryptocurrency investments, hedge fund management, retirement planning, real estate investments, and children's investment accounts. We provide tools, resources, and expert guidance to help you build and manage your investment portfolio.",
		},
		{
			question: "How do I create an account?",
			answer:
				"Creating an account is simple. Click on the 'Sign up' button in the top right corner of our website, fill in your personal information, verify your email address, and complete the identity verification process. Once your account is verified, you can fund it and start investing.",
		},
		{
			question: "What are the minimum investment amounts?",
			answer:
				"Minimum investment amounts vary by service. Crypto investments start at $50, hedge fund investments at $5,000, retirement planning at $100, real estate investments at $1,000, and children's investment accounts at $50. Each service has different tiers with varying minimum requirements.",
		},
		{
			question:
				"How secure is my investment with Base Investment Group Limited?",
			answer:
				"Security is our top priority. We implement bank-level encryption, two-factor authentication, and regular security audits. Your investments are protected by industry-leading security measures, and we maintain appropriate insurance coverage for added protection.",
		},
		{
			question: "Can I withdraw my funds at any time?",
			answer:
				"Yes, most investments can be withdrawn at any time without penalties. However, certain investment types may have specific terms regarding withdrawal periods. These details are clearly outlined before you make an investment.",
		},
		{
			question: "What fees does Base Investment Group Limited charge?",
			answer:
				"Our fee structure varies by service and investment tier. We charge a combination of management fees (typically 0.5% to 1.5% annually) and, in some cases, performance fees for exceptional returns. All fees are transparently disclosed before you invest.",
		},
		{
			question: "How do I track my investments?",
			answer:
				"You can track your investments through our user-friendly dashboard, which provides real-time updates on your portfolio performance. We also send regular performance reports via email, and you can set up custom alerts for specific market conditions or portfolio changes.",
		},
		{
			question: "Is Base Investment Group Limited available internationally?",
			answer:
				"Yes, Base Investment Group Limited is available in most countries worldwide. However, certain services may have restrictions based on local regulations. Please check our Terms of Service or contact our support team for specific information about availability in your country.",
		},
		{
			question: "How do I get help if I have questions?",
			answer:
				"We offer multiple support channels. You can contact our customer service team via email, phone, or live chat. Premium plan members have access to dedicated advisors. We also provide extensive educational resources and FAQs to help answer common questions.",
		},
		{
			question:
				"What happens to my investments if Base Investment Group Limited goes out of business?",
			answer:
				"Your investments are held separately from Base Investment Group Limited's operating funds and are not used for our business operations. In the unlikely event of our company's insolvency, your investments would remain yours and could be transferred to another custodian or returned to you.",
		},
	];

	return (
		<div ref={accordionRef} className="mb-16 max-w-3xl mx-auto">
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
