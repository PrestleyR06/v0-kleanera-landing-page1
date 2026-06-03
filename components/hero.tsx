"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const trustBadges = [
  { icon: Check, text: "Fully Insured" },
  { icon: Check, text: "Quality Controlled" },
  { icon: Check, text: "Reliable Team" },
]

export function Hero() {
  return (
    <section className="relative pt-20">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Hero Content */}
        <div className="pt-16 lg:pt-20 pb-10 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
          >
            Professional Cleaning Services You Can Rely On
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty"
          >
            Structured, premium and quality-controlled cleaning services for landlords, Airbnb hosts, property managers and businesses.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <badge.icon className="w-3 h-3 text-primary" />
                </div>
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg rounded-full font-medium shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <Link href="#quote">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero Image - Full width with overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 pb-0 -mx-6 lg:-mx-8"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image-W5AJiz9p3s3bP3khhUzhTE7Tv2y1n2.png"
              alt="Kleanera professional cleaning team with branded uniforms"
              className="w-full h-full object-cover"
            />
            
            {/* Soft Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
