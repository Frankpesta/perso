"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
// Update the import statement for anime.js
import * as animeJs from "animejs";
const anime = animeJs.default;

export function TermsContent() {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					anime({
						targets: ".terms-content-animate",
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

		if (contentRef.current) {
			observer.observe(contentRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={contentRef}>
			<Card className="terms-content-animate opacity-0">
				<CardContent className="p-6 md:p-8 prose dark:prose-invert max-w-none">
					<h2>1. Introduction</h2>
					<p>
						These Terms and Conditions ("Terms") govern your use of the
						InvestWise website, mobile applications, and investment services
						(collectively, the "Services") operated by InvestWise, Inc.
						("InvestWise," "we," "us," or "our"). By accessing or using our
						Services, you agree to be bound by these Terms. If you disagree with
						any part of the Terms, you may not access the Services.
					</p>

					<h2>2. Definitions</h2>
					<p>
						<strong>"Account"</strong> means a user account created on the
						InvestWise platform.
						<br />
						<strong>"Content"</strong> means any information, text, graphics, or
						other materials uploaded, downloaded, or appearing on the Services.
						<br />
						<strong>"User"</strong> means any individual who accesses or uses
						the Services.
						<br />
						<strong>"Investment"</strong> means any financial transaction made
						through the Services.
					</p>

					<h2>3. Eligibility</h2>
					<p>
						To use our Services, you must be at least 18 years old and have the
						legal capacity to enter into a binding agreement. By using our
						Services, you represent and warrant that you meet these
						requirements. Certain investment services may have additional
						eligibility requirements, such as being an accredited investor or
						residing in a specific jurisdiction.
					</p>

					<h2>4. Account Registration</h2>
					<p>
						To access certain features of our Services, you must register for an
						account. When you register, you agree to provide accurate, current,
						and complete information about yourself. You are responsible for
						safeguarding your account credentials and for all activities that
						occur under your account. You must notify us immediately of any
						unauthorized use of your account.
					</p>
					<p>
						We reserve the right to suspend or terminate your account if any
						information provided during registration or thereafter proves to be
						inaccurate, incomplete, or fraudulent.
					</p>

					<h2>5. Investment Services</h2>
					<p>
						Our Services provide access to various investment opportunities,
						including but not limited to cryptocurrency, hedge funds, retirement
						planning, real estate, and children's investment accounts. These
						investments are subject to market risks, and you may lose money.
						Past performance is not indicative of future results.
					</p>
					<p>
						Before making any investment, you should carefully consider your
						investment objectives, level of experience, and risk appetite. If
						necessary, seek independent financial advice. InvestWise does not
						provide personalized investment advice unless explicitly stated and
						agreed upon in a separate written agreement.
					</p>

					<h2>6. Fees and Payments</h2>
					<p>
						We charge fees for certain Services as described on our website or
						in separate agreements. All fees are non-refundable unless otherwise
						stated or required by law. We may change our fees at any time by
						posting the changes on our website or notifying you directly.
					</p>
					<p>
						You agree to provide accurate and complete payment information. You
						authorize us to charge the payment method you provide for all fees
						incurred. If your payment cannot be completed, we may suspend or
						terminate your access to the Services.
					</p>

					<h2>7. User Conduct</h2>
					<p>You agree not to:</p>
					<ul>
						<li>
							Use the Services for any illegal purpose or in violation of any
							laws
						</li>
						<li>
							Violate or infringe other people's intellectual property, privacy,
							or other rights
						</li>
						<li>
							Interfere with or disrupt the Services or servers or networks
							connected to the Services
						</li>
						<li>
							Attempt to gain unauthorized access to any part of the Services
						</li>
						<li>
							Use the Services to transmit any malware or other malicious code
						</li>
						<li>
							Impersonate any person or entity or falsely state or misrepresent
							your affiliation
						</li>
						<li>
							Engage in any activity that could damage, disable, or impair the
							Services
						</li>
					</ul>

					<h2>8. Intellectual Property</h2>
					<p>
						The Services and their original content, features, and functionality
						are owned by InvestWise and are protected by international
						copyright, trademark, patent, trade secret, and other intellectual
						property laws. You may not copy, modify, create derivative works,
						publicly display, publicly perform, republish, or transmit any
						material from our Services without our prior written consent.
					</p>

					<h2>9. Third-Party Links and Services</h2>
					<p>
						Our Services may contain links to third-party websites or services
						that are not owned or controlled by InvestWise. We have no control
						over and assume no responsibility for the content, privacy policies,
						or practices of any third-party websites or services. You
						acknowledge and agree that InvestWise shall not be responsible or
						liable for any damage or loss caused by or in connection with the
						use of any such content, goods, or services available through
						third-party websites or services.
					</p>

					<h2>10. Limitation of Liability</h2>
					<p>
						To the maximum extent permitted by law, InvestWise and its
						directors, employees, partners, agents, suppliers, or affiliates
						shall not be liable for any indirect, incidental, special,
						consequential, or punitive damages, including without limitation,
						loss of profits, data, use, goodwill, or other intangible losses,
						resulting from:
					</p>
					<ul>
						<li>
							Your access to or use of or inability to access or use the
							Services
						</li>
						<li>Any conduct or content of any third party on the Services</li>
						<li>Any content obtained from the Services</li>
						<li>
							Unauthorized access, use, or alteration of your transmissions or
							content
						</li>
					</ul>

					<h2>11. Disclaimer</h2>
					<p>
						Your use of the Services is at your sole risk. The Services are
						provided on an "AS IS" and "AS AVAILABLE" basis. The Services are
						provided without warranties of any kind, whether express or implied,
						including, but not limited to, implied warranties of
						merchantability, fitness for a particular purpose, non-infringement,
						or course of performance.
					</p>

					<h2>12. Governing Law</h2>
					<p>
						These Terms shall be governed by and construed in accordance with
						the laws of the State of New York, without regard to its conflict of
						law provisions. Any dispute arising from or relating to these Terms
						or your use of the Services shall be subject to the exclusive
						jurisdiction of the state and federal courts located in New York
						County, New York.
					</p>

					<h2>13. Changes to Terms</h2>
					<p>
						We reserve the right to modify or replace these Terms at any time.
						If a revision is material, we will provide at least 30 days' notice
						prior to any new terms taking effect. What constitutes a material
						change will be determined at our sole discretion. By continuing to
						access or use our Services after any revisions become effective, you
						agree to be bound by the revised terms.
					</p>

					<h2>14. Termination</h2>
					<p>
						We may terminate or suspend your account and access to the Services
						immediately, without prior notice or liability, for any reason
						whatsoever, including without limitation if you breach the Terms.
						Upon termination, your right to use the Services will immediately
						cease.
					</p>

					<h2>15. Indemnification</h2>
					<p>
						You agree to defend, indemnify, and hold harmless InvestWise and its
						licensees and licensors, and their employees, contractors, agents,
						officers, and directors, from and against any and all claims,
						damages, obligations, losses, liabilities, costs or debt, and
						expenses (including but not limited to attorney's fees), resulting
						from or arising out of your use and access of the Services, or your
						violation of these Terms.
					</p>

					<h2>16. Severability</h2>
					<p>
						If any provision of these Terms is held to be unenforceable or
						invalid, such provision will be changed and interpreted to
						accomplish the objectives of such provision to the greatest extent
						possible under applicable law, and the remaining provisions will
						continue in full force and effect.
					</p>

					<h2>17. Entire Agreement</h2>
					<p>
						These Terms constitute the entire agreement between you and
						InvestWise regarding our Services and supersede and replace any
						prior agreements we might have had between us regarding the
						Services.
					</p>

					<h2>18. Contact Information</h2>
					<p>
						If you have any questions about these Terms, please contact us at:
						<br />
						<br />
						InvestWise, Inc.
						<br />
						123 Wall Street, Suite 1500
						<br />
						New York, NY 10005
						<br />
						Email: legal@investwise.com
						<br />
						Phone: +1 (212) 555-0123
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
