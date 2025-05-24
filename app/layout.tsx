import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title:
		"Base Investment Group Limited | Smart, Secure & Profitable Investment Solutions",
	description:
		"Unlock your financial future with Base Investment Group — expert-managed crypto, hedge funds, real estate, retirement, and kids' investment plans tailored for smart growth.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="flex min-h-screen flex-col">
						<Suspense>
							<Navbar />
						</Suspense>
						<main className="">{children}</main>
						<Footer />
					</div>
					<Toaster position="top-right" />
				</ThemeProvider>
				<script
					id="chatway"
					async={true}
					src="https://cdn.chatway.app/widget.js?id=xFZo5DwDOY4a"></script>
			</body>
		</html>
	);
}
