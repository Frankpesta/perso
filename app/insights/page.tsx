import { InsightsHeader } from "@/components/insights/insights-header";
import { InsightsFeatured } from "@/components/insights/insights-featured";
import { InsightsGrid } from "@/components/insights/insights-grid";
import { InsightsCategories } from "@/components/insights/insights-categories";
import { InsightsNewsletter } from "@/components/insights/insights-newsletter";
import { InsightsCta } from "@/components/insights/insights-cta";

export const metadata = {
	title: "Market Insights | InvestWise",
	description:
		"Expert analysis, market trends, and investment insights to help you make informed decisions",
};

export default function InsightsPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<InsightsHeader />
			<InsightsFeatured />
			<InsightsCategories />
			<InsightsGrid />
			<InsightsNewsletter />
			<InsightsCta />
		</div>
	);
}
