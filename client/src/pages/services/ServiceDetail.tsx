import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="pt-32 pb-24 container text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Link href="/services" className="text-brand-blue hover:underline font-semibold">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <Link href="/services" className="inline-flex items-center gap-1 text-white/70 text-sm mb-6 hover:text-white">
              &larr; All Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {service.name}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">{service.fullDesc}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.process.map((step, i) => (
                <div key={step} className="bg-gray-50 rounded-lg p-6 flex items-start gap-4 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-blue text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need {service.name} Service?
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
              Contact our team for a free consultation and customized service proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-orange rounded-md hover:bg-brand-orange-dark transition-all duration-300"
            >
              Request Service <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
