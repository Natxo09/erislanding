"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, AlertCircle, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roadmapItems = [
  {
    category: "Bug Fixes",
    icon: AlertCircle,
    items: [
      {
        title: "Chat name persistence",
        description: "Chat name only applies after exiting and re-entering the chat",
        status: "completed"
      },
      {
        title: "Markdown formatting",
        description: "Improve Markdown formatting for AI responses",
        status: "completed"
      },
      {
        title: "Model testing across devices",
        description: "Continue testing all AI models on different devices and platforms for optimal performance",
        status: "in-progress"
      }
    ]
  },
  {
    category: "Upcoming Features",
    icon: Sparkles,
    items: [
      {
        title: "Shortcuts & Siri integration",
        description: "Full integration with Apple Shortcuts (Quick Chat, Summarize, Translate, Generate) and Siri voice activation",
        status: "completed"
      },
      {
        title: "Native macOS app",
        description: "Dedicated macOS app (not iPad port)",
        status: "in-progress"
      },
      {
        title: "Voice input support",
        description: "Voice input/dictation with OpenAI Whisper or similar",
        status: "planned"
      },
      {
        title: "Image support",
        description: "Support for images in conversations",
        status: "planned"
      },
      {
        title: "File support",
        description: "Support for various file types including PDF, documents, and more",
        status: "planned"
      }
    ]
  }
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Roadmap</h1>
            <p className="text-xl text-muted">
              See what we're working on and what's coming next
            </p>
          </motion.div>

          <div className="space-y-12">
            {roadmapItems.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-white" />
                  <h2 className="text-2xl font-semibold">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                      className="bg-surface border border-border rounded-lg p-6 hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          {item.status === "completed" ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : item.status === "in-progress" ? (
                            <Circle className="w-5 h-5 text-yellow-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                          <p className="text-muted">{item.description}</p>
                        </div>
                        <div className="text-sm text-muted">
                          {item.status === "completed" ? "Completed" : 
                           item.status === "in-progress" ? "In Progress" : "Planned"}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-muted mb-4">
              Have a feature request or found a bug?
            </p>
            <a
              href="https://github.com/Natxo09/Eris./issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-muted transition-colors"
            >
              Report on GitHub →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}