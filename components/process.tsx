"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  MessageSquareQuote,
  CalendarDays,
  Sparkles,
  ClipboardCheck,
  Home,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquareQuote,
    title: "Request a Quote",
    description: "Contact us with your requirements.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Schedule Service",
    description: "Choose a convenient date and time.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Professional Cleaning",
    description: "Our team completes the work to premium standards.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Every project is reviewed and verified.",
  },
  {
    number: "05",
    icon: Home,
    title: "Property Ready",
    description: "Your property is clean, inspected and ready.",
  },
]

export function Process() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, Structured, Seamless
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A clear process from booking to completion.
          </p>
        </motion.div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 origin-left"
          />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-32 h-32 rounded-full bg-card border-2 border-primary/20 flex flex-col items-center justify-center shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300 group">
                    <span className="text-sm font-bold text-primary mb-1">{step.number}</span>
                    <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex gap-4 items-start"
            >
              {/* Step Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/20 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
