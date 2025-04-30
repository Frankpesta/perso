import { AboutHero } from "@/components/about/about-hero";
import { AboutMission } from "@/components/about/about-mission";
import { AboutTeam } from "@/components/about/about-team";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutValues } from "@/components/about/about-values";
import { AboutCta } from "@/components/about/about-cta";

export const metadata = {
	title: "About Us | InvestWise",
	description:
		"Learn about our mission, values, and the team behind InvestWise",
};

export default function AboutPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<AboutHero />
			<AboutMission />
			<AboutValues />
			<AboutTeam />
			<AboutTimeline />
			<AboutCta />
		</div>
	);
}
