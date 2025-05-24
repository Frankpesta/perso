"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { animate } from "animejs";
import Image from "next/image";

export function Navbar() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isMounted) {
			animate(".nav-item", {
				opacity: [0, 1],
				translateY: [20, 0],
				delay: 100,
				easing: "easeOutQuad",
			});
		}
	}, [isMounted]);

	const handleSignup = () => {
		window.location.href = "https://app.baseinvestment.com/register";
	};

	const handleLogin = () => {
		window.location.href = "https://app.baseinvestment.com/login";
	};

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-200",
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b"
					: "bg-transparent"
			)}>
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-6 md:gap-10">
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/logo.png"
							alt="Base Investment Logo"
							width={150}
							height={150}
							className="object-cover"
						/>
					</Link>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem className="nav-item">
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{[
											{
												title: "Crypto Investment",
												href: "/services/crypto",
												description:
													"Invest in cryptocurrencies with our expert guidance.",
											},
											{
												title: "Hedge Fund Management",
												href: "/services/hedge-fund",
												description:
													"Access exclusive hedge funds with lower entry barriers.",
											},
											{
												title: "Retirement Planning",
												href: "/services/retirement",
												description:
													"Secure your future with our retirement advisory services.",
											},
											{
												title: "Real Estate Investment",
												href: "/services/real-estate",
												description:
													"Diversify your portfolio with real estate investments.",
											},
											{
												title: "Children Investment",
												href: "/services/children",
												description:
													"Start building wealth for your children's future.",
											},
										].map((service) => (
											<li key={service.href}>
												<NavigationMenuLink asChild>
													<Link
														href={service.href}
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
														<div className="text-sm font-medium leading-none">
															{service.title}
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															{service.description}
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem className="nav-item">
								<Link href="/plans" legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										active={pathname === "/plans"}>
										Plans
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							{/* <NavigationMenuItem className="nav-item">
								<Link href="/insights" legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										active={pathname === "/insights"}>
										Insights
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem> */}
							<NavigationMenuItem className="nav-item">
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										active={pathname === "/about"}>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem className="nav-item">
								<Link href="/faq" legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										active={pathname === "/faq"}>
										FAQ
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem className="nav-item">
								<Link href="/contact" legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										active={pathname === "/contact"}>
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex items-center gap-2">
					<ThemeToggle className="nav-item" />
					<div className="hidden md:flex items-center gap-2">
						<Button
							onClick={handleLogin}
							variant="ghost"
							size="sm"
							className="nav-item">
							Log in
						</Button>
						<Button onClick={handleSignup} size="sm" className="nav-item">
							Sign up
						</Button>
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden nav-item">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" title="Menu">
							<div className="grid gap-6 py-12 px-4">
								<div className="grid gap-3">
									<Link
										href="/"
										className="font-medium hover:text-foreground transition-colors">
										Home
									</Link>
									<h3 className="text-lg font-semibold">Services</h3>
									<div className="grid gap-2">
										<Link
											href="/services/crypto"
											className="text-muted-foreground hover:text-foreground transition-colors">
											Crypto Investment
										</Link>
										<Link
											href="/services/hedge-fund"
											className="text-muted-foreground hover:text-foreground transition-colors">
											Hedge Fund Management
										</Link>
										<Link
											href="/services/retirement"
											className="text-muted-foreground hover:text-foreground transition-colors">
											Retirement Planning
										</Link>
										<Link
											href="/services/real-estate"
											className="text-muted-foreground hover:text-foreground transition-colors">
											Real Estate Investment
										</Link>
										<Link
											href="/services/children"
											className="text-muted-foreground hover:text-foreground transition-colors">
											Children Investment
										</Link>
									</div>
								</div>
								<div className="grid gap-2">
									<Link
										href="/plans"
										className="font-medium hover:text-foreground transition-colors">
										Plans
									</Link>
									{/* <Link
										href="/insights"
										className="font-medium hover:text-foreground transition-colors">
										Insights
									</Link> */}
									<Link
										href="/about"
										className="font-medium hover:text-foreground transition-colors">
										About
									</Link>
									<Link
										href="/faq"
										className="font-medium hover:text-foreground transition-colors">
										FAQ
									</Link>
									<Link
										href="/contact"
										className="font-medium hover:text-foreground transition-colors">
										Contact
									</Link>
								</div>
								<div className="grid gap-2">
									<Button onClick={handleSignup}>Sign up</Button>
									<Button onClick={handleLogin} variant="outline">
										Log in
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
