"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Globe } from "lucide-react";
import DiscordIcon from "./icons/DiscordIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Features", href: "/#features" },
      { label: "Models", href: "/#models" },
      { label: "Privacy", href: "/#privacy" },
      { label: "Download", href: "/#download" },
      { label: "Roadmap", href: "/roadmap" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" }
    ],
    developer: [
      { label: "GitHub", href: "https://github.com/Natxo09/Eris.", icon: Github },
      { label: "Discord", href: "https://discord.gg/nr2qpfzCsd", icon: DiscordIcon },
      { label: "Portfolio", href: "https://natxo.dev", icon: Globe },
      { label: "Contact", href: "mailto:contact@northernbytes.dev", icon: Mail }
    ]
  };

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/iconnobg.png"
                alt="Eris Logo"
                width={32}
                height={32}
                className="rounded-lg select-none"
                draggable={false}
              />
              <span className="text-xl font-bold">Eris.</span>
            </div>
            <p className="text-sm text-muted">
              Private AI chat for iPhone and iPad.
              Your conversations, your device.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map(link => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <h3 className="font-semibold mb-4">Developer</h3>
            <ul className="space-y-2">
              {links.developer.map(link => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.icon && <link.icon size={14} />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Ignacio Palacio. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Made with ❤️ in Spain
          </p>
        </div>
      </div>
    </footer>
  );
}