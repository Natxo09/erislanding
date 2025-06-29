"use client";

import { motion } from "framer-motion";
import { Monitor, Sparkles, Cpu, Shield, Zap, Lock, Command, Gauge } from "lucide-react";

export default function MacOS() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Native macOS App
            <span className="text-muted block text-2xl md:text-3xl mt-2">
              Coming Soon
            </span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Experience Eris on your Mac with a dedicated desktop application designed for power users
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <div className="relative z-10 max-w-5xl mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl shadow-2xl w-full"
            >
              <source src="/erismac.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Decorative blur */}
          <div className="absolute inset-0 bg-white/5 blur-3xl -z-10 transform scale-95" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {/* Large feature - Native Performance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-2 bg-surface border border-border rounded-2xl p-8 hover:border-white/20 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center group-hover:bg-white/5 transition-colors">
                <Cpu className="w-7 h-7" />
              </div>
              <span className="text-xs text-muted uppercase tracking-wider">Performance</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Built for Apple Silicon</h3>
            <p className="text-muted">Optimized for M1, M2, and M3 chips. Experience blazing fast AI responses with hardware acceleration.</p>
          </motion.div>

          {/* Medium feature - Privacy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-2 md:col-span-1 bg-surface border border-border rounded-2xl p-6 hover:border-white/20 transition-colors group"
          >
            <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/5 transition-colors">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-1">100% Private</h3>
            <p className="text-sm text-muted">No cloud, no tracking. Everything stays on your Mac.</p>
          </motion.div>

          {/* Medium feature - Speed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-2 md:col-span-1 bg-surface border border-border rounded-2xl p-6 hover:border-white/20 transition-colors group"
          >
            <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/5 transition-colors">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Instant Response</h3>
            <p className="text-sm text-muted">Zero latency. No waiting for network requests.</p>
          </motion.div>

          {/* Small features row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-white/20 transition-colors group"
          >
            <Monitor className="w-8 h-8 mb-3" />
            <h3 className="text-sm font-semibold">Desktop UI</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-white/20 transition-colors group"
          >
            <Command className="w-8 h-8 mb-3" />
            <h3 className="text-sm font-semibold">Shortcuts</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-white/20 transition-colors group"
          >
            <Lock className="w-8 h-8 mb-3" />
            <h3 className="text-sm font-semibold">Secure</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-white/20 transition-colors group"
          >
            <Sparkles className="w-8 h-8 mb-3" />
            <h3 className="text-sm font-semibold">Native</h3>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Early Access Coming Q2 2025</span>
          </div>
          
          <p className="text-muted mb-6">
            Want to be notified when the macOS app launches?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/Natxo09/Eris."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface border border-border hover:border-white/20 transition-colors px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2"
            >
              Watch on GitHub
              <span className="text-muted">→</span>
            </a>
            <a
              href="#download"
              className="bg-foreground text-background hover:opacity-90 transition-opacity px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2"
            >
              Get iOS App Now
              <span className="opacity-70">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}