"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if disclaimer was already dismissed
    const dismissed = localStorage.getItem("disclaimerDismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("disclaimerDismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 right-4 left-4 md:left-auto md:right-6 md:bottom-6 z-50 max-w-md"
        >
          <div className="bg-surface border border-border rounded-lg p-4 md:p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-muted mt-0.5 flex-shrink-0" size={20} />
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-1">App Pending Approval</h3>
                <p className="text-sm text-muted">
                  Eris is currently under review by Apple. We'll notify you as soon as it's available!
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="text-muted hover:text-foreground transition-colors ml-2"
                aria-label="Dismiss notification"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}