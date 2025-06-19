"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  WifiOff, 
  Cpu, 
  Zap, 
  DollarSign, 
  Moon,
  Sun,
  Brain,
  Code2,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Private",
    description: "Your conversations never leave your device. No cloud servers, no data collection."
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description: "Chat with AI anywhere, anytime. No internet connection required after setup."
  },
  {
    icon: Cpu,
    title: "Powered by MLX",
    description: "Optimized for Apple Silicon. Experience blazing fast AI responses."
  },
  {
    icon: Brain,
    title: "Multiple Models",
    description: "Choose from Llama, Qwen, DeepSeek, and more specialized models."
  },
  {
    icon: Code2,
    title: "Syntax Highlighting",
    description: "Beautiful code blocks with syntax highlighting for 100+ languages."
  },
  {
    icon: FileText,
    title: "Markdown Support",
    description: "Full markdown rendering for formatted text, lists, tables, and more."
  },
  {
    icon: DollarSign,
    title: "No Subscription",
    description: "Download once, use forever. No monthly fees or hidden costs."
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Beautiful dark interface that's easy on your eyes, day or night."
  },
  {
    icon: Sun,
    title: "Light Mode",
    description: "Clean and bright interface for comfortable daytime use."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need,
            <br />
            <span className="text-muted">nothing you don't</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Eris delivers powerful AI capabilities while respecting your privacy and device resources.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-colors" />
              <div className="relative bg-surface border border-border rounded-2xl p-8 hover:border-white/20 transition-colors h-full flex flex-col">
                <feature.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}