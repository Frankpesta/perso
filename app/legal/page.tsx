import { LegalHeader } from "@/components/legal/legal-header";
import { LegalOverview } from "@/components/legal/legal-overview";
import { LegalNotices } from "@/components/legal/legal-notices";
import { LegalRegulatory } from "@/components/legal/legal-regulatory";
import { LegalDisclaimer } from "@/components/legal/legal-disclaimer";
import { LegalContact } from "@/components/legal/legal-contact";

export const metadata = {
	title: "Legal Information | InvestWise",
	description:
		"Legal information, regulatory details, and disclaimers for InvestWise investment services",
};

export default function LegalPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<LegalHeader />
			<div className="max-w-4xl mx-auto">
				<LegalOverview />
				<LegalNotices />
				<LegalRegulatory />
				<LegalDisclaimer />
				<LegalContact />
			</div>
		</div>
	);
}
