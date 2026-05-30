"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "End of Tenancy Cleaning",
    description: "Comprehensive cleaning to restore properties to pristine condition for new tenants.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Deep Cleaning",
    description: "Thorough sanitization and disinfection of every surface for a healthier environment.",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Airbnb Turnover",
    description: "Fast, reliable cleaning between guests to maintain your 5-star ratings.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Communal Cleaning",
    description: "Regular maintenance of shared spaces, hallways, and residential common areas.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  },
  {
    title: "Exterior Cleaning",
    description: "Professional outdoor property cleaning and maintenance services.",
    image: "/images/exterior-cleaning.jpg",
  },
  {
    title: "Carpet Cleaning",
    description: "Professional carpet extraction and deep cleaning to remove stains and odors.",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=2070&auto=format&fit=crop",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Professional cleaning solutions tailored to every property.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
