import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
          "Hello Daksh Elevators, I would like to know more about your elevator services."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
      <motion.a
        href={`tel:${COMPANY.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 transition-shadow"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
