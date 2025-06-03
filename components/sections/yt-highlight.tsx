"use client";

import { useState } from "react";

const YOUTUBE_ID = "_MENcyGUui0";

export default function BaseInvestmentHighlight() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="container flex flex-col md:flex-row items-center gap-12 rounded-2xl shadow-2xl mx-auto my-16 transition-colors duration-300 py-6">
			{/* Text Section */}
			<div className="flex-1">
				<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-5">
					Why Choose{" "}
					<span className="text-primary">Base Investment Group Ltd</span>?
				</h2>
				<p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
					At{" "}
					<span className="font-semibold text-primary dark:text-primary">
						Base Investment Group Ltd
					</span>
					, we set the gold standard for investment excellence. Our team of
					seasoned professionals delivers tailored financial strategies,
					innovative solutions, and unwavering commitment to your success.
					Whether you’re a seasoned investor or just starting out, trust us to
					help you grow, protect, and maximize your wealth with integrity and
					expertise.
				</p>
				<ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
					<li>Proven track record of high returns</li>
					<li>Personalized investment strategies</li>
					<li>Transparent, client-focused service</li>
					<li>Cutting-edge market insights</li>
				</ul>
			</div>

			{/* Video Section */}
			<div
				className="flex-1 relative w-full max-w-full aspect-video rounded-xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				aria-label="Watch Base Investment Group Ltd introduction video">
				{!hovered ? (
					<div className="relative w-full h-full">
						<img
							src={`https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
							alt="Base Investment Group Ltd Introduction"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 dark:bg-opacity-50">
							<svg
								className="w-16 h-16 text-white opacity-90"
								fill="currentColor"
								viewBox="0 0 84 84"
								aria-hidden="true">
								<circle
									cx="42"
									cy="42"
									r="42"
									fill="currentColor"
									opacity="0.6"
								/>
								<polygon points="34,28 60,42 34,56" fill="#fff" />
							</svg>
						</div>
					</div>
				) : (
					<iframe
						className="w-full h-full"
						src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&controls=1&rel=0`}
						title="Base Investment Group Ltd Introduction"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
					/>
				)}
			</div>
		</section>
	);
}
