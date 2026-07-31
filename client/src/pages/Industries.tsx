import { Link } from "wouter";
import { ArrowRight, Building2, Building, Heart, Hotel, ShoppingBag, GraduationCap, Landmark, Factory, PencilRuler, HardHat } from "lucide-react";
import { INDUSTRIES, COMPANY } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";

const ICON_MAP: Record<string, typeof Building2> = {
  Building2, Building, Heart, Hotel, ShoppingBag, GraduationCap, Landmark, Factory, PencilRuler, HardHat,
};

export default function Industries() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden rounded-t-[50px] rounded-b-[50px]">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Industries</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Industries We Serve</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              From residential complexes to industrial facilities, our elevator solutions power vertical movement across every sector.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry, i) => {
              const Icon = ICON_MAP[industry.icon] || Building2;
              return (
                <AnimatedSection key={industry.name} delay={i * 0.08}>
                  <div className="bg-white rounded-lg p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl border border-gray-100 hover:-translate-y-1">
                    <Icon className="w-10 h-10 text-brand-blue mb-5" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{industry.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Our engineering team designs custom elevator solutions for unique industry requirements.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-orange rounded-md hover:bg-brand-orange-dark transition-all duration-300">
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
