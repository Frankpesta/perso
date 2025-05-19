"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { animate } from "animejs";

export function LegalNotices() {
	const noticesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".legal-notices-animate", {
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

		if (noticesRef.current) {
			observer.observe(noticesRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={noticesRef} className="mb-12">
			<Card className="legal-notices-animate opacity-0">
				<CardHeader>
					<CardTitle>Legal Notices</CardTitle>
				</CardHeader>
				<CardContent className="prose dark:prose-invert max-w-none">
					<h3>Copyright Notice</h3>
					<p>
						All content on this website, including text, graphics, logos,
						images, audio clips, and software, is the property of Base
						Investment Group Limited and is protected by copyright laws.
						Unauthorized use, reproduction, or distribution of any content from
						this website is strictly prohibited without prior written permission
						from Base Investment Group Limited.
					</p>

					<h3>Trademark Notice</h3>
					<p>
						Base Investment Group Limited, the Base Investment Group Limited
						logo, and all product and service names, designs, and slogans are
						trademarks or registered trademarks of Base Investment Group Limited
						or its affiliates. You may not use such marks without the prior
						written permission of Base Investment Group Limited.
					</p>

					<h3>Risk Disclosure</h3>
					<p>
						Investing involves risk, including the possible loss of principal.
						Past performance is not indicative of future results. The value of
						investments and the income from them can go down as well as up and
						investors may not get back the amounts originally invested.
					</p>
					<p>
						Cryptocurrency investments are subject to high market risk. Base
						Investment Group Limited is not responsible for any direct,
						indirect, or consequential losses as a result of investing in
						cryptocurrencies or other digital assets.
					</p>

					<h3>Forward-Looking Statements</h3>
					<p>
						This website may contain forward-looking statements that involve
						risks and uncertainties. These statements relate to future events or
						our future financial performance and involve known and unknown
						risks, uncertainties, and other factors that may cause our actual
						results to be materially different from any future results expressed
						or implied by these forward-looking statements.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
