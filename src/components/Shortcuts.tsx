"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Languages, PenTool, Zap, Smartphone } from "lucide-react";

const shortcuts = [
  {
    icon: MessageSquare,
    title: "Quick Chat",
    description: "Start AI conversations instantly",
    example: '"Hey Siri, chat with Eris"',
    features: ["Multiple response styles", "Continuous conversation", "Save chat history"]
  },
  {
    icon: FileText,
    title: "Summarize Text",
    description: "Get instant summaries of any text",
    example: '"Hey Siri, summarize text with Eris"',
    features: ["Brief, medium, or detailed", "Save summaries", "Works with any text"]
  },
  {
    icon: Languages,
    title: "Translate",
    description: "Translate between 13 languages",
    example: '"Hey Siri, translate with Eris"',
    features: ["Auto-detect language", "13 languages supported", "Save translations"]
  },
  {
    icon: PenTool,
    title: "Generate Text",
    description: "Create emails, posts, and more",
    example: '"Hey Siri, generate text with Eris"',
    features: ["6 writing tones", "Multiple text types", "Professional results"]
  }
];

export default function Shortcuts() {
  return (
    <section id="shortcuts" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            iOS Shortcuts Integration
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Access Eris AI through Siri, widgets, and automation. Works seamlessly with your iPhone workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shortcuts.map((shortcut, index) => (
            <motion.div
              key={shortcut.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-colors" />
              <div className="relative bg-surface border border-border rounded-2xl p-6 hover:border-white/20 transition-colors h-full flex flex-col">
                <shortcut.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">{shortcut.title}</h3>
                <p className="text-muted mb-4">{shortcut.description}</p>
                
                <div className="mb-4 flex-grow">
                  <ul className="space-y-1">
                    {shortcut.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted flex items-start">
                        <span className="inline-block w-1 h-1 bg-muted rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                  <p className="text-xs font-mono text-muted">{shortcut.example}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm">Add to Siri</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Home Screen Widgets</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">Automation Support</span>
            </div>
          </div>
          <p className="text-muted text-sm">
            Choose any AI model for each shortcut
          </p>
        </motion.div>
      </div>
    </section>
  );
}