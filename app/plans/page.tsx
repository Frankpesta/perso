import { PlanHeader } from "@/components/plans/plan-header";
import { PlanTabs } from "@/components/plans/plan-tabs";
import { PlanComparison } from "@/components/plans/plan-comparison";
import { PlanTestimonials } from "@/components/plans/plan-testimonials";
import { PlanCta } from "@/components/plans/plan-cta";

export const metadata = {
	title: "Investment Plans | InvestWise",
	description:
		"Explore our range of investment plans for crypto, hedge funds, retirement, real estate, and children's investments",
};

export default function PlansPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<PlanHeader />
			<PlanTabs />
			<PlanComparison />
			<PlanTestimonials />
			<PlanCta />
		</div>
	);
}
