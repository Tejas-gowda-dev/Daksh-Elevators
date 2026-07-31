// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
// import { COMPANY } from "@/lib/data";
// import AnimatedSection from "@/components/sections/AnimatedSection";
// import { toast } from "sonner";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "", phone: "", email: "", city: "",
//     liftType: "", buildingType: "", floors: "", message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const validate = () => {
//     const e: Record<string, string> = {};
//     if (!form.name.trim()) e.name = "Name is required";
//     if (!form.phone.trim()) e.phone = "Phone is required";
//     if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
//     return e;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const errs = validate();
//     setErrors(errs);
//     if (Object.keys(errs).length === 0) {
//       setSubmitted(true);
//       toast.success("Enquiry submitted! We'll get back to you within 24 hours.");
//     }
//   };

//   const updateField = (field: string, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
//   };

//   return (
//     <div className="pt-20">
//       <section className="relative py-24 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-brand-blue">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
//         </div>
//         <div className="container relative z-10">
//           <AnimatedSection>
//             <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Contact Us</span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Let's Connect</h1>
//             <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
//               Ready to elevate your project? Fill out the form below and our team will respond within 24 hours.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="container">
//           <div className="grid lg:grid-cols-3 gap-12">
//             {/* Contact Info */}
//             <AnimatedSection>
//               <div className="space-y-8">
//                 {[
//                   { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
//                   { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
//                   { icon: MapPin, label: "Address", value: COMPANY.address, href: "#" },
//                   { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 6PM", href: "#" },
//                 ].map((item) => (
//                   <a key={item.label} href={item.href} className="flex items-start gap-4 group">
//                     <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/20 transition-colors">
//                       <item.icon className="w-5 h-5 text-brand-blue" />
//                     </div>
//                     <div>
//                       <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</div>
//                       <div className="text-gray-800 text-sm font-semibold">{item.value}</div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </AnimatedSection>

//             {/* Form */}
//             <div className="lg:col-span-2">
//               <AnimatedSection delay={0.15}>
//                 {submitted ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="bg-white rounded-lg p-12 text-center shadow-md border border-gray-100"
//                   >
//                     <CheckCircle2 className="w-16 h-16 text-brand-blue mx-auto mb-6" />
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3">Enquiry Submitted!</h3>
//                     <p className="text-gray-500 mb-6">Thank you for your interest. Our team will contact you within 24 hours.</p>
//                     <button
//                       onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", city: "", liftType: "", buildingType: "", floors: "", message: "" }); }}
//                       className="text-brand-blue text-sm font-bold hover:underline"
//                     >
//                       Submit Another Enquiry
//                     </button>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-10 space-y-6 shadow-md border border-gray-100">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-600 text-sm font-medium mb-2">Name *</label>
//                         <input type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Your name" />
//                         {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//                       </div>
//                       <div>
//                         <label className="block text-gray-600 text-sm font-medium mb-2">Phone *</label>
//                         <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Phone number" />
//                         {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//                       </div>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
//                         <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Email address" />
//                         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                       </div>
//                       <div>
//                         <label className="block text-gray-600 text-sm font-medium mb-2">City</label>
//                         <input type="text" value={form.city} onChange={(e) => updateField("city", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Your city" />
//                       </div>
//                     </div>
//                     <div className="grid md:grid-cols-3 gap-6">
//                       <div>
//                         <label className="block text-gray-600 text-sm font-medium mb-2">Lift Type</label>
//                         <select value={form.liftType} onChange={(e) => updateField("liftType", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors">
//                           <option value="">Select type</option>
//                           <option value="passenger">Passenger</option>
//                           <option value="home">Home</option>
//                           <option value="capsule">Capsule</option>
//                           <option value="hospital">Hospital</option>
//                           <option value="goods">Goods</option>
//                           <option value="hydraulic">Hydraulic</option>
//                           <option value="mrl">MRL</option>
//                           <option value="freight">Freight</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-gray-600 text-sm font-medium mb-2">Building Type</label>
//                         <select value={form.buildingType} onChange={(e) => updateField("buildingType", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors">
//                           <option value="">Select type</option>
//                           <option value="residential">Residential</option>
//                           <option value="commercial">Commercial</option>
//                           <option value="hospital">Hospital</option>
//                           <option value="hotel">Hotel</option>
//                           <option value="industrial">Industrial</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-gray-600 text-sm font-medium mb-2">Floors</label>
//                         <input type="number" value={form.floors} onChange={(e) => updateField("floors", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="No. of floors" min="1" />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-gray-600 text-sm font-medium mb-2">Message</label>
//                       <textarea value={form.message} onChange={(e) => updateField("message", e.target.value)} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none" placeholder="Tell us about your requirements" />
//                     </div>
//                     <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-orange rounded-lg hover:bg-brand-orange-dark transition-all duration-300">
//                       <Send className="w-4 h-4" /> Submit Enquiry
//                     </button>
//                   </form>
//                 )}
//               </AnimatedSection>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/lib/data";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "",
    liftType: "", buildingType: "", floors: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      toast.success("Enquiry submitted! We'll get back to you within 24 hours.");
    }
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const panelItems = [
    { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: "Address", value: COMPANY.address, href: "#map" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 6PM", href: "#" },
  ];

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.address)}`;

  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005fa3] to-[#0077CC]" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Let's Connect</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Ready to elevate your project? Fill out the form below and our team will respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Map */}


      {/* Info + Form */}
      <section className="pt-8 sm:pt-16 md:pt-20 pb-14 sm:pb-20 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <AnimatedSection>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-2">
                {panelItems.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group flex items-center gap-3 sm:gap-4 px-3 py-3 sm:px-4 sm:py-4 rounded-lg hover:bg-brand-blue/5 transition-colors ${i !== panelItems.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                  >
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                      <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-blue group-hover:text-brand-orange transition-colors" />
                      <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-brand-orange/30 transition-all"></span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-gray-400 text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-gray-800 text-xs sm:text-sm font-semibold truncate">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 rounded-xl bg-brand-blue text-white p-5 sm:p-6">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange mb-2">Response Time</div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Every enquiry is reviewed by our team and answered within 24 hours, Monday through Saturday.
                </p>
              </div>
            </AnimatedSection>

            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="bg-white rounded-xl p-8 sm:p-10 md:p-12 text-center shadow-md border border-gray-100 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-orange"></div>
                      <CheckCircle2 className="w-14 h-14 sm:w-16 sm:h-16 text-brand-blue mx-auto mb-5 sm:mb-6" />
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Enquiry Submitted!</h3>
                      <p className="text-gray-500 text-sm sm:text-base mb-5 sm:mb-6">Thank you for your interest. Our team will contact you within 24 hours.</p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", city: "", liftType: "", buildingType: "", floors: "", message: "" }); }}
                        className="text-brand-blue text-sm font-bold hover:underline"
                      >
                        Submit Another Enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="bg-white rounded-xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6 shadow-md border border-gray-100 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-orange"></div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Tell us about your project</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Fields marked * are required.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        <div>
                          <label className="block text-gray-600 text-sm font-medium mb-2">Name *</label>
                          <input type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Your name" />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-gray-600 text-sm font-medium mb-2">Phone *</label>
                          <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Phone number" />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        <div>
                          <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                          <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Email address" />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-gray-600 text-sm font-medium mb-2">City</label>
                          <input type="text" value={form.city} onChange={(e) => updateField("city", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Your city" />
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-100">
                        <div className="text-gray-400 text-xs uppercase tracking-wider mb-4 pt-4">Project details</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                          <div>
                            <label className="block text-gray-600 text-sm font-medium mb-2">Lift Type</label>
                            <select value={form.liftType} onChange={(e) => updateField("liftType", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors">
                              <option value="">Select type</option>
                              <option value="passenger">Passenger</option>
                              <option value="home">Home</option>
                              <option value="capsule">Capsule</option>
                              <option value="hospital">Hospital</option>
                              <option value="goods">Goods</option>
                              <option value="hydraulic">Hydraulic</option>
                              <option value="mrl">MRL</option>
                              <option value="freight">Freight</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-gray-600 text-sm font-medium mb-2">Building Type</label>
                            <select value={form.buildingType} onChange={(e) => updateField("buildingType", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors">
                              <option value="">Select type</option>
                              <option value="residential">Residential</option>
                              <option value="commercial">Commercial</option>
                              <option value="hospital">Hospital</option>
                              <option value="hotel">Hotel</option>
                              <option value="industrial">Industrial</option>
                            </select>
                          </div>
                          <div className="sm:col-span-2 md:col-span-1">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Floors</label>
                            <input type="number" value={form.floors} onChange={(e) => updateField("floors", e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="No. of floors" min="1" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">Message</label>
                        <textarea value={form.message} onChange={(e) => updateField("message", e.target.value)} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none" placeholder="Tell us about your requirements" />
                      </div>

                      <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-white bg-brand-orange rounded-lg hover:bg-brand-orange-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20">
                        <Send className="w-4 h-4" /> Submit Enquiry
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      <section id="map" className="relative">
        <div className="h-[200px] xs:h-[240px] sm:h-[320px] md:h-[420px] w-full grayscale-[15%] contrast-[1.05]">
          <iframe
            title="Our location"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="container px-4 sm:px-6">
          <AnimatedSection>
            <div className="relative -mt-8 sm:-mt-16 md:-mt-20 z-10">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-3xl">
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-brand-blue" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-gray-400 text-[11px] sm:text-xs uppercase tracking-wider mb-1">Find us</div>
                    <div className="text-gray-800 text-xs sm:text-sm font-semibold leading-relaxed break-words">{COMPANY.address}</div>
                  </div>
                </div>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex sm:inline-flex items-center justify-center sm:justify-start gap-1.5 text-brand-blue text-xs sm:text-sm font-bold hover:gap-2.5 transition-all shrink-0 bg-brand-blue/5 sm:bg-transparent rounded-lg py-2.5 sm:py-0 px-4 sm:px-0"
                >
                  Get directions <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}