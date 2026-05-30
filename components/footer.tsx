"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/kleanera-logo.png"
                alt="Kleanera Logo"
                width={160}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Elevating Property Standards
            </p>
            <p className="text-primary-foreground/60 text-sm mt-4 leading-relaxed">
              Premium professional cleaning services for landlords, Airbnb hosts, property managers and businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-primary-foreground/70 text-sm">End of Tenancy Cleaning</span>
              </li>
              <li>
                <span className="text-primary-foreground/70 text-sm">Deep Cleaning</span>
              </li>
              <li>
                <span className="text-primary-foreground/70 text-sm">Airbnb Turnover</span>
              </li>
              <li>
                <span className="text-primary-foreground/70 text-sm">Communal Cleaning</span>
              </li>
              <li>
                <span className="text-primary-foreground/70 text-sm">Carpet Cleaning</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://wa.me/447310471562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +44 7310 471562
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@kleanera.co.uk"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@kleanera.co.uk
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>London, United Kingdom</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {currentYear} Kleanera. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-primary-foreground/60 hover:text-primary transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/60 hover:text-primary transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
