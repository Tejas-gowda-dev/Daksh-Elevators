// ============================================
// Daksh Elevator Solutions — Site Data
// ============================================

export const COMPANY = {
  name: "Daksh Elevator Solutions",
  tagline: "Elevating Standards. Engineering Excellence.",
  phone: "+91 94498 66452",
  email: "dakshelevatorsprivatelimited@gmail.com",
  whatsapp: "91 8971376452",
  address: "#12, 1st Floor, 1st Cross, 10th Main, Adarsha Layout, Jnanajyothi Nagar, Mallathalli, Bengaluru-560056",
  yearFounded: 2018,
  citiesServed: 150,
  projectsCompleted: 750,
  customersServed: 1800,
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Passenger Elevators", href: "/products/passenger-elevators" },
      { label: "Home Elevators", href: "/products/home-elevators" },
      { label: "Hospital Elevators", href: "/products/hospital-elevators" },
      { label: "Goods Elevators", href: "/products/goods-elevators" },
      { label: "Hydraulic Elevators", href: "/products/hydraulic-elevators" },
      { label: "MRL Elevators", href: "/products/mrl-elevators" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Installation", href: "/services/installation" },
      { label: "Maintenance", href: "/services/maintenance" },
      { label: "AMC", href: "/services/amc" },
      { label: "Modernization", href: "/services/modernization" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const PRODUCTS = [
  {
    slug: "passenger-elevators",
    name: "Passenger Elevators",
    shortDesc: "Smooth, reliable vertical transportation for residential and commercial buildings.",
    fullDesc: "Our passenger elevators combine cutting-edge technology with elegant design to deliver seamless vertical transportation. Engineered for high-traffic environments, they offer whisper-quiet operation, rapid transit, and unmatched safety features.",
    capacity: "4–30 Persons",
    speed: "0.63 – 4.0 m/s",
    stops: "2 – 120 Floors",
    features: ["Regenerative Drive", "LED Cabin Lighting", "Touchless Controls", "Emergency Communication", "Anti-Vibration System", "Power Saving Mode"],
    applications: ["High-Rise Buildings", "Apartments", "Hotels", "Office Complexes", "Shopping Malls"],
    image: "/manus-storage/hero-elevator_c567e1ce.png",
  },
  {
    slug: "home-elevators",
    name: "Home Elevators",
    shortDesc: "Luxury home lifts designed for elegance, safety, and effortless living.",
    fullDesc: "Transform your home with a luxury elevator that blends seamlessly with your interior design. Our home elevators offer whisper-quiet operation, minimal installation footprint, and customizable cabin aesthetics.",
    capacity: "1–6 Persons",
    speed: "0.15 – 0.5 m/s",
    stops: "2 – 6 Floors",
    features: ["Zero Pit Required", "Glass Enclosure Options", "Battery Backup", "Silent Operation", "Custom Finishes", "Child Safety Lock"],
    applications: ["Villas", "Penthouses", "Duplex Homes", "Townhouses", "Hill Homes"],
    image: "/manus-storage/residential-villa_aee5c194.png",
  },
  
  {
    slug: "hospital-elevators",
    name: "Hospital Elevators",
    shortDesc: "Purpose-built for healthcare — wide doors, smooth rides, and critical reliability.",
    fullDesc: "Hospital elevators are engineered for the unique demands of healthcare environments. Extra-wide doors accommodate stretchers and wheelchairs, while precision leveling ensures safe patient transfer at every floor.",
    capacity: "5–20 Persons",
    speed: "0.63 – 1.6 m/s",
    stops: "2 – 40 Floors",
    features: ["Stretchers Compatible", "Antimicrobial Coating", "Precision Leveling", "Priority Service Mode", "Bacterial Resistant Surfaces", "Backup Power"],
    applications: ["Hospitals", "Clinics", "Nursing Homes", "Medical Centers", "Rehabilitation Centers"],
    image: "/manus-storage/elevator-manufacturing_c43fbd94.png",
  },
  {
    slug: "goods-elevators",
    name: "Goods Elevators",
    shortDesc: "Heavy-duty freight handling with industrial-grade strength and reliability.",
    fullDesc: "Our goods elevators are built to handle the toughest loads with ease. Featuring reinforced platforms, heavy-duty motors, and industrial safety systems, they deliver reliable vertical freight transportation.",
    capacity: "500 – 5000 kg",
    speed: "0.25 – 1.0 m/s",
    stops: "2 – 20 Floors",
    features: ["Heavy-Duty Platform", "Overload Protection", "Industrial Motor", "Safety Gate System", "Cargo Door Lock", "Vibration Dampening"],
    applications: ["Warehouses", "Factories", "Logistics Centers", "Commercial Kitchens", "Parking Lots"],
    image: "/manus-storage/elevator-team_e3b3e2a3.png",
  },
  {
    slug: "hydraulic-elevators",
    name: "Hydraulic Elevators",
    shortDesc: "Smooth, powerful hydraulic lifts ideal for low to mid-rise buildings.",
    fullDesc: "Hydraulic elevators offer smooth, powerful operation without the need for a machine room above the shaft. Ideal for buildings up to 6 floors, they provide excellent load capacity with minimal space requirements.",
    capacity: "4–15 Persons",
    speed: "0.15 – 1.0 m/s",
    stops: "2 – 6 Floors",
    features: ["No Machine Room Above", "Smooth Hydraulic Drive", "High Load Capacity", "Emergency Descent", "Low Noise Operation", "Compact Design"],
    applications: ["Low-Rise Buildings", "Parking Structures", "Small Offices", "Residential Complexes", "Retrofit Projects"],
    image: "/manus-storage/hero-elevator_c567e1ce.png",
  },
  {
    slug: "mrl-elevators",
    name: "MRL Elevators",
    shortDesc: "Machine Room Less technology — maximum performance with minimum footprint.",
    fullDesc: "Machine Room Less (MRL) elevators integrate the drive system within the shaft, eliminating the need for a separate machine room. This space-saving solution offers energy-efficient performance with modern aesthetics.",
    capacity: "4–24 Persons",
    speed: "0.63 – 2.5 m/s",
    stops: "2 – 60 Floors",
    features: ["No Separate Machine Room", "Permanent Magnet Motor", "Energy Efficient", "Compact Control Panel", "Regenerative Braking", "Silent Operation"],
    applications: ["Mid-Rise Buildings", "Apartments", "Hotels", "Office Buildings", "Mixed-Use Complexes"],
    image: "/manus-storage/commercial-building_a4985bfb.png",
  },
 
];

export const SERVICES = [
  {
    slug: "installation",
    name: "Installation",
    shortDesc: "Expert installation with precision engineering and timely delivery.",
    fullDesc: "Our installation team brings decades of experience to every project. From site assessment to final testing, we ensure every elevator is installed to the highest standards of safety and performance.",
    process: ["Site Survey & Assessment", "Design & Engineering", "Manufacturing & Assembly", "Installation & Wiring", "Testing & Commissioning", "Handover & Training"],
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    shortDesc: "Preventive maintenance programs that keep your elevators running flawlessly.",
    fullDesc: "Regular maintenance is the key to elevator longevity. Our certified technicians follow comprehensive checklists to identify and address potential issues before they become problems.",
    process: ["Monthly Safety Inspection", "Mechanical Component Check", "Electrical System Review", "Lubrication & Adjustment", "Performance Testing", "Detailed Reports"],
  },
  {
    slug: "amc",
    name: "AMC",
    shortDesc: "Comprehensive Annual Maintenance Contracts for worry-free operation.",
    fullDesc: "Our Annual Maintenance Contracts provide complete peace of mind with scheduled servicing, priority response, genuine spare parts, and 24/7 emergency support — all at a predictable annual cost.",
    process: ["Contract Customization", "Scheduled Servicing", "Priority Emergency Response", "Genuine Spare Parts", "Performance Monitoring", "Annual Safety Audit"],
  },
  {
    slug: "modernization",
    name: "Modernization",
    shortDesc: "Upgrade your existing elevator with modern technology and premium aesthetics.",
    fullDesc: "Give your aging elevator a complete transformation. Our modernization service upgrades controls, doors, cabin interiors, and safety systems — extending the elevator's life by 15-20 years.",
    process: ["Audit & Assessment", "Modernization Plan", "Component Upgrades", "Cabin Renovation", "Control System Update", "Testing & Certification"],
  },
];

export const INDUSTRIES = [
  { name: "Residential Buildings", icon: "Building2", desc: "Premium lifts for apartments, villas, and housing societies" },
  { name: "Commercial Buildings", icon: "Building", desc: "High-capacity elevators for offices and corporate towers" },
  { name: "Hospitals & Healthcare", icon: "Heart", desc: "Specialized medical elevators for patient transport" },
  { name: "Hotels & Hospitality", icon: "Hotel", desc: "Luxury capsule and passenger elevators" },
  { name: "Shopping Malls", icon: "ShoppingBag", desc: "High-traffic elevators with panoramic options" },
  { name: "Educational Institutions", icon: "GraduationCap", desc: "Safe, reliable lifts for schools and colleges" },
  { name: "Government Buildings", icon: "Landmark", desc: "Compliant lifts for public sector facilities" },
  { name: "Industrial Facilities", icon: "Factory", desc: "Heavy-duty freight and goods elevators" },
  { name: "Architects & Designers", icon: "PencilRuler", desc: "Custom solutions for architectural projects" },
  { name: "Construction Companies", icon: "HardHat", desc: "Site lifts and construction elevators" },
];

export const TESTIMONIALS = [
  { name: "Rajesh Kumar", role: "Director, Skyline Developers", text: "The elevators installed by Daksh Elevators enhanced both functionality and aesthetics of our property. Guests appreciate the comfort, and we appreciate the dependable service support.", rating: 5 },
  { name: "Dr. Priya Sharma", role: "Administrator, MedCare Hospital", text: "Daksh Elevators delivered exactly what they promisedsmooth performance, excellent finish, and reliable after-sales support. Their team was professional and responsive throughout the project.", rating: 5 },
  { name: "Anand Venkatesh", role: "CEO, Grand Plaza Hotels", text: "We chose Daksh Elevators for their reputation of trust and reliability, and they exceeded our expectations. The custom built solution perfectly matched our building requirements.", rating: 5 },
  { name: "Meena Lakshmi", role: "Homeowner, Villa Project", text: "We have been working with Daksh Elevators for years, and their consistency in quality and service is impressive. Their team is always prompt and professional.", rating: 5 },
];

export const FAQS = [
  { q: "What is the warranty period for AV elevators?", a: "All AV elevators come with a standard 2-year warranty covering manufacturing defects and mechanical components. Extended warranty options are available upon request." },
  { q: "How long does installation typically take?", a: "Installation time varies by project. A home elevator typically takes 2-4 weeks, while a commercial passenger elevator may take 4-8 weeks from shaft readiness to commissioning." },
  { q: "Do you offer 24/7 emergency service?", a: "Yes, we provide 24/7 emergency breakdown service across all our service areas. Our AMC customers receive priority response with guaranteed arrival within 2 hours." },
  { q: "Can you modernize elevators from other brands?", a: "Absolutely. Our modernization team works with all major elevator brands. We can upgrade controls, doors, cabin interiors, and safety systems regardless of the original manufacturer." },
  { q: "What maintenance packages do you offer?", a: "We offer Bronze (basic), Silver (standard), Gold (comprehensive), and Platinum (premium) AMC packages. Each includes scheduled servicing, genuine spare parts, and emergency support at varying levels." },
  { q: "Are your elevators BIS certified?", a: "Yes, all AV elevators are manufactured to IS 2091 standards and undergo rigorous quality testing. We also comply with international safety standards including EN 81." },
  { q: "Do you provide custom design options?", a: "Yes, we offer extensive customization including cabin finishes, lighting, flooring, door styles, and control panels. Our design team works with architects to create unique elevator experiences." },
  { q: "What areas do you serve?", a: "We serve 150+ cities across India with a strong presence in Tamil Nadu, Kerala, Karnataka, Telangana, and Maharashtra. Our network continues to expand." },
];

export const BLOG_POSTS = [
  { slug: "elevator-safety-tips", title: "10 Essential Elevator Safety Tips Every Building Owner Should Know", date: "2026-07-15", excerpt: "Elevator safety is paramount. Learn the essential maintenance practices and safety protocols that every building owner must implement.", category: "Safety" },
  { slug: "future-of-elevators", title: "The Future of Vertical Transportation: Trends Shaping 2026", date: "2026-07-10", excerpt: "From AI-powered predictive maintenance to destination dispatch systems, explore the innovations transforming the elevator industry.", category: "Technology" },
  { slug: "home-elevator-buying-guide", title: "Complete Guide to Choosing the Perfect Home Elevator", date: "2026-07-05", excerpt: "Everything you need to know about selecting, designing, and installing a home elevator — from types and costs to space requirements.", category: "Guide" },
  { slug: "green-elevators", title: "Energy-Efficient Elevators: How Green Technology is Changing the Industry", date: "2026-06-28", excerpt: "Discover how regenerative drives, LED lighting, and smart controls are making modern elevators more sustainable than ever.", category: "Sustainability" },
];

export const CAREERS_OPENINGS = [
  { title: "Senior Elevator Engineer", location: "Coimbatore", type: "Full-time", department: "Engineering" },
  { title: "Installation Team Lead", location: "Chennai", type: "Full-time", department: "Operations" },
  { title: "Service Technician", location: "Bangalore", type: "Full-time", department: "Service" },
  { title: "Sales Manager", location: "Hyderabad", type: "Full-time", department: "Sales" },
  { title: "Design Engineer", location: "Coimbatore", type: "Full-time", department: "Engineering" },
  { title: "Quality Inspector", location: "Coimbatore", type: "Full-time", department: "Quality" },
];
