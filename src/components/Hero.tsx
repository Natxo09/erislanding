"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Wifi, Zap } from "lucide-react";

export default function Hero() {
  const badges = [
    { icon: Shield, text: "100% Private" },
    { icon: Wifi, text: "No Cloud" },
    { icon: Zap, text: "iOS 17.6+" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Private AI
              <br />
              <span className="text-muted">Chat</span>
            </h1>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              Your conversations. Your device. Your privacy.
              <br />
              Experience AI that respects your data.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border"
                >
                  <badge.icon size={16} />
                  <span className="text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/apple-logo.svg"
                  alt="Apple"
                  width={20}
                  height={20}
                />
                <span className="font-medium">Download on App Store</span>
              </a>
            </motion.div>
          </motion.div>

          {/* iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[300px] lg:max-w-[400px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full" />
              
              {/* iPhone Frame */}
              <div className="relative bg-surface rounded-[3rem] p-3 border border-border">
                <div className="bg-black rounded-[2.5rem] p-2">
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-full z-10" />
                  
                  {/* Screen */}
                  <div className="relative aspect-[9/19.5] rounded-[2.3rem] overflow-hidden bg-background">
                    <Image
                      src="/app-screenshot.png"
                      alt="Eris App Screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}