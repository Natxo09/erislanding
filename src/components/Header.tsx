"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Github, Star } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch GitHub stars
  useEffect(() => {
    fetch("https://api.github.com/repos/Natxo09/Eris.")
      .then(res => res.json())
      .then(data => setStars(data.stargazers_count))
      .catch(() => setStars(null));
  }, []);

  const navItems = [
    { href: "/#features", label: "Features" },
    { href: "/#privacy", label: "Privacy" },
    { href: "/#models", label: "Models" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/changelog", label: "Changelog" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/iconnobg.png"
            alt="Eris Logo"
            width={48}
            height={48}
            className="rounded-lg select-none"
            draggable={false}
          />
          <span className="text-2xl font-bold">Eris.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted hover:text-foreground transition-colors text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/Natxo09/Eris."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <Github size={20} />
              {stars !== null && (
                <span className="flex items-center gap-1 text-sm">
                  <Star size={14} fill="currentColor" />
                  {stars}
                </span>
              )}
            </a>
            
            {/* App Store Button */}
            <a
              href="https://apps.apple.com/es/app/eris/id6747496749"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Image
                src="/apple-logo.svg"
                alt="Apple"
                width={20}
                height={20}
              />
              <span className="font-medium">App Store</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-surface border-t border-border"
        >
          <div className="container mx-auto px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted hover:text-foreground transition-colors block py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-4 items-center mt-4">
                <a
                  href="https://github.com/Natxo09/Eris."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <Github size={20} />
                  {stars !== null && (
                    <span className="flex items-center gap-1 text-sm">
                      <Star size={14} fill="currentColor" />
                      {stars}
                    </span>
                  )}
                </a>
                
                <a
                  href="https://apps.apple.com/es/app/eris/id6747496749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/apple-logo.svg"
                    alt="Apple"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium">App Store</span>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}