import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FAQS } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function FAQ() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">FAQ</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Frequently Asked Questions</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Find answers to the most common questions about our elevators, services, and support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="bg-gray-50 rounded-lg border border-gray-100 group shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-gray-800 font-medium text-sm md:text-base pr-4">{faq.q}</span>
                    <span className="text-brand-blue text-xl group-open:rotate-45 transition-transform duration-300 shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
              Our team is here to help. Reach out for personalized answers to your specific needs.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-orange rounded-md hover:bg-brand-orange-dark transition-all duration-300">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
