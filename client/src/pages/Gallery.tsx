import AnimatedSection from "@/components/sections/AnimatedSection";

const GALLERY_IMAGES = [
  { src: "/manus-storage/hero-elevator_c567e1ce.png", alt: "MRL Elevator System", category: "Residential" },
  { src: "/manus-storage/commercial-building_a4985bfb.png", alt: "Commercial building elevator", category: "Commercial" },
  { src: "/manus-storage/residential-villa_aee5c194.png", alt: "Luxury villa elevators in Bangalore", category: "Residential" },
  { src: "/manus-storage/elevator-manufacturing_c43fbd94.png", alt: "Goods lift manufacturer in Bangalore", category: "Manufacturing" },
  { src: "/manus-storage/elevator-team_e3b3e2a3.png", alt: "Elevator modernization company Bangalore", category: "Team" },
];

export default function Gallery() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Our Gallery</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Explore our installations, manufacturing facilities, and the premium elevator experiences we create.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <AnimatedSection key={img.alt} delay={i * 0.1}>
                <div className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="px-3 py-1 text-xs text-white bg-brand-blue rounded-full font-bold">
                      {img.category}
                    </span>
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
