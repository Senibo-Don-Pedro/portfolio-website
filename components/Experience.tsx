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
        "ATM Inventory System: Developed a CBN-compliant reporting tool tracking real-time ATM transactions, replacing manual logs with a centralized dashboard.",
        "NIBSS Financial Authentication Service (FAS): Integrated FAS API with core banking for real-time BVN/NIN validation, streamlining KYC across branches.",
        "Card Distribution Tracking System: Built an automated notification platform connecting 500+ branches, improving card collection rates via SMS/email alerts.",
        "Compliance Reporting Automation System (CRAS): Engineered a full-stack Maker-Checker workflow (Spring Boot & React) that ensured 100% CBN compliance.",
        "Collateral Management System: Architected the frontend for digital asset tracking, enabling Legal officers to manage secured assets efficiently.",
        "Transaction Charges System: Automated statement request processing to prevent revenue leakage and accurate customer debits.",
      ],
    },
    {
      title: "Frontend Developer (Intern)", // Renamed to remove "IT Support"
      company: "Rural Electrification Agency",
      period: "01.2023 – 01.2024",
      location: "Abuja, Nigeria",
      responsibilities: [
        "Collaborated with a cross-functional team to re-architect the agency’s web presence using modern JavaScript frameworks.",
        "Developed interactive prototypes that accelerated stakeholder approval time by 3 weeks.",
        "Optimized frontend performance, improving page load speeds and accessibility scores for rural electrification data dashboards.",
      ],
    },
    // We can keep NNPC here for history, or remove it to match resume exactly. 
    // Since it's a website, keeping it is fine as long as it's last.
    {
      title: "Network Engineer Intern",
      company: "NNPC Limited",
      period: "04.2021 – 10.2021",
      location: "Abuja, Nigeria",
      responsibilities: [
        "Acted as first responder for network incidents, resolving connectivity issues for 500+ corporate users.",
        "Supported troubleshooting of Wi-Fi access points and Cisco router configurations.",
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
