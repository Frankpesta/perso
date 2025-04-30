"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { animate } from "animejs";

export function PrivacyContent() {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".privacy-content-animate", {
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

		if (contentRef.current) {
			observer.observe(contentRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={contentRef}>
			<Card className="privacy-content-animate opacity-0">
				<CardContent className="p-6 md:p-8 prose dark:prose-invert max-w-none">
					<h2>1. Introduction</h2>
					<p>
						InvestWise, Inc. ("InvestWise," "we," "us," or "our") is committed
						to protecting your privacy. This Privacy Policy explains how we
						collect, use, disclose, and safeguard your information when you use
						our website, mobile applications, and investment services
						(collectively, the "Services").
					</p>
					<p>
						Please read this Privacy Policy carefully. By accessing or using our
						Services, you acknowledge that you have read, understood, and agree
						to be bound by this Privacy Policy. If you do not agree with our
						policies and practices, please do not use our Services.
					</p>

					<h2>2. Information We Collect</h2>
					<p>
						We collect several types of information from and about users of our
						Services, including:
					</p>

					<h3>2.1 Personal Information</h3>
					<p>
						Personal information is data that can be used to identify you
						individually. This may include:
					</p>
					<ul>
						<li>
							Contact information (name, email address, phone number, mailing
							address)
						</li>
						<li>
							Identification information (date of birth, Social Security number,
							government-issued ID numbers)
						</li>
						<li>
							Financial information (bank account details, investment
							preferences, income information)
						</li>
						<li>
							Employment information (employer name, job title, employment
							history)
						</li>
						<li>Education information (level of education, field of study)</li>
						<li>
							Account credentials (username, password, security questions and
							answers)
						</li>
					</ul>

					<h3>2.2 Non-Personal Information</h3>
					<p>
						We also collect non-personal information that does not directly
						identify you, including:
					</p>
					<ul>
						<li>
							Device information (IP address, browser type, operating system,
							device identifiers)
						</li>
						<li>
							Usage data (pages visited, time spent on pages, links clicked,
							features used)
						</li>
						<li>
							Location data (general geographic location based on IP address)
						</li>
						<li>
							Cookies and similar tracking technologies (as described in our
							Cookie Policy)
						</li>
					</ul>

					<h2>3. How We Collect Information</h2>
					<p>We collect information from you in several ways:</p>
					<ul>
						<li>
							<strong>Direct Collection:</strong> Information you provide when
							you register for an account, complete forms, respond to surveys,
							or communicate with us.
						</li>
						<li>
							<strong>Automated Collection:</strong> Information collected
							automatically through cookies, web beacons, and other tracking
							technologies when you use our Services.
						</li>
						<li>
							<strong>Third-Party Sources:</strong> Information we receive from
							third-party sources, such as identity verification services,
							credit bureaus, and financial institutions.
						</li>
					</ul>

					<h2>4. How We Use Your Information</h2>
					<p>
						We use the information we collect for various purposes, including
						to:
					</p>
					<ul>
						<li>Provide, maintain, and improve our Services</li>
						<li>Process and manage your account and investments</li>
						<li>Verify your identity and prevent fraud</li>
						<li>Comply with legal and regulatory requirements</li>
						<li>Communicate with you about your account and our Services</li>
						<li>
							Send you marketing communications (with your consent where
							required)
						</li>
						<li>
							Analyze usage patterns and trends to enhance user experience
						</li>
						<li>
							Protect our rights, property, and safety, and the rights,
							property, and safety of others
						</li>
					</ul>

					<h2>5. Information Sharing and Disclosure</h2>
					<p>
						We may share your information with the following categories of
						recipients:
					</p>
					<ul>
						<li>
							<strong>Service Providers:</strong> Third-party vendors who
							perform services on our behalf, such as payment processing, data
							analysis, email delivery, and customer service.
						</li>
						<li>
							<strong>Financial Partners:</strong> Financial institutions,
							custodians, and other partners necessary to provide our investment
							services.
						</li>
						<li>
							<strong>Legal and Regulatory Authorities:</strong> Government
							agencies, law enforcement, and other parties when required by law
							or to protect our rights.
						</li>
						<li>
							<strong>Business Transfers:</strong> In connection with a merger,
							acquisition, or sale of all or a portion of our assets.
						</li>
						<li>
							<strong>With Your Consent:</strong> To other third parties with
							your explicit consent.
						</li>
					</ul>
					<p>
						We do not sell your personal information to third parties for their
						marketing purposes without your explicit consent.
					</p>

					<h2>6. Data Security</h2>
					<p>
						We implement appropriate technical and organizational measures to
						protect your personal information against unauthorized access,
						alteration, disclosure, or destruction. These measures include
						encryption, access controls, regular security assessments, and
						employee training.
					</p>
					<p>
						However, no method of transmission over the Internet or electronic
						storage is 100% secure. While we strive to use commercially
						acceptable means to protect your personal information, we cannot
						guarantee its absolute security.
					</p>

					<h2>7. Data Retention</h2>
					<p>
						We retain your personal information for as long as necessary to
						fulfill the purposes outlined in this Privacy Policy, unless a
						longer retention period is required or permitted by law. When
						determining the retention period, we consider the amount, nature,
						and sensitivity of the information, the potential risk of harm from
						unauthorized use or disclosure, and applicable legal requirements.
					</p>

					<h2>8. Your Rights and Choices</h2>
					<p>
						Depending on your location, you may have certain rights regarding
						your personal information, including:
					</p>
					<ul>
						<li>
							The right to access and receive a copy of your personal
							information
						</li>
						<li>The right to correct inaccurate or incomplete information</li>
						<li>
							The right to delete your personal information under certain
							circumstances
						</li>
						<li>
							The right to restrict or object to processing of your personal
							information
						</li>
						<li>The right to data portability</li>
						<li>
							The right to withdraw consent at any time (where processing is
							based on consent)
						</li>
					</ul>
					<p>
						To exercise these rights, please contact us using the information
						provided in the "Contact Us" section below. Please note that some of
						these rights may be limited where we have compelling legitimate
						grounds or legal obligations to continue processing your
						information.
					</p>

					<h2>9. Cookies and Tracking Technologies</h2>
					<p>
						We use cookies and similar tracking technologies to collect
						information about your browsing activities and to distinguish you
						from other users of our Services. This helps us provide you with a
						good experience when you use our Services and allows us to improve
						our Services.
					</p>
					<p>
						You can set your browser to refuse all or some browser cookies, or
						to alert you when cookies are being sent. If you disable or refuse
						cookies, please note that some parts of our Services may be
						inaccessible or not function properly.
					</p>

					<h2>10. Children's Privacy</h2>
					<p>
						Our Services are not intended for children under the age of 18. We
						do not knowingly collect personal information from children under
						18. If you are a parent or guardian and believe that your child has
						provided us with personal information, please contact us, and we
						will take steps to delete such information.
					</p>

					<h2>11. International Data Transfers</h2>
					<p>
						Your information may be transferred to, and processed in, countries
						other than the country in which you reside. These countries may have
						data protection laws that are different from the laws of your
						country.
					</p>
					<p>
						When we transfer your information to other countries, we will
						protect that information as described in this Privacy Policy and in
						accordance with applicable law. We use appropriate safeguards, such
						as standard contractual clauses, to ensure that your information
						receives an adequate level of protection.
					</p>

					<h2>12. Changes to This Privacy Policy</h2>
					<p>
						We may update this Privacy Policy from time to time to reflect
						changes in our practices or for other operational, legal, or
						regulatory reasons. We will notify you of any material changes by
						posting the new Privacy Policy on this page and updating the "Last
						updated" date.
					</p>
					<p>
						We encourage you to review this Privacy Policy periodically to stay
						informed about how we are protecting your information.
					</p>

					<h2>13. Contact Us</h2>
					<p>
						If you have any questions, concerns, or requests regarding this
						Privacy Policy or our privacy practices, please contact us at:
					</p>
					<p>
						InvestWise, Inc.
						<br />
						Attn: Privacy Officer
						<br />
						123 Wall Street, Suite 1500
						<br />
						New York, NY 10005
						<br />
						Email: privacy@investwise.com
						<br />
						Phone: +1 (212) 555-0123
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
