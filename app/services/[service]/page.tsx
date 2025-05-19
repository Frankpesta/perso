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

// Define Props with params as a Promise
interface Props {
	params: Promise<{ service: string }>;
}

// Update generateMetadata to handle async params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { service } = await params; // Await the params Promise
	const serviceData = getServiceData(service);

	if (!serviceData) {
		return {
			title: "Service Not Found",
		};
	}

	return {
		title: `${serviceData.title} | Base Investment Group Limited`,
		description: serviceData.description,
	};
}

// Update the page component to handle async params
export default async function ServicePage({ params }: Props) {
	const { service } = await params; // Await the params Promise
	const serviceData = getServiceData(service);

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
			<ServiceCta service={service} />
		</div>
	);
}
