import { Link } from "wouter";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function Terms() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <Link href="/" className="inline-flex items-center gap-1 text-white/70 text-sm mb-6 hover:text-white">&larr; Home</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">Terms of Service</h1>
            <p className="text-white/80 text-base max-w-2xl leading-relaxed">Last updated: July 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-lg p-8 md:p-12 space-y-8 shadow-md border border-gray-100">
            {[
              { title: "Acceptance of Terms", content: "By accessing and using the AV Elevator Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
              { title: "Services", content: "AV Elevator Solutions provides elevator manufacturing, installation, maintenance, modernization, and repair services. All services are subject to separate agreements and quotations provided to the client." },
              { title: "Quotations & Pricing", content: "All quotations provided are valid for 30 days from the date of issue unless otherwise specified. Prices are subject to change based on material costs, design modifications, and scope changes." },
              { title: "Warranty", content: "Our elevators come with a standard 2-year warranty covering manufacturing defects. Warranty claims must be reported within 30 days of discovering the defect. Warranty does not cover damage from misuse, negligence, or unauthorized modifications." },
              { title: "Installation & Delivery", content: "Installation timelines are estimates based on standard conditions. Delays caused by site unpreparedness, design changes, or force majeure events are not covered under our delivery commitments." },
              { title: "Liability", content: "AV Elevator Solutions' liability is limited to the value of the contract. We are not liable for indirect, incidental, or consequential damages arising from the use of our products or services." },
              { title: "Intellectual Property", content: "All designs, technical drawings, specifications, and intellectual property related to our elevator systems remain the property of AV Elevator Solutions." },
              { title: "Contact", content: "For any questions regarding these Terms of Service, please contact us at info@avelevator.com or call +91 98765 43210." },
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
