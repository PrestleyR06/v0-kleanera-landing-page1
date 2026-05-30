"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Property Manager",
    rating: 5,
    review: "Kleanera has transformed how we manage property turnovers. Their attention to detail is exceptional, and the documented reports give our landlords complete peace of mind.",
  },
  {
    name: "James Thompson",
    role: "Airbnb Superhost",
    rating: 5,
    review: "As a Superhost, consistency is everything. Kleanera delivers flawless cleaning every single time, helping me maintain my 5-star rating effortlessly.",
  },
  {
    name: "Emma Roberts",
    role: "Landlord",
    rating: 5,
    review: "The end of tenancy cleaning service exceeded all expectations. The property was spotless and the photo documentation made the handover seamless.",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    rating: 5,
    review: "Our office has never looked better. The team is professional, punctual, and thorough. Highly recommend for any commercial space.",
  },
  {
    name: "Lisa Anderson",
    role: "Property Developer",
    rating: 5,
    review: "Working with Kleanera on multiple developments has been a pleasure. Their reliability and premium standards align perfectly with our brand.",
  },
  {
    name: "David Wilson",
    role: "Hotel Manager",
    rating: 5,
    review: "The deep cleaning service is outstanding. Kleanera understands the hospitality industry standards and consistently delivers excellence.",
  },
]

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Trusted by property owners and managers across the UK.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 6 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                >
                  <Card className="h-full border-border/50 bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                    <CardContent className="p-6 lg:p-8">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-foreground leading-relaxed mb-6">
                        &ldquo;{testimonial.review}&rdquo;
                      </p>

                      {/* Author */}
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={currentIndex === 0}
              className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
