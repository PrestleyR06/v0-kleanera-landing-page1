"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"

const values = [
  "Professional, vetted cleaning teams",
  "Eco-friendly cleaning products",
  "Consistent quality standards",
  "Reliable and punctual service",
  "Tailored solutions for every property",
  "100% satisfaction guarantee",
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 relative bg-muted/30">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6277-ZcI3ep4wGvoLCN9LOl6XKAY8wLtPVm.MP4"
                alt="Kleanera cleaning service video"
                className="w-full h-full object-cover"
                controls
                loop
                muted
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Premium Property Care You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kleanera was founded with a simple mission: to elevate property standards through exceptional cleaning services. We understand that your property is more than just a space - it&apos;s an investment, a home for tenants, or a welcoming retreat for guests.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of trained professionals delivers consistent, high-quality results using industry-leading techniques and eco-friendly products. Whether you&apos;re a landlord, Airbnb host, property manager, or business owner, we tailor our services to meet your specific needs.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
