"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
              Fullstack Software Engineer with{" "}
              <strong>3+ years of experience</strong> building secure,
              compliant, and scalable solutions for the banking sector.
            </p>

            <p>
              I specialize in architecting{" "}
              <strong>event-driven microservices</strong> and integrating core
              banking systems with national platforms (NIBSS). My work focuses
              on delivering mission-critical automation tools using{" "}
              <strong>Java (Spring Boot)</strong> and <strong>React</strong>.
            </p>

            <p>
              I’m pragmatic, metric-driven, and enjoy moving from problem
              framing → architecture → implementation → polish.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
