import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

const PROJECTS = [
  { name: "Skyline Towers", location: "Coimbatore", type: "Residential", floors: 42, elevators: 8 },
  { name: "MedCare Hospital", location: "Chennai", type: "Healthcare", floors: 12, elevators: 6 },
  { name: "Grand Plaza Hotel", location: "Bangalore", type: "Hospitality", floors: 25, elevators: 10 },
  { name: "TechPark Complex", location: "Hyderabad", type: "Commercial", floors: 18, elevators: 6 },
  { name: "Royal Villas", location: "Kochi", type: "Residential", floors: 3, elevators: 12 },
  { name: "Metro Mall", location: "Coimbatore", type: "Retail", floors: 5, elevators: 16 },
  { name: "Greenfield University", location: "Trivandrum", type: "Education", floors: 6, elevators: 8 },
  { name: "Industrial Hub", location: "Tirupur", type: "Industrial", floors: 4, elevators: 6 },
];

export default function Projects() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Our Projects</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Featured Projects</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              A showcase of our most impactful installations across India's leading residential, commercial, and institutional buildings.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.08}>
                <div className="bg-white rounded-lg p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl border border-gray-100 hover:-translate-y-1">
                  <span className="px-3 py-1 text-xs text-brand-blue bg-brand-blue/10 rounded-full font-bold">{project.type}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{project.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">{project.location}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div><div className="text-brand-blue font-bold text-lg">{project.floors}</div><div className="text-gray-400 text-xs">Floors</div></div>
                    <div><div className="text-brand-blue font-bold text-lg">{project.elevators}</div><div className="text-gray-400 text-xs">Elevators</div></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-6">Your Project Could Be Next</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Let's discuss how AV Elevator Solutions can elevate your next development.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-orange rounded-md hover:bg-brand-orange-dark transition-all duration-300">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
