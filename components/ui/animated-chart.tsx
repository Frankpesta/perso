"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import anime from "animejs/lib/anime.es.js";

export function AnimatedChart() {
	const chartRef = useRef<HTMLDivElement>(null);
	const { theme } = useTheme();

	useEffect(() => {
		if (!chartRef.current) return;

		const primaryColor = theme === "dark" ? "#6366F1" : "#4F46E5";
		const secondaryColor = theme === "dark" ? "#10B981" : "#059669";
		const tertiaryColor = theme === "dark" ? "#F59E0B" : "#D97706";
		const textColor = theme === "dark" ? "#E5E7EB" : "#374151";
		const gridColor = theme === "dark" ? "#374151" : "#E5E7EB";

		// Generate random data points
		const dataPoints1 = Array.from(
			{ length: 20 },
			() => Math.floor(Math.random() * 50) + 50
		);
		const dataPoints2 = Array.from(
			{ length: 20 },
			() => Math.floor(Math.random() * 40) + 30
		);
		const dataPoints3 = Array.from(
			{ length: 20 },
			() => Math.floor(Math.random() * 30) + 10
		);

		// Clear previous chart
		if (chartRef.current) {
			chartRef.current.innerHTML = "";
		}

		// Create SVG
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("width", "100%");
		svg.setAttribute("height", "100%");
		svg.setAttribute("viewBox", "0 0 400 300");
		chartRef.current.appendChild(svg);

		// Create grid lines
		for (let i = 0; i <= 5; i++) {
			const y = 250 - i * 50;
			const line = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"line"
			);
			line.setAttribute("x1", "50");
			line.setAttribute("y1", y.toString());
			line.setAttribute("x2", "380");
			line.setAttribute("y2", y.toString());
			line.setAttribute("stroke", gridColor);
			line.setAttribute("stroke-width", "1");
			line.setAttribute("stroke-dasharray", "5,5");
			svg.appendChild(line);

			const text = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"text"
			);
			text.setAttribute("x", "40");
			text.setAttribute("y", (y + 5).toString());
			text.setAttribute("text-anchor", "end");
			text.setAttribute("font-size", "12");
			text.setAttribute("fill", textColor);
			text.textContent = (i * 20).toString();
			svg.appendChild(text);
		}

		// Create x-axis labels
		for (let i = 0; i < 5; i++) {
			const x = 50 + i * 82.5;
			const text = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"text"
			);
			text.setAttribute("x", x.toString());
			text.setAttribute("y", "270");
			text.setAttribute("text-anchor", "middle");
			text.setAttribute("font-size", "12");
			text.setAttribute("fill", textColor);

			const date = new Date();
			date.setMonth(date.getMonth() - 4 + i);
			text.textContent = date.toLocaleDateString("en-US", { month: "short" });
			svg.appendChild(text);
		}

		// Create lines
		function createPath(dataPoints: number[], color: string, delay: number) {
			const pathData = dataPoints
				.map((point, index) => {
					const x = 50 + (index * 330) / (dataPoints.length - 1);
					const y = 250 - (point * 200) / 100;
					return `${index === 0 ? "M" : "L"} ${x} ${y}`;
				})
				.join(" ");

			const path = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"path"
			);
			path.setAttribute("d", pathData);
			path.setAttribute("fill", "none");
			path.setAttribute("stroke", color);
			path.setAttribute("stroke-width", "3");
			path.setAttribute("stroke-linecap", "round");
			path.setAttribute("stroke-linejoin", "round");
			svg.appendChild(path);

			const pathLength = path.getTotalLength();
			path.style.strokeDasharray = pathLength.toString();
			path.style.strokeDashoffset = pathLength.toString();

			anime({
				targets: path,
				strokeDashoffset: [pathLength, 0],
				duration: 2000,
				delay: delay,
				easing: "easeOutQuad",
			});

			// Create dots
			dataPoints.forEach((point, index) => {
				const x = 50 + (index * 330) / (dataPoints.length - 1);
				const y = 250 - (point * 200) / 100;

				if (index % 4 === 0) {
					const circle = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"circle"
					);
					circle.setAttribute("cx", x.toString());
					circle.setAttribute("cy", y.toString());
					circle.setAttribute("r", "0");
					circle.setAttribute("fill", color);
					svg.appendChild(circle);

					anime({
						targets: circle,
						r: [0, 4],
						opacity: [0, 1],
						duration: 800,
						delay: delay + 1000 + index * 100,
						easing: "easeOutElastic(1, .5)",
					});
				}
			});
		}

		// Create legend
		const legendItems = [
			{ label: "Crypto", color: primaryColor },
			{ label: "Real Estate", color: secondaryColor },
			{ label: "Stocks", color: tertiaryColor },
		];

		legendItems.forEach((item, index) => {
			const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
			g.setAttribute("transform", `translate(${50 + index * 120}, 20)`);

			const rect = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"rect"
			);
			rect.setAttribute("width", "12");
			rect.setAttribute("height", "4");
			rect.setAttribute("fill", item.color);
			rect.setAttribute("rx", "2");
			g.appendChild(rect);

			const text = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"text"
			);
			text.setAttribute("x", "18");
			text.setAttribute("y", "4");
			text.setAttribute("font-size", "12");
			text.setAttribute("fill", textColor);
			text.textContent = item.label;
			g.appendChild(text);

			svg.appendChild(g);
		});

		// Animate paths
		createPath(dataPoints1, primaryColor, 500);
		createPath(dataPoints2, secondaryColor, 800);
		createPath(dataPoints3, tertiaryColor, 1100);
	}, [theme]);

	return (
		<Card className="w-full h-full overflow-hidden">
			<CardContent className="p-6">
				<div className="flex justify-between items-center mb-6">
					<div>
						<h3 className="text-lg font-medium">Portfolio Performance</h3>
						<p className="text-sm text-muted-foreground">Last 5 months</p>
					</div>
					<div className="text-right">
						<p className="text-2xl font-bold">+27.4%</p>
						<p className="text-sm text-green-500">+$12,493.32</p>
					</div>
				</div>
				<div ref={chartRef} className="w-full h-[300px]" />
			</CardContent>
		</Card>
	);
}
