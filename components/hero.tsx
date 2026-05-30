"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Building2, Users, Repeat, ClipboardCheck } from "lucide-react"

const trustBadges = [
  { icon: Check, text: "Fully Insured" },
  { icon: Check, text: "Quality Controlled" },
  { icon: Check, text: "Reliable Team" },
]

const stats = [
  { icon: Building2, value: 2500, suffix: "+", label: "Properties Serviced" },
  { icon: Users, value: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: Repeat, value: 85, suffix: "%", label: "Repeat Customers" },
  { icon: ClipboardCheck, value: 5000, suffix: "+", label: "Projects Completed" },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Hero Content */}
        <div className="pt-16 lg:pt-24 pb-12 text-center max-w-4xl mx-auto">
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
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Structured, premium and quality-controlled cleaning services for landlords, Airbnb hosts, property managers and businesses.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm md:text-base text-foreground/80"
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
            className="mt-10"
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

        {/* Hero Image with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative mt-8"
        >
          {/* Main Image Container */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
              alt="Professional cleaner cleaning a modern office space"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Floating Stats Cards */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-4 left-4 md:top-8 md:left-8 pointer-events-auto"
            >
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-4 md:p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stats[0].icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-foreground">
                      <AnimatedCounter value={stats[0].value} suffix={stats[0].suffix} />
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stats[0].label}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 pointer-events-auto"
            >
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-4 md:p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stats[1].icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-foreground">
                      <AnimatedCounter value={stats[1].value} suffix={stats[1].suffix} />
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stats[1].label}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute bottom-4 left-4 md:bottom-8 md:left-8 pointer-events-auto"
            >
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-4 md:p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stats[2].icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-foreground">
                      <AnimatedCounter value={stats[2].value} suffix={stats[2].suffix} />
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stats[2].label}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 pointer-events-auto"
            >
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-4 md:p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stats[3].icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-foreground">
                      <AnimatedCounter value={stats[3].value} suffix={stats[3].suffix} />
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stats[3].label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
