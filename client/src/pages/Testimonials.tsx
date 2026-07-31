import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function Testimonials() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Testimonials</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Client Stories</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Hear from the developers, architects, and building owners who trust AV Elevator Solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-8 h-full shadow-md border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                      <span className="text-brand-blue font-bold">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
