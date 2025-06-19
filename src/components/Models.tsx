"use client";

import { motion } from "framer-motion";
import { Cpu, Brain, Code, MessageSquare, ExternalLink, HardDrive } from "lucide-react";

const modelCategories = [
  {
    title: "General Purpose",
    icon: MessageSquare,
    models: [
      { 
        name: "Llama 3.2", 
        sizes: ["1B", "3B"], 
        description: "Meta's efficient language models",
        downloadSizes: { "1B": "0.7 GB", "3B": "2.1 GB" },
        hfLinks: {
          "1B": "https://huggingface.co/mlx-community/Llama-3.2-1B-Instruct-4bit",
          "3B": "https://huggingface.co/mlx-community/Llama-3.2-3B-Instruct-4bit"
        }
      },
      { 
        name: "Qwen 2.5", 
        sizes: ["0.5B", "1.5B", "3B"], 
        description: "Multilingual capabilities",
        downloadSizes: { "0.5B": "0.4 GB", "1.5B": "1.1 GB", "3B": "2.3 GB" },
        hfLinks: {
          "0.5B": "https://huggingface.co/mlx-community/Qwen2.5-0.5B-Instruct-4bit",
          "1.5B": "https://huggingface.co/mlx-community/Qwen2.5-1.5B-Instruct-4bit",
          "3B": "https://huggingface.co/mlx-community/Qwen2.5-3B-Instruct-4bit"
        }
      },
      { 
        name: "Mistral 7B", 
        sizes: ["7B"], 
        description: "Popular open-source model",
        downloadSizes: { "7B": "4.9 GB" },
        hfLinks: {
          "7B": "https://huggingface.co/mlx-community/Mistral-7B-Instruct-v0.3-4bit"
        }
      }
    ]
  },
  {
    title: "Reasoning",
    icon: Brain,
    models: [
      { 
        name: "DeepSeek R1", 
        sizes: ["1.5B"], 
        description: "Advanced reasoning in 4bit/8bit",
        downloadSizes: { "1.5B": "1.2 GB" },
        hfLinks: {
          "1.5B": "https://huggingface.co/mlx-community/DeepSeek-R1-Distill-Qwen-1.5B-4bit"
        }
      },
      { 
        name: "Phi 3.5 Mini", 
        sizes: ["3.8B"], 
        description: "Microsoft's compact powerhouse",
        downloadSizes: { "3.8B": "2.8 GB" },
        hfLinks: {
          "3.8B": "https://huggingface.co/mlx-community/Phi-3.5-mini-instruct-4bit"
        }
      }
    ]
  },
  {
    title: "Code Generation",
    icon: Code,
    models: [
      { 
        name: "CodeLlama", 
        sizes: ["7B"], 
        description: "Specialized for programming",
        downloadSizes: { "7B": "5.1 GB" },
        hfLinks: {
          "7B": "https://huggingface.co/mlx-community/CodeLlama-7b-Instruct-hf-4bit"
        }
      },
      { 
        name: "StableCode", 
        sizes: ["3B"], 
        description: "Efficient code generation",
        downloadSizes: { "3B": "2.2 GB" },
        hfLinks: {
          "3B": "https://huggingface.co/mlx-community/stable-code-instruct-3b-4bit"
        }
      }
    ]
  }
];

export default function Models() {
  return (
    <section id="models" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose your AI
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            From lightweight models for everyday chat to specialized ones for coding and reasoning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {modelCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-8 h-8" />
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.models.map((model, index) => {
                  // Get the first size's link as default
                  const defaultLink = model.hfLinks[model.sizes[0]];
                  
                  return (
                    <motion.a
                      key={model.name}
                      href={defaultLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      className="block border border-border rounded-lg p-4 hover:border-white/20 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium flex items-center gap-2">
                          {model.name}
                          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex gap-2">
                            {model.sizes.map(size => (
                              <span key={size} className="text-xs px-2 py-1 bg-background rounded border border-border">
                                {size}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs text-muted">
                            {Object.entries(model.downloadSizes).map(([size, downloadSize], idx) => (
                              <span key={size}>
                                {idx > 0 && " · "}
                                {downloadSize}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted">{model.description}</p>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted">
            All models are quantized to 4-bit or 8-bit for optimal performance on your device
          </p>
        </motion.div>
      </div>
    </section>
  );
}