"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as animeJs from "animejs";
const anime = animeJs.default;

export function LegalDisclaimer() {
	const disclaimerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".legal-disclaimer-animate",
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

		if (disclaimerRef.current) {
			observer.observe(disclaimerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={disclaimerRef} className="mb-12">
			<Card className="legal-disclaimer-animate opacity-0">
				<CardHeader>
					<CardTitle>Disclaimers</CardTitle>
				</CardHeader>
				<CardContent className="prose dark:prose-invert max-w-none">
					<h3>Investment Disclaimer</h3>
					<p>
						The content on this website is provided for informational purposes
						only and does not constitute financial, investment, tax, or legal
						advice. InvestWise does not guarantee the accuracy, completeness, or
						timeliness of the information provided. You should consult with
						qualified professionals before making any investment decisions.
					</p>
					<p>
						Past performance is not indicative of future results. The value of
						investments and the income from them can go down as well as up, and
						you may not get back the amount originally invested. Fluctuations in
						exchange rates could have adverse effects on the value or price of
						investments.
					</p>

					<h3>Website Disclaimer</h3>
					<p>
						InvestWise makes no representations or warranties of any kind,
						express or implied, about the completeness, accuracy, reliability,
						suitability, or availability of the website or the information,
						products, services, or related graphics contained on the website for
						any purpose. Any reliance you place on such information is therefore
						strictly at your own risk.
					</p>
					<p>
						In no event will InvestWise be liable for any loss or damage
						including without limitation, indirect or consequential loss or
						damage, or any loss or damage whatsoever arising from loss of data
						or profits arising out of, or in connection with, the use of this
						website.
					</p>

					<h3>Third-Party Links</h3>
					<p>
						This website may contain links to third-party websites or services
						that are not owned or controlled by InvestWise. InvestWise has no
						control over, and assumes no responsibility for, the content,
						privacy policies, or practices of any third-party websites or
						services. You further acknowledge and agree that InvestWise shall
						not be responsible or liable, directly or indirectly, for any damage
						or loss caused or alleged to be caused by or in connection with the
						use of or reliance on any such content, goods, or services available
						on or through any such websites or services.
					</p>

					<h3>Tax Disclaimer</h3>
					<p>
						The information provided on this website does not constitute tax
						advice. You should consult with a tax professional regarding your
						specific circumstances before making any tax-related decisions.
						InvestWise does not provide tax advice and is not responsible for
						any tax consequences that may result from your investment decisions.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
