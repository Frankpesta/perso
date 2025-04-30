import { PrivacyHeader } from "@/components/legal/privacy-header";
import { PrivacyContent } from "@/components/legal/privacy-content";

export const metadata = {
	title: "Privacy Policy | InvestWise",
	description:
		"Privacy policy detailing how InvestWise collects, uses, and protects your personal information",
};

export default function PrivacyPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<PrivacyHeader />
			<div className="max-w-4xl mx-auto">
				<PrivacyContent />
			</div>
		</div>
	);
}
