"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Smartphone, Download as DownloadIcon, Star } from "lucide-react";

export default function Download() {
  return (
    <section id="download" className="py-24 px-6 relative">
      {/* Dashed border at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
        <div className="border-t-2 border-dashed border-border"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start your private
              <br />
              AI journey
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
              No subscriptions. No cloud. No compromises.
              <br />
              Just powerful AI that respects your privacy.
            </p>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-black px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/apple-logo.svg"
                  alt="Apple"
                  width={28}
                  height={28}
                />
                <div className="text-left">
                  <p className="text-xs opacity-70">Download on the</p>
                  <p className="text-xl font-bold">App Store</p>
                </div>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-sm text-muted">5.0 Rating</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold mb-1">12+</p>
                <p className="text-sm text-muted">AI Models</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold mb-1">100%</p>
                <p className="text-sm text-muted">Private</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Minimal device showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-white/10 blur-3xl" />
                <Smartphone className="w-64 h-64 text-white/20" strokeWidth={1} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <DownloadIcon className="w-12 h-12 mb-2 mx-auto" />
                    <p className="text-sm font-medium">Available Now</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Requirements - minimal */}
            <div className="text-center mt-12">
              <p className="text-sm text-muted">
                iPhone XS or newer · iOS 17.6+ · 2-8GB per model
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}