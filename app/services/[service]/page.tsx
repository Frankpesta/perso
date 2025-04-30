import { notFound } from "next/navigation";
import { ServiceHeader } from "@/components/services/service-header";
import { ServiceFeatures } from "@/components/services/service-features";
import { ServiceHowItWorks } from "@/components/services/service-how-it-works";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceCta } from "@/components/services/service-cta";
import { getServiceData } from "@/lib/services";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
	return [
		{ service: "crypto" },
		{ service: "hedge-fund" },
		{ service: "retirement" },
		{ service: "real-estate" },
		{ service: "children" },
	];
}

interface Props {
	params: {
		service: string;
	};
}

export function generateMetadata({ params }: Props): Metadata {
	const serviceData = getServiceData(params.service);

	if (!serviceData) {
		return {
			title: "Service Not Found",
		};
	}

	return {
		title: `${serviceData.title} | InvestWise`,
		description: serviceData.description,
	};
}

export default function ServicePage({ params }: Props) {
	const serviceData = getServiceData(params.service);

	if (!serviceData) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-12">
			<ServiceHeader
				title={serviceData.title}
				description={serviceData.description}
				image={serviceData.image}
			/>
			<ServiceFeatures features={serviceData.features} />
			<ServiceHowItWorks steps={serviceData.howItWorks} />
			<ServiceFaq faqs={serviceData.faqs} />
			<ServiceCta service={params.service} />
		</div>
	);
}
