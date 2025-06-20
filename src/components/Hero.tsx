"use client";

import { motion } from "framer-motion";
import { Shield, Wifi, Zap, Github, Star } from "lucide-react";
import Image from "next/image";

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
              className="flex flex-wrap gap-4"
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
              
              <a
                href="https://github.com/Natxo09/Eris."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface border border-border px-6 py-3 rounded-lg hover:bg-surface/80 transition-colors"
              >
                <Github size={20} />
                <span className="font-medium">Star on GitHub</span>
                <Star size={16} className="text-muted" />
              </a>
            </motion.div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[350px] lg:max-w-[450px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
              >
                <source src="/video1.mp4" type="video/mp4" />
                <source src="/video1.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}