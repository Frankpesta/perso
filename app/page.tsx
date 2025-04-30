import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FeaturedInSection } from "@/components/sections/featured-in-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturedInSection />
			<ServicesSection />
			<StatsSection />
			<TestimonialsSection />
			<CtaSection />
		</>
	);
}
