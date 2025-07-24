export const appData = {
  // App Information
  name: "Eris",
  tagline: "Private AI Chat for iPhone and iPad",
  description: "Run powerful AI models entirely on-device. No cloud, no subscriptions, just pure privacy. Experience AI the way it should be - yours alone.",
  
  // App Type for Schema.org
  schemaType: "MobileApplication" as const,
  applicationCategory: "Productivity",
  applicationSubCategory: "Artificial Intelligence",
  
  // Developer Information
  developer: {
    name: "Ignacio Palacio",
    url: "https://natxo.dev",
    type: "Person"
  },
  
  // Platform Information
  operatingSystem: "iOS 17.6 or later",
  platforms: ["iPhone", "iPad", "macOS (Coming Soon)"],
  
  // App Features
  features: [
    "100% on-device processing",
    "No internet required",
    "10+ AI models",
    "Complete privacy",
    "No subscriptions",
    "Open source"
  ],
  
  // Keywords for SEO
  keywords: [
    "private AI chat",
    "offline AI",
    "on-device AI",
    "MLX framework",
    "local AI models",
    "privacy-focused AI",
    "iPhone AI app",
    "iPad AI app",
    "no cloud AI",
    "secure AI assistant"
  ],
  
  // AI Models Available
  models: [
    {
      name: "Llama 3.2",
      variants: ["1B", "3B"],
      description: "Latest Llama model optimized for mobile"
    },
    {
      name: "Qwen 2.5", 
      variants: ["0.5B", "1.5B", "3B"],
      description: "Efficient multilingual model"
    },
    {
      name: "Qwen 2.5 Coder",
      variants: ["1.5B"],
      description: "Specialized for programming tasks"
    },
    {
      name: "DeepSeek R1",
      variants: ["1.5B"],
      description: "Advanced reasoning capabilities"
    },
    {
      name: "Phi 3.5 Mini",
      variants: ["3.8B"],
      description: "Microsoft's compact powerhouse"
    },
    {
      name: "Gemma",
      variants: ["2B", "7B"],
      description: "Google's efficient language model"
    },
    {
      name: "SmolLM",
      variants: ["135M", "360M", "1.7B"],
      description: "Ultra-lightweight models"
    }
  ],
  
  // App Store Information
  appStore: {
    url: "https://apps.apple.com/es/app/eris/id6747496749",
    id: "6747496749",
    bundleId: "com.natxo.Eris"
  },
  
  // GitHub Repository
  github: {
    url: "https://github.com/Natxo09/Eris.",
    stars: 100 // Update dynamically
  },
  
  // Social Links
  socialProfiles: [
    "https://github.com/Natxo09/Eris.",
    "https://twitter.com/natxo09",
    "https://discord.gg/nr2qpfzCsd"
  ],
  
  // Ratings
  aggregateRating: {
    ratingValue: 5.0,
    reviewCount: 10 // Update with actual reviews
  },
  
  // Privacy & Security
  privacy: {
    dataCollection: "No data collection",
    internetRequired: false,
    tracking: false,
    analytics: "Privacy-preserving analytics only",
    encryption: "On-device encryption"
  },
  
  // Technical Requirements
  requirements: {
    minRAM: "6GB required",
    minStorage: "2-8GB per model",
    devices: ["iPhone 11 Pro or newer", "iPad with A14 chip or newer"]
  },
  
  // Pricing
  offers: {
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  },
  
  // Important URLs
  urls: {
    landing: "https://erislanding.com",
    privacy: "/privacy",
    terms: "/terms",
    roadmap: "/roadmap",
    changelog: "/changelog"
  },
  
  // FAQ Data
  faqs: [
    {
      question: "Is Eris really 100% private?",
      answer: "Yes! Eris runs entirely on your device using Apple's MLX framework. No data is sent to any servers, no analytics, no tracking - everything stays on your iPhone or iPad. The app is also open source for complete transparency."
    },
    {
      question: "Do I need an internet connection?",
      answer: "You only need WiFi to initially download AI models (2-8GB per model). Once downloaded, Eris works completely offline forever. No internet required for chatting!"
    },
    {
      question: "Which devices are supported?",
      answer: "Eris requires iOS 17.6+ and devices with at least 6GB RAM. This includes iPhone 11 Pro or newer, and iPads with A14 chip or newer. Note: iPhone 11 base model (4GB RAM) is not supported."
    },
    {
      question: "How much does Eris cost?",
      answer: "Eris is completely FREE! No cost to download, no subscriptions, no in-app purchases, no ads. Download it once from the App Store and use it forever at zero cost."
    },
    {
      question: "How does it compare to ChatGPT or Claude?",
      answer: "While cloud services offer larger models, Eris provides complete privacy, works offline, and has zero ongoing costs. Perfect for users who value privacy and don't want monthly subscriptions."
    },
    {
      question: "What AI models are available?",
      answer: "Eris offers 10+ models including Llama 3.2, Qwen 2.5, DeepSeek R1 for reasoning, and Qwen 2.5 Coder for programming. Models range from 0.4GB to 5GB in size."
    },
    {
      question: "How much storage do I need?",
      answer: "Each model requires 2-8GB of storage. You can download multiple models and switch between them. The app itself is small, most space is used by the AI models you choose."
    },
    {
      question: "Can I contribute or report issues?",
      answer: "Yes! Eris is open source. You can contribute on GitHub, report issues, or join our Discord community. We actively maintain the app with regular updates."
    }
  ]
} as const;