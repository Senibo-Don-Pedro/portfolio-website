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
      title: "Software Engineer – Technology Innovations",
      company: "Ecobank Nigeria",
      period: "04.2024 – Present",
      location: "Lagos, Nigeria",
      responsibilities: [
        "CBN-compliant ATM inventory (Java/Spring Boot + MySQL) with real-time tracking + regulatory reporting.",
        "NIBSS NRBVN integration (React/Next.js) for instant diaspora account opening; cross-sell landing for mortgages/investments.",
        "NIBSS FAS integration for BVN/NIN validation and identity matching across branches (KYC at scale).",
        "Card Distribution Tracking with automated email alerts and network-wide visibility (500+ branches).",
        "Critical Action Buzzer escalation tool with categorized routing for faster HQ support.",
        "Transaction-charges service with core banking integration; accurate debits & reduced manual errors.",
        "Digitized LEA request handling with secure docs, compliance tracking, and audit trails.",
      ],
    },
    {
      title: "Frontend Developer & IT Support (NYSC)",
      company: "Rural Electrification Agency",
      period: "01.2023 – 01.2024",
      location: "Abuja, Nigeria",
      responsibilities: [
        "Mobile-first website redesign (HTML/CSS/JS) — accessibility scores up significantly.",
        "Resolved the majority of IT tickets within 24-hour SLA for 100+ staff.",
        "Prototyping (Figma/Angular) accelerated approvals by weeks; Agile/Jira workflow improvements.",
      ],
    },
    {
      title: "Network Engineer Intern",
      company: "NNPC Limited",
      period: "04.2021 – 10.2021",
      location: "Abuja, Nigeria",
      responsibilities: [
        "First-responder for incidents; high on-time resolution for 500+ users.",
        "Cisco switching optimizations reduced latency; Wi-Fi reliability improved for 200+ employees.",
        "Firewall rule hardening reduced security incidents.",
      ],
    },
  ];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

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
            Full-stack delivery across banking and public sector work.
          </p>
        </motion.div>

        <motion.div className="space-y-8" variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
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
                      <Badge variant="outline" className="mb-1 sm:ml-auto w-fit">{exp.period}</Badge>
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
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
