import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container px-4 py-12 md:py-16 lg:py-20">
				<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-6 w-6">
								<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
							</svg>
							<span className="font-bold">InvestWise</span>
						</div>
						<p className="text-sm text-muted-foreground">
							Building financial futures through smart investments.
						</p>
						<div className="flex space-x-3">
							<Button variant="ghost" size="icon" className="h-8 w-8">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4">
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
								</svg>
								<span className="sr-only">Facebook</span>
							</Button>
							<Button variant="ghost" size="icon" className="h-8 w-8">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4">
									<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
								</svg>
								<span className="sr-only">Twitter</span>
							</Button>
							<Button variant="ghost" size="icon" className="h-8 w-8">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4">
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
								</svg>
								<span className="sr-only">Instagram</span>
							</Button>
						</div>
					</div>
					<div className="space-y-4">
						<h4 className="text-sm font-medium">Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/services/crypto"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Crypto Investment
								</Link>
							</li>
							<li>
								<Link
									href="/services/hedge-fund"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Hedge Fund Management
								</Link>
							</li>
							<li>
								<Link
									href="/services/retirement"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Retirement Planning
								</Link>
							</li>
							<li>
								<Link
									href="/services/real-estate"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Real Estate Investment
								</Link>
							</li>
							<li>
								<Link
									href="/services/children"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Children Investment
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="text-sm font-medium">Company</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/about"
									className="text-muted-foreground hover:text-foreground transition-colors">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/plans"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Plans
								</Link>
							</li>
							<li>
								<Link
									href="/insights"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Insights
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="text-muted-foreground hover:text-foreground transition-colors">
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="text-sm font-medium">Legal</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/terms"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Terms
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Privacy
								</Link>
							</li>
							<li>
								<Link
									href="/cookies"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Cookies
								</Link>
							</li>
							<li>
								<Link
									href="/licenses"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Licenses
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-foreground transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="text-sm font-medium">Newsletter</h4>
						<p className="text-sm text-muted-foreground">
							Subscribe to our newsletter for the latest updates and investment
							insights.
						</p>
						<div className="flex space-x-2">
							<Input
								type="email"
								placeholder="Enter your email"
								className="h-9"
							/>
							<Button type="submit" size="sm">
								Subscribe
							</Button>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
					<p>© {new Date().getFullYear()} InvestWise. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
