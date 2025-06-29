"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { appData } from "@/lib/app-data";
import { FAQJsonLd } from "@/components/seo/FAQJsonLd";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQJsonLd />
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted">
              Everything you need to know about Eris
            </p>
          </motion.div>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {appData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="bg-surface border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4" itemProp="name">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div 
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                    className="px-6 pb-5"
                  >
                    <p className="text-muted leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}