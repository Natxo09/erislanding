"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Wrench,
  AlertCircle,
  Download,
  Smartphone,
  Code,
  Brain,
  Wifi,
  GitBranch,
  Clock
} from "lucide-react";

interface ChangelogEntry {
  version: string;
  date: string;
  status: "released" | "pending";
  categories: {
    added?: string[];
    changed?: string[];
    fixed?: string[];
    removed?: string[];
    performance?: string[];
  };
}

const changelogData: ChangelogEntry[] = [
  {
    version: "1.5.0",
    date: "Pending App Store Review",
    status: "pending",
    categories: {
      added: [
        "Device Model Display: Shows specific device model (e.g. 'iPhone 15 Pro')",
        "Report Bug or Request Feature Section with GitHub Issues and Discord links",
        "Developer Mode toggle in Preferences",
        "Network Monitoring with WiFi/cellular detection",
        "Download improvements with retry logic and better progress tracking"
      ],
      changed: [
        "Dynamic version from bundle instead of hardcoded '1.0.0'",
        "Reduced MLX cache limit to 20MB during downloads",
        "Major refactoring: AIModels.swift as single source of truth",
        "Model categories (General, Reasoning, Code) with proper organization",
        "Device-specific compatibility checking with RAM requirements"
      ],
      fixed: [
        "State conflict between Developer Mode toggle and About Developer button",
        "Download progress tracking when navigating between views"
      ],
      removed: [
        "Redundant GitHub and Discord links from Information section",
        "DEBUG conditional compilation for developer features",
        "Obsolete ModelConfiguration+Extensions.swift"
      ]
    }
  },
  {
    version: "1.4.0",
    date: "2025-06-21",
    status: "released",
    categories: {
      added: [
        "Model Compatibility System with visual indicators",
        "Dynamic GPU Cache Limits based on device capabilities",
        "Model Download Warnings before downloading risky models",
        "Improved Error Messages for Metal compilation failures"
      ],
      changed: [
        "Sort models by device compatibility in UI",
        "Updated documentation to reflect actual device requirements"
      ],
      removed: [
        "iPhone 11 base model support (4GB RAM causes crashes)",
        "Note: iPhone 11 Pro/Pro Max (6GB RAM) and SE 2nd gen remain supported"
      ]
    }
  },
  {
    version: "1.3.0",
    date: "2025-06-21",
    status: "released",
    categories: {
      added: [
        "Stop Generation Button with thread-safe cancellation",
        "Scroll-to-Bottom floating button with smooth animations",
        "Automatic memory management with MemoryManager",
        "Loading spinner when model is being loaded",
        "30+ new languages for syntax highlighting including Dart, Julia, Vue.js, Solidity"
      ],
      changed: [
        "Reordered parser conditions to check lists before bold text",
        "ProcessInlineMarkdown function for better list formatting"
      ],
      fixed: [
        "Lists with inline markdown now render correctly (e.g. '- **Title**: Content')"
      ],
      performance: [
        "Reduced regex compilation overhead in code blocks",
        "Optimized code syntax highlighting with cached regex patterns",
        "Better memory management under pressure",
        "More responsive UI with optimized scroll handling"
      ]
    }
  },
  {
    version: "1.0.0",
    date: "Initial Release",
    status: "released",
    categories: {
      added: [
        "On-device AI chat functionality",
        "Privacy-focused design with no data leaving your device",
        "Local model execution using MLX framework",
        "Multiple AI model support",
        "Dark mode interface"
      ]
    }
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "added":
      return <Sparkles className="w-5 h-5" />;
    case "changed":
      return <Wrench className="w-5 h-5" />;
    case "fixed":
      return <Shield className="w-5 h-5" />;
    case "removed":
      return <AlertCircle className="w-5 h-5" />;
    case "performance":
      return <Zap className="w-5 h-5" />;
    default:
      return null;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "added":
      return "text-green-400";
    case "changed":
      return "text-blue-400";
    case "fixed":
      return "text-orange-400";
    case "removed":
      return "text-red-400";
    case "performance":
      return "text-purple-400";
    default:
      return "text-muted";
  }
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-8 h-8" />
              <h1 className="text-5xl md:text-6xl font-bold">Changelog</h1>
            </div>
            <p className="text-xl text-muted">
              Track the evolution of Eris. with detailed release notes
            </p>
          </motion.div>

          <div className="space-y-12">
            {changelogData.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Version Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold">v{entry.version}</h2>
                    {entry.status === "pending" && (
                      <span className="px-3 py-1 text-sm font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Pending Review
                      </span>
                    )}
                  </div>
                  <span className="text-muted">{entry.date}</span>
                </div>

                {/* Categories */}
                <div className="space-y-6">
                  {Object.entries(entry.categories).map(([category, items]) => (
                    <div key={category} className="group">
                      <div className={`flex items-center gap-2 mb-3 ${getCategoryColor(category)}`}>
                        {getCategoryIcon(category)}
                        <h3 className="text-lg font-semibold capitalize">{category}</h3>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="text-muted group-hover:text-foreground transition-colors"
                          >
                            <span className="inline-block w-1.5 h-1.5 bg-muted rounded-full mr-3" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                {index < changelogData.length - 1 && (
                  <div className="mt-12 border-b border-border" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-24 p-8 bg-surface border border-border rounded-2xl text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted mb-6">
              Join our Discord community to get notified about new releases and share feedback
            </p>
            <a
              href="https://discord.gg/nr2qpfzCsd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              <Image
                src="/discord-logo.svg"
                alt="Discord"
                width={20}
                height={20}
              />
              Join Discord
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}