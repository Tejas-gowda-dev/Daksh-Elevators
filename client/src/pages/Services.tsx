import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function Services() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Complete Elevator <br />
              Lifecycle Services
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              From initial installation to ongoing maintenance and modernization, we provide end-to-end elevator solutions that ensure your vertical transportation system operates at peak performance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group bg-white rounded-lg p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl border border-gray-100 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-6">{service.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.process.slice(0, 3).map((step) => (
                        <span key={step} className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded-full">{step}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-brand-blue text-sm font-bold">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
