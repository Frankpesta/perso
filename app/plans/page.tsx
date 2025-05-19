import { PlanHeader } from "@/components/plans/plan-header";
import { PlanTabs } from "@/components/plans/plan-tabs";
import { PlanComparison } from "@/components/plans/plan-comparison";
import { PlanTestimonials } from "@/components/plans/plan-testimonials";
import { PlanCta } from "@/components/plans/plan-cta";
import { EliteBundlePlan } from "@/components/plans/elite-bundle-plan";

export const metadata = {
	title: "Investment Plans | Base Investment Group Limited",
	description:
		"Explore our range of investment plans for crypto, hedge funds, retirement, real estate, and children's investments",
};

export default function PlansPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<PlanHeader />
			<PlanTabs />
			<EliteBundlePlan />
			<PlanComparison />
			<PlanTestimonials />
			<PlanCta />
		</div>
	);
}
