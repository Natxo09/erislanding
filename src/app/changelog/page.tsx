"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
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
    version: "1.6.0",
    date: "2025-07-23",
    status: "released",
    categories: {
      added: [
        "QuickChatIntent for conversational AI interactions via Siri Shortcuts",
        "SummarizeTextIntent for text summarization via Siri Shortcuts",
        "TranslateTextIntent for multi-language translation via Siri Shortcuts",
        "GenerateTextIntent for creative text generation via Siri Shortcuts",
        "Siri integration for all shortcuts with voice activation",
        "Support for different response styles and tones in shortcuts",
        "Options to save/discard chats in all shortcuts",
        "Model selection parameter in shortcuts with clear examples",
        "isPinned property to Thread model for chat organization",
        "Pin/unpin action in context menu with 3 chat limit",
        "Visual pin indicator with 45-degree rotation animation",
        "Haptic feedback and limit alert when exceeding 3 pins",
        "DocumentationView with comprehensive sections for getting started, privacy, models, chat features, shortcuts, and tips",
        "Detail views for AI models, chat features, shortcuts, and tips",
        "Navigation to documentation from Settings",
        "Specific error types for unsupported model architectures and missing configurations",
        "Model validation before download attempts",
        "Detection for 'stablelm' type models which are not supported by MLX",
        "Explicit keyboard dismissal after sending message",
        "IntentError enum for proper error handling in shortcuts",
        "Device requirements and best practices documentation"
      ],
      changed: [
        "Simplify input area layout with cleaner design",
        "Move model selector to navigation bar as interactive button",
        "Increase text field and send button sizes for better usability",
        "Apply subtle gray background colors for both light/dark themes",
        "Add visual indicators (chevron) to show model selector is clickable",
        "Remove redundant UI elements for minimalist interface",
        "Display pinned chats at the top of the list",
        "Update error messages to be more descriptive and helpful",
        "Match app's design language with consistent row-based components in documentation",
        "Change default text type from email to paragraph in GenerateTextIntent",
        "Improve parameter descriptions with helpful examples in shortcuts",
        "Optimize performance with shared LLMEvaluator instance"
      ],
      fixed: [
        "CreditsView SafariView (thanks to Pavel Koupa for PR)",
        "Button content shape on ModelManagementView and SettingsView (thanks to Pavel Koupa for PR)",
        "Keyboard stays closed when AI finishes responding",
        "Compilation errors with proper error types and MainActor annotations",
        "Ambiguous ModelConfiguration references in shortcuts"
      ],
      removed: [
        "Mistral 7B model due to MLX compatibility issues",
        "CodeLlama 7B model due to MLX compatibility issues",
        "StableCode 3B model due to MLX compatibility issues"
      ],
      performance: [
        "Add rounded corners to input container background for smoother rendering",
        "Include smooth spring animations for pin state changes",
        "Register shortcuts provider in main app for better performance"
      ]
    }
  },
  {
    version: "1.5.0",
    date: "2025-06-22",
    status: "released",
    categories: {
      added: [
        "Device Model Display: Shows specific device model (e.g. 'iPhone 15 Pro') instead of generic 'iPhone'",
        "Report Bug or Request Feature Section with GitHub Issues link for bug reports",
        "Discord Community link for getting help and suggesting features",
        "Developer Mode toggle below Haptic Feedback in Preferences",
        "NetworkMonitor to detect WiFi vs cellular connections",
        "Retry logic with exponential backoff for download failures",
        "Clear error messages explaining MLX framework limitation on cellular",
        "Device model name mapping for all iPhone and iPad models",
        "ChipFamily raw values for proper device comparison"
      ],
      changed: [
        "Replace hardcoded version '1.0.0' with dynamic version from bundle",
        "Reduce MLX cache limit to 20MB during downloads for better stability",
        "UI to inform users that WiFi is required only for initial download",
        "Major refactoring: Create AIModels.swift as single source of truth for all model configurations",
        "Add model categories (General, Reasoning, Code) with proper organization",
        "Implement device-specific compatibility checking with RAM requirements",
        "Move download state management to ModelManager for persistence across views",
        "Improve UI/UX in model management with clearer information display",
        "Update all views to use centralized AIModelsRegistry"
      ],
      fixed: [
        "State conflict between Developer Mode toggle and About Developer button",
        "Download progress tracking when navigating between views",
        "Show/hide Developer section based on toggle state",
        "Prevent multiple simultaneous downloads with proper state management"
      ],
      removed: [
        "Redundant GitHub and Discord links from Information section",
        "DEBUG conditional compilation for developer features",
        "Obsolete ModelConfiguration+Extensions.swift"
      ],
      performance: [
        "Reduced code duplication across the codebase",
        "Improved maintainability with centralized model management",
        "Better user experience with more detailed model information",
        "More reliable download state management across views"
      ]
    }
  },
  {
    version: "1.4.0",
    date: "2025-06-22",
    status: "released",
    categories: {
      added: [
        "Dynamic GPU cache limits based on device capabilities",
        "Model compatibility system with visual indicators",
        "Warnings before downloading risky models",
        "Improved error messages for Metal compilation failures"
      ],
      changed: [
        "Sort models by device compatibility in UI",
        "Update documentation to reflect actual device requirements"
      ],
      removed: [
        "iPhone 11 base model support (only 4GB RAM causes crashes)",
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
        "Stop Generation Button to cancel text generation mid-stream",
        "Thread-safe CancellationToken class for cross-actor cancellation",
        "Scroll-to-Bottom floating button with smooth animations",
        "Memory warning handler to clear caches and reduce GPU memory",
        "Initialize MemoryManager on app startup for automatic memory handling",
        "Loading spinner when model is being loaded into memory",
        "Regex caching for syntax highlighting with NSCache",
        "Haptic feedback when pressing stop button",
        "Languages: Dart, Lua, Elixir, Clojure, Zig, Nim, Julia",
        "Enterprise languages: Groovy/Gradle, PowerShell, Visual Basic .NET",
        "Scientific languages: Fortran, MATLAB, R",
        "Legacy: Pascal/Delphi",
        "Web frameworks: Vue.js, React/JSX/TSX, Svelte, Angular",
        "Markup/Config: HTML, CSS, YAML, JSON, Markdown",
        "DevOps: Dockerfile, Terraform, GraphQL",
        "Mobile: Objective-C, Kotlin",
        "Blockchain: Solidity"
      ],
      changed: [
        "Reordered parser conditions to check lists before bold text",
        "Added processInlineMarkdown function to handle bold, italic and code formatting within list items",
        "Stop button color from blue to red for better visibility",
        "Improve auto-scroll behavior for new messages",
        "Differentiate between model loading and text generation states"
      ],
      fixed: [
        "Now correctly renders lists with inline markdown like '- **Title**: Content'",
        "Prevent stop action during model loading phase"
      ],
      performance: [
        "Reduced regex compilation overhead in code blocks",
        "Optimize code syntax highlighting with cached regex patterns",
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
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 20%", "end 80%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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

          <div className="relative" ref={timelineRef}>
            {/* Timeline bar background */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-border/30" />
            
            {/* Timeline bar progress */}
            <motion.div 
              className="absolute left-3 top-0 w-px bg-white/60"
              style={{ height: lineHeight }}
            />
            
            <div className="space-y-12">
              {changelogData.map((entry, index) => (
                <motion.div
                  key={entry.version}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3 w-4 h-4 rounded-full border-2 border-background -translate-x-1/2 ${
                    entry.status === "pending" ? "bg-yellow-400" : "bg-green-500"
                  }`} />
                {/* Version Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h2 className="text-3xl font-bold">v{entry.version}</h2>
                    {entry.status === "pending" ? (
                      <span className="px-3 py-1 text-sm font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full flex items-center gap-2 w-fit">
                        <Clock className="w-4 h-4" />
                        <span className="hidden sm:inline">Pending Review</span>
                        <span className="sm:hidden">Pending</span>
                      </span>
                    ) : (
                      <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-full w-fit">
                        Released
                      </span>
                    )}
                  </div>
                  <span className="text-muted text-sm sm:text-base">{entry.date}</span>
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

                </motion.div>
              ))}
            </div>
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