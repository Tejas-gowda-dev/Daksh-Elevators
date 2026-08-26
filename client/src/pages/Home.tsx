import SEO from "@/components/SEO";
import { motion , AnimatePresence} from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Award, Clock, ChevronDown, Star, MapPin, Users, Building2, CheckCircle, Download } from "lucide-react";
import { COMPANY, PRODUCTS, SERVICES, INDUSTRIES, TESTIMONIALS, FAQS } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";
// import Logo from "../assets/Daksh.webp";
import LogoDark from "../assets/dksha-elevator.webp";
import Main1 from "../assets/DakshaMain1.webp";
import Main2 from "../assets/DakshMain2.webp";
import About from "../assets/dksha-about.webp";
import AutoPopupForm from "@/components/AutoPopupForm";
import { useEffect, useState } from "react";


/* ============================================
   HERO SECTION — Blue gradient background like Daksh
   ============================================ */
function HeroSection() {
   const BACKGROUND_IMAGES = [
    LogoDark,
    Main1,
    Main2
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <SEO
        title="Daksh Elevators Pvt. Ltd. | Home, Commercial & Passenger Elevators Bangalore"
        description="Daksh Elevator Solutions provides premium elevators, installation, modernization, AMC, and maintenance services across India."
        keywords="Elevator manufacturer, Passenger Lift, Home Lift, Goods Lift"
      />
      <section className="relative min-h-[85vh] flex items-center overflow-hidden  mt-20">
        {/* Background image with overlay */}
         <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImage}
              src={BACKGROUND_IMAGES[currentImage]}
              alt="Daksh Elevators"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 , ease: 'easeInOut'}}
            />
          </AnimatePresence>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="container relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium mb-4">
              Welcome To
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4">
              Daksh Elevators
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Daksh Elevators has grown to become one of the few fully integrated Indian elevator companies that designs, engineers, installs and maintains elevating devices.          </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white bg-brand-orange rounded-md hover:bg-brand-orange-dark transition-all duration-300 hover:shadow-lg"
              >
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white border-2 border-white/30 rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ============================================
   STATS SECTION
   ============================================ */
function StatsSection() {
  const stats = [
    { label: "Years of Experience", value: 8, suffix: "+" },
    { label: "Projects Completed", value: 750, suffix: "+" },
    { label: "Happy Customers", value: 2000, suffix: "+" },
    { label: "Top Quality", value: 100, suffix: "%" },
  ];

  return (
    <section className="relative py-16 bg-white border-b border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: { label: string; value: number; suffix: string }; index: number }) {
  const { ref, count } = useCountUp(stat.value);
  return (
    <div className="text-center" ref={ref}>
      <AnimatedSection delay={index * 0.1}>
        <div className="text-4xl md:text-5xl font-bold text-brand-blue mb-2">
          {count.toLocaleString()}{stat.suffix}
        </div>
        <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
      </AnimatedSection>
    </div>
  );
}



/* ============================================
   PRODUCTS SECTION
   ============================================ */
function ProductsSection() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <section className="py-14 bg-white">
      <div className="container">
        <SectionHeading
          label="Our Products"
          title="Premium Elevator Solutions"
          subtitle="From residential elegance to industrial strength, discover elevators engineered for every vertical challenge."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <AnimatedSection key={product.slug} delay={i * 0.1}>
              <Link href={`/products/${product.slug}`}>
                <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.shortDesc}</p>
                    <span className="inline-flex items-center gap-1 text-brand-blue text-xs font-bold">
                      View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-blue rounded-md hover:bg-brand-blue-dark transition-all duration-300"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SERVICES SECTION
   ============================================ */
function ServicesSection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container">
        <SectionHeading
          label="Our Services"
          title="Complete Elevator Lifecycle"
          subtitle="From installation to modernization, we provide end-to-end elevator solutions with unmatched expertise."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.1}>
              <Link href={`/services/${service.slug}`}>
                <div className="group bg-white rounded-lg p-8 h-full transition-all duration-500 text-center shadow-md hover:shadow-xl border border-gray-100 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-blue/20 transition-colors">
                    <ArrowRight className="w-6 h-6 text-brand-blue group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.shortDesc}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   WHY CHOOSE US
   ============================================ */
function WhyChooseUs() {
  const reasons = [
    { icon: Shield, title: "Safety First", desc: "BIS certified elevators with multi-layer safety systems" },
    { icon: Award, title: "Premium Quality", desc: "Manufactured to international standards with premium materials" },
    { icon: Clock, title: "On-Time Delivery", desc: "99% of projects delivered within committed timelines" },
    { icon: MapPin, title: "Across Karnataka Service", desc: "Serving 150+ cities with dedicated service teams" },
    { icon: Users, title: "Expert Team", desc: "20+ certified engineers and technicians" },
    { icon: Building2, title: "Custom Solutions", desc: "Tailored designs for every project requirement" },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container">
        <SectionHeading
          label="Why Choose Us"
          title="Daksh Elevator Advantage"
          subtitle="What sets us apart in India's elevator industry — and why leading developers trust us."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.1}>
              <div className="bg-white rounded-lg p-8 transition-all duration-500 group shadow-md hover:shadow-xl border border-gray-100 hover:-translate-y-1">
                <reason.icon className="w-8 h-8 text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   INDUSTRIES SECTION
   ============================================ */
function IndustriesSection() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container">
        <SectionHeading
          label="Industries Served"
          title="Trusted Across Sectors"
          subtitle="Our elevators power vertical movement in every sector that matters."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <AnimatedSection key={industry.name} delay={i * 0.05}>
              <div className="bg-white rounded-lg p-5 text-center transition-all duration-500 shadow-md hover:shadow-lg border border-gray-100 hover:-translate-y-1">
                <p className="text-gray-700 text-sm font-semibold">{industry.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   TESTIMONIALS SECTION
   ============================================ */
function TestimonialsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from the developers, architects, and homeowners who trust us."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white rounded-lg p-8 transition-all duration-500 h-full shadow-md hover:shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================================
   ABOUT PREVIEW — Image left, text right like Daksh
   ============================================ */

function AboutPreview() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* About Image */}
          <AnimatedSection>
            <div className="relative">
              <div className="w-full max-w-[712px] aspect-[712/534] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={About}
                  alt="Best Elevator Company in Bangalore"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* About Content */}
          <AnimatedSection delay={0.2}>
            <span className="inline-block text-brand-orange text-xl font-bold uppercase tracking-wider mb-3">
              Why Choose Us?
            </span>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Established in <strong>2018</strong>, Dksh Elevator Solutions is
              a trusted provider of reliable, safe, and efficient elevator
              solutions. With <strong>250+ projects successfully completed</strong>,
              we specialize in the design, installation, and maintenance of
              lifts for residential and commercial spaces. Driven by quality,
              safety, and customer satisfaction, we deliver elevator solutions
              you can trust.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                "Established in 2018 with proven industry experience",
                "250+ successful projects completed across various sectors",
                "High safety standards and quality-driven processes",
                "Customized elevator solutions for every space",
                "Reliable after-sales service and maintenance support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-gray-600 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">

              {/* Read More Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white bg-brand-blue rounded-md hover:bg-brand-blue-dark transition-all duration-300"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Download Brochure Button */}
              <a
                href="/brochure.pdf"
                download="Dksh-Elevator-Solutions-Brochure.pdf"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white bg-brand-orange rounded-md hover:opacity-90 transition-all duration-300"
              >
                Download Brochure
                <Download className="w-4 h-4" />
              </a>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}



/* ============================================
   FAQ SECTION
   ============================================ */
function FAQSection() {
  const faqs = FAQS.slice(0, 5);
  return (
    <section className="py-14 bg-gray-50">
      <div className="container">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Get answers to the most common questions about our elevators and services."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <details className="bg-white rounded-lg border border-gray-100 shadow-sm group">
        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
          <span className="text-gray-800 font-medium text-sm md:text-base pr-4">{faq.q}</span>
          <span className="text-brand-blue text-xl group-open:rotate-45 transition-transform duration-300 shrink-0">+</span>
        </summary>
        <div className="px-6 pb-6 -mt-2">
          <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
        </div>
      </details>
    </AnimatedSection>
  );
}

/* ============================================
   CTA SECTION
   ============================================ */
function CTASection() {
  return (
    <section className="py-14 bg-brand-blue">
      <div className="container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Project?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
              Schedule a free consultation with our expert team. We'll help you choose the perfect elevator solution for your building.
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
  );
}

/* ============================================
   HOME PAGE
   ============================================ */
export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      {/* <AboutPreview /> */}
       <AutoPopupForm />
      <ProductsSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <TestimonialsSection />
      <AboutPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
