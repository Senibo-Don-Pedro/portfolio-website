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
              Fullstack Software Engineer specialising in{" "}
              <strong>mission-critical financial platforms</strong> — currently
              at Ecobank Nigeria, one of Africa&apos;s largest pan-African banking
              groups, where my work spans 500+ branches and touches core
              banking infrastructure daily.
            </p>

            <p>
              On the backend, I architect{" "}
              <strong>event-driven microservices</strong> with Java, Spring Boot
              3, and Apache Kafka, and integrate with national platforms like
              NIBSS for real-time payment processing and identity validation. On
              the frontend, I build production{" "}
              <strong>React and Next.js</strong> applications in TypeScript —
              with proper state architecture (TanStack Query for server state,
              Zustand for client state), compliance-gated UX flows, and
              performance optimisation baked in from the start.
            </p>

            <p>
              I&apos;m pragmatic and metric-driven. I move from problem framing →
              architecture → implementation → production, and I care deeply
              about building things that are{" "}
              <strong>reliable, auditable, and maintainable</strong> — not just
              things that work locally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}