"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Image
                    src="/iconnobg.png"
                    alt="Eris Logo"
                    width={80}
                    height={80}
                    className="opacity-50"
                    draggable={false}
                  />
                  <AlertTriangle className="absolute -bottom-2 -right-2 w-8 h-8 text-red-500" />
                </div>
              </div>

              {/* Message */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Critical Error
              </h1>
              
              <p className="text-lg text-muted mb-8 max-w-md mx-auto">
                Something went seriously wrong. The application needs to restart.
              </p>

              {/* Action */}
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <span className="font-medium">Restart Application</span>
              </button>
            </motion.div>
          </div>
        </main>
      </body>
    </html>
  );
}