"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Eye, Cloud, Database, UserX } from "lucide-react";

const privacyFeatures = [
  {
    icon: Lock,
    title: "End-to-End Privacy",
    description: "All processing happens on your device. Your data never touches our servers because we don't have any."
  },
  {
    icon: Cloud,
    title: "No Cloud Required",
    description: "Unlike ChatGPT or Claude, Eris runs entirely offline. Your conversations stay on your phone."
  },
  {
    icon: Database,
    title: "Local Storage Only",
    description: "Conversations are stored using SwiftData on your device. You have full control over your data."
  },
  {
    icon: UserX,
    title: "No User Tracking",
    description: "We don't track you. No analytics, no telemetry, no cookies. Just pure privacy."
  },
  {
    icon: Eye,
    title: "No One's Watching",
    description: "Not even us. The app is designed to work without any external connections."
  },
  {
    icon: ShieldCheck,
    title: "Complete Control",
    description: "Delete everything anytime. Your device, your data, your choice."
  }
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy isn't a feature.
            <br />
            <span className="text-muted">It's the foundation.</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            In a world of cloud-based AI, Eris stands alone. Your conversations are yours alone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-surface rounded-2xl border border-border max-w-3xl mx-auto text-center"
        >
          <Lock className="w-12 h-12 mx-auto mb-4 text-muted" />
          <h3 className="text-2xl font-semibold mb-3">Open Source Transparency</h3>
          <p className="text-muted mb-6">
            Don't just take our word for it. Eris is open source. 
            <br />
            Review the code, build it yourself, and verify our privacy claims.
          </p>
          <a
            href="https://github.com/Natxo09/Eris."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-muted transition-colors"
          >
            View Source Code →
          </a>
        </motion.div>
      </div>
    </section>
  );
}