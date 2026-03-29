"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Server,
  Layout,
  Layers,
  GitBranch,
  Cpu,
  Shield,
  Zap,
} from "lucide-react";

type Skill = { name: string; icon: React.ReactNode };

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const frontendSkills: Skill[] = [
    { name: "React 18", icon: <Layout className="h-5 w-5" /> },
    { name: "Next.js 15", icon: <Layout className="h-5 w-5" /> },
    { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
    { name: "TanStack Query", icon: <Zap className="h-5 w-5" /> },
    { name: "Zustand", icon: <Layers className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <Layout className="h-5 w-5" /> },
    { name: "Shadcn UI", icon: <Layout className="h-5 w-5" /> },
    { name: "Redux Toolkit", icon: <Layers className="h-5 w-5" /> },
  ];

  const backendSkills: Skill[] = [
    { name: "Java / Spring Boot 3", icon: <Server className="h-5 w-5" /> },
    { name: "Spring Security (OAuth2 / JWT)", icon: <Shield className="h-5 w-5" /> },
    { name: "Apache Kafka", icon: <Zap className="h-5 w-5" /> },
    { name: "Microservices", icon: <Cpu className="h-5 w-5" /> },
    { name: "REST API Design", icon: <Server className="h-5 w-5" /> },
    { name: "Hibernate / JPA", icon: <Database className="h-5 w-5" /> },
    { name: "Docker / Docker Compose", icon: <Layers className="h-5 w-5" /> },
    { name: "GitHub Actions", icon: <GitBranch className="h-5 w-5" /> },
  ];

  const dataSkills: Skill[] = [
    { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
    { name: "MySQL / MS SQL Server", icon: <Database className="h-5 w-5" /> },
    { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const SkillGrid = ({ skills }: { skills: Skill[] }) => (
    <motion.div
      className="grid grid-cols-2 gap-3"
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {skills.map((skill) => (
        <motion.div key={skill.name} variants={item}>
          <Card className="hover:border-primary/50 transition-colors">
            <CardContent className="p-3 flex items-center space-x-3">
              <div className="text-primary shrink-0">{skill.icon}</div>
              <span className="font-medium text-sm">{skill.name}</span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack: React / Next.js on the frontend, Java / Spring Boot
            microservices on the backend.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Frontend */}
          <div className="space-y-4">
            <motion.h3
              className="text-lg font-semibold text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Frontend
            </motion.h3>
            <SkillGrid skills={frontendSkills} />
          </div>

          {/* Backend & DevOps */}
          <div className="space-y-4">
            <motion.h3
              className="text-lg font-semibold text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Backend & DevOps
            </motion.h3>
            <SkillGrid skills={backendSkills} />
          </div>

          {/* Databases */}
          <div className="space-y-4">
            <motion.h3
              className="text-lg font-semibold text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Databases
            </motion.h3>
            <SkillGrid skills={dataSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}