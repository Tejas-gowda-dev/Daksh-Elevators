"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  liftType: string;
  buildingType: string;
  floors: string;
  message: string;
};

type ErrorState = {
  name?: string;
  phone?: string;
};

export default function AutoPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    liftType: "",
    buildingType: "",
    floors: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorState>({});

  // 🔥 AUTO POPUP LOGIC
  useEffect(() => {
    // Check if user already closed the popup in this session
    const hasSeenPopup = sessionStorage.getItem("popupSeen");

    if (hasSeenPopup) return;

    // Show popup after 2 seconds (gives page time to load)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 🔒 Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ❌ Close popup
  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("popupSeen", "true");
  };

  // 🔄 Don't show again today
  const handleDontShowAgain = () => {
    setIsOpen(false);
    localStorage.setItem("popupDismissed", Date.now().toString());
  };

  // 📝 Update form field
  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ErrorState]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // ✅ Validate
  const validate = (): boolean => {
    const newErrors: ErrorState = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    try {
      // 👉 Replace with your API endpoint
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        sessionStorage.setItem("popupSeen", "true");

        // Auto close after success message
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setForm({
            name: "",
            phone: "",
            liftType: "",
            buildingType: "",
            floors: "",
            message: "",
          });
        }, 2500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        //   className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
        >
          {/* Click outside to close - stop propagation inside */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            // className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl"
            className="relative w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl"
          >
            {/* ❌ Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close popup"
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              // ✅ SUCCESS STATE
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                // className="p-8 sm:p-12 text-center"
                  className="p-6 sm:p-8 md:p-12 text-center"

              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You! 🎉
                </h3>
                <p className="text-gray-600">
                  Your enquiry has been submitted. We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              // 📋 FORM
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                // className="bg-white rounded-xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6 relative overflow-hidden"
                  className="bg-white rounded-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 relative overflow-hidden"

              >
                {/* <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-orange" /> */}
                <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-brand-blue to-brand-orange" />


                <div>
                  {/* <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1"> */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">

                    Tell us about your project
                  </h3>
                </div>

                {/* NAME + PHONE */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5 md:gap-6">

                  <div>
                    {/* <label className="block text-gray-600 text-sm font-medium mb-2"> */}
                    <label className="block text-gray-600 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">

                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    //   className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"

                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-600 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                      placeholder="Phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-2 pt-2">
                    Project details
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6">
                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-1.5 sm:mb-2">
                        Lift Type
                      </label>
                      <select
                        value={form.liftType}
                        onChange={(e) => updateField("liftType", e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                      >
                        <option value="">Select type</option>
                        <option value="Passenger">Passenger</option>
                        <option value="Home">Home</option>
                        <option value="Capsule">Capsule</option>
                        <option value="Hospital">Hospital</option>
                        <option value="Goods">Goods</option>
                        <option value="Hydraulic">Hydraulic</option>
                        {/* <option value="MRL">MRL</option> */}
                        {/* <option value="Freight">Freight</option> */}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        Building Type
                      </label>
                      <select
                        value={form.buildingType}
                        onChange={(e) => updateField("buildingType", e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                      >
                        <option value="">Select type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Hospital">Hospital</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Industrial">Industrial</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2 md:col-span-1">
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        Floors
                      </label>
                      <input
                        type="number"
                        value={form.floors}
                        onChange={(e) => updateField("floors", e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                        placeholder="No. of floors"
                        min="1"
                      />
                    </div>
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 sm:px-4 sm:py-3 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                    placeholder="Tell us about your requirements"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={sending}
                //   className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-white bg-brand-orange rounded-lg hover:bg-brand-orange-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm font-bold text-white bg-brand-orange rounded-lg hover:bg-brand-orange-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20 disabled:opacity-60 disabled:cursor-not-allowed"

                >
                  <Send className="w-4 h-4" />
                  {sending ? "Sending..." : "Submit Enquiry"}
                </button>

                {/* DON'T SHOW AGAIN */}
                <button
                  type="button"
                  onClick={handleDontShowAgain}
                  className="w-full text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Don't show this again
                </button>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
