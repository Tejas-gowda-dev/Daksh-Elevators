import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Insights & Knowledge</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Stay updated with the latest trends, tips, and innovations in the elevator industry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-8 h-full transition-all duration-500 shadow-md hover:shadow-xl border border-gray-100 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs text-brand-blue bg-brand-blue/10 rounded-full font-bold">{post.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-brand-blue text-sm font-bold">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
