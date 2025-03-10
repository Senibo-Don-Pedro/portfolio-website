"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I am a versatile and results-driven professional with a Bachelor's degree in Computer Engineering,
              specializing in both full-stack web development and workflow automation.
            </p>

            <p>
              In my role as a Software Engineer, I design and develop scalable web applications using technologies like
              Next.js and Express.js, focusing on creating secure, responsive, and high-performance solutions that
              enhance user experience and operational efficiency.
            </p>

            <p>
              Simultaneously, as a ProcessMaker Specialist, I streamline internal banking operations by developing
              automated workflows that reduce manual processes, improve service delivery, and ensure seamless
              integration with core banking systems.
            </p>

            <p>
              My expertise in both areas allows me to drive innovation, optimize processes, and deliver impactful
              solutions to complex business challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

