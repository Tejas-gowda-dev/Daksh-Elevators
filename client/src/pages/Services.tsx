import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";
import LogoDark from "../assets/dksha-elevator.webp";


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
      {/* <section className="py-20 lg:py-28 bg-brand-blue">
        <div className="container">
          <AnimatedSection>
            <div className="text-center">

              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                Discover our expert services designed to simplify, enhance, and elevate your experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-orange rounded-md hover:bg-brand-orange-dark transition-all duration-300"
                >
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white border-2 border-white/30 rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Call {COMPANY.phone}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}
      <section
  className="relative py-20 lg:py-28  bg-cover bg-center">
     <div className="absolute inset-0">
          <img
            src={LogoDark}
            alt="Elevator Company Bangalore"
            className="w-full h-full object-cover"
          />
        </div>
  {/* Overlay */}
  <div className="absolute inset-0 " />

  <div className="container relative z-10">
    <AnimatedSection>
      <div className="text-center">
        <p className="text-white/80 text-2xl mb-10 whitespace-nowrap">
          Discover our expert services designed to simplify, enhance, and elevate your experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-orange rounded-md hover:bg-brand-orange-dark transition-all duration-300"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white border-2 border-white/30 rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>
    </div>
  );
}
