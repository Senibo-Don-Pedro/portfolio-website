"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    {
      title: "Software Engineer — Technology Innovations",
      company: "Ecobank Nigeria",
      period: "Apr 2024 – Present",
      location: "Lagos, Nigeria",
      responsibilities: [
        "Cheque Tracking Portal: Architected a React 18 / TypeScript enterprise portal replacing a paper-based chequebook lifecycle process across CCPU, Mailroom, and 500+ branches — with strict client/server state separation (TanStack Query + Zustand), compliance-gated AlertDialog mutation flows, and a hybrid filtering strategy that eliminated a category of reconciliation errors.",
        "Compliance Reporting Automation (CRAS): Engineered a full-stack Maker-Checker reporting platform (Spring Boot + React) replacing manual Excel submissions — achieving 100% on-time CBN submission rate and eliminating recurring report rejections caused by data-entry errors.",
        "NIBSS FAS Integration: Integrated the NIBSS Financial Authentication Service with core banking across 500+ branches, enabling real-time BVN/NIN validation at point of service — streamlining KYC and strengthening fraud prevention.",
        "Card Distribution Tracking: Built an automated SMS/email notification platform connecting Card Operations to 500+ branches — replacing manual coordination and measurably improving card collection rates.",
        "ATM Inventory System: Developed a CBN-compliant ATM dashboard serving 500+ branches — replacing error-prone Excel logs with a centralised system that eliminated reporting inaccuracies and ensured continuous NIBSS compliance.",
        "Transaction Charges & Legal Search Automation: Automated real-time charge processing across 500+ branches — eliminating manual collection entirely, closing a recurring revenue leakage gap, and generating direct cost savings through accurate, auditable transaction debiting.",
        "NIBSS National Payment Stack (NPS): Integrated the CBN-mandated NPS service across multiple payment channels, enabling the bank to participate in the pilot phase of Nigeria's new national payment infrastructure.",
      ],
    },
    {
      title: "Frontend Developer (Intern)",
      company: "Rural Electrification Agency",
      period: "Jan 2023 – Jan 2024",
      location: "Abuja, Nigeria",
      responsibilities: [
        "Collaborated within a cross-functional Agile team to re-architect the agency's web presence to a mobile-first responsive design using React and modern JavaScript — migrating from a legacy codebase and improving cross-device accessibility compliance.",
        "Participated in sprint planning and stakeholder review cycles, delivering reusable UI components and interactive prototypes that accelerated stakeholder approval by 3 weeks.",
        "Optimised frontend performance across rural electrification data dashboards, improving Lighthouse scores for core load speed and accessibility metrics.",
      ],
    },
    {
      title: "Network Engineer Intern",
      company: "NNPC Limited",
      period: "Apr 2021 – Oct 2021",
      location: "Abuja, Nigeria",
      responsibilities: [
        "Resolved 90% of network incidents within 1 hour for 500+ corporate users; reduced latency by 25% across Abuja office sites by optimising Cisco router and switch configurations.",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack delivery across banking infrastructure and public sector
            platforms.
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div key={`${exp.title}-${index}`} variants={item}>
              <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <Badge
                        variant="outline"
                        className="mb-1 sm:ml-auto w-fit"
                      >
                        {exp.period}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}