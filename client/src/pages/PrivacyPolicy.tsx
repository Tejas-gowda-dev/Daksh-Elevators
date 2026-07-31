import { Link } from "wouter";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <Link href="/" className="inline-flex items-center gap-1 text-white/70 text-sm mb-6 hover:text-white">&larr; Home</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">Privacy Policy</h1>
            <p className="text-white/80 text-base max-w-2xl leading-relaxed">Last updated: July 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-lg p-8 md:p-12 space-y-8 shadow-md border border-gray-100">
            {[
              { title: "Information We Collect", content: "We collect personal information including your name, email address, phone number, and project details when you submit an enquiry form or contact us. We also collect non-personal information such as browser type, IP address, and website usage patterns through analytics tools." },
              { title: "How We Use Your Information", content: "Your personal information is used to respond to your enquiries, provide quotes, schedule consultations, and deliver our elevator services. We may also use your information to send relevant updates about our products and services with your consent." },
              { title: "Data Protection", content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. All data is stored on secure servers with encryption protocols." },
              { title: "Third-Party Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share information with our service partners only when necessary to fulfill your requests, such as scheduling a site visit." },
              { title: "Cookies", content: "Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can disable cookies through your browser settings." },
              { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at privacy@avelevator.com." },
              { title: "Contact Us", content: "If you have questions about this Privacy Policy, please contact us at info@avelevator.com or call +91 98765 43210." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
