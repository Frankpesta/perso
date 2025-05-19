import { ContactHeader } from "@/components/contact/contact-header";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactOffices } from "@/components/contact/contact-offices";
import { ContactSupport } from "@/components/contact/contact-support";
import { ContactSocial } from "@/components/contact/contact-social";

export const metadata = {
	title: "Contact Us | Base Investment Group Limited",
	description:
		"Get in touch with our team for support, inquiries, or to learn more about our investment services",
};

export default function ContactPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<ContactHeader />
			<div className="grid gap-12 lg:grid-cols-2">
				<ContactForm />
				<div className="space-y-12">
					<ContactOffices />
					<ContactSupport />
					<ContactSocial />
				</div>
			</div>
		</div>
	);
}
