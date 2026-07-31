import { Link } from "wouter";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { CAREERS_OPENINGS } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function Careers() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Careers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Join Our Team</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Be part of India's leading elevator manufacturer. We're always looking for talented professionals who share our passion for engineering excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {CAREERS_OPENINGS.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.08}>
                <div className="bg-white rounded-lg p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl border border-gray-100 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs text-brand-blue bg-brand-blue/10 rounded-full font-bold">{job.department}</span>
                    <span className="px-3 py-1 text-xs text-gray-500 bg-gray-100 rounded-full">{job.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.type}</span>
                  </div>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-brand-blue text-sm font-bold hover:underline"
                  >
                    Apply Now &rarr;
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-6">Can't Find the Right Role?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Send us your resume and we'll reach out when a matching opportunity arises.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-orange rounded-md hover:bg-brand-orange-dark transition-all duration-300">
              Send Resume <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
