"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What areas do you cover?",
    answer: "We provide cleaning services across London and surrounding areas. Contact us to confirm coverage for your specific location.",
  },
  {
    question: "Do you provide cleaning supplies?",
    answer: "Yes, we bring all necessary professional-grade cleaning supplies and equipment. We use eco-friendly products upon request.",
  },
  {
    question: "Are your cleaners insured?",
    answer: "Absolutely. All our cleaning professionals are fully insured and vetted. We carry comprehensive public liability insurance for your peace of mind.",
  },
  {
    question: "How do I request a quote?",
    answer: "Simply click the 'Get a Quote' button on our website or contact us via WhatsApp. We'll respond within 24 hours with a detailed quote.",
  },
  {
    question: "Do you clean Airbnb properties?",
    answer: "Yes, we specialize in Airbnb and short-term rental turnovers. We offer flexible scheduling to accommodate guest check-in/check-out times.",
  },
  {
    question: "Do you offer deep cleaning?",
    answer: "Yes, our deep cleaning service covers comprehensive sanitization of all surfaces, appliances, and hard-to-reach areas for a thorough clean.",
  },
  {
    question: "How quickly can I book?",
    answer: "We can often accommodate same-day or next-day bookings depending on availability. For guaranteed slots, we recommend booking 48-72 hours in advance.",
  },
  {
    question: "Do you provide end of tenancy cleaning?",
    answer: "Yes, our end of tenancy cleaning meets professional standards required by landlords and letting agents, helping ensure deposit returns.",
  },
  {
    question: "Can I schedule recurring cleaning?",
    answer: "Absolutely. We offer weekly, bi-weekly, and monthly cleaning packages with preferential rates for regular clients.",
  },
  {
    question: "Do you clean offices?",
    answer: "Yes, we provide commercial cleaning for offices, retail spaces, and other business premises. We can work outside business hours to minimize disruption.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit/debit cards, and major digital payment methods. Payment is due upon completion of service.",
  },
  {
    question: "Do you provide quality inspections?",
    answer: "Yes, every cleaning project includes a quality inspection. We provide photo documentation and reports for complete transparency.",
  },
  {
    question: "Do you offer carpet cleaning?",
    answer: "Yes, we offer professional carpet cleaning using industrial extraction equipment to remove deep-seated dirt, stains, and odors.",
  },
  {
    question: "Can I reschedule my booking?",
    answer: "Yes, you can reschedule with at least 24 hours notice at no additional charge. Last-minute changes may incur a small fee.",
  },
  {
    question: "How long does a cleaning take?",
    answer: "Duration depends on the property size and service type. A standard clean typically takes 2-4 hours, while deep cleaning may take 4-8 hours.",
  },
]

export function FAQ() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-28 relative bg-muted/30">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about our services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
