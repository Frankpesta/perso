import { TermsHeader } from "@/components/legal/terms-header";
import { TermsContent } from "@/components/legal/terms-content";

export const metadata = {
	title: "Terms and Conditions | Base Investment Group Limited",
	description:
		"Terms and conditions for using Base Investment Group Limited's investment platform and services",
};

export default function TermsPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<TermsHeader />
			<div className="max-w-4xl mx-auto">
				<TermsContent />
			</div>
		</div>
	);
}
