"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home, RefreshCw } from "lucide-react";

export default function Custom500() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/iconnobg.png"
              alt="Eris Logo"
              width={80}
              height={80}
              className="opacity-50"
              draggable={false}
            />
          </div>

          {/* Error Code */}
          <h1 className="text-8xl md:text-9xl font-bold mb-4 text-muted">500</h1>
          
          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Server Error
          </h2>
          
          <p className="text-lg text-muted mb-8 max-w-md mx-auto">
            Our servers are having a moment. Please try again in a few seconds.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Home size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg hover:border-white/20 transition-colors"
            >
              <RefreshCw size={20} />
              <span className="font-medium">Reload Page</span>
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}