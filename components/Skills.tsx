"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Server,
  Layout,
  Workflow,
  MessageSquare,
  Lightbulb,
  Eye,
  Brain,
  CheckCircle,
  Coffee
} from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const frontendSkills = [
    { name: "Next.js", icon: <Layout className="h-5 w-5" /> },
    { name: "React.js", icon: <Layout className="h-5 w-5" /> },
    { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <Layout className="h-5 w-5" /> },
  ]

  const backendSkills = [
    { name: "SpringBoot", icon: <Server className="h-5 w-5" /> },
    { name: "Node.js", icon: <Server className="h-5 w-5" /> },
    { name: "ProcessMaker", icon: <Workflow className="h-5 w-5" /> },
    { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
    { name: "SQL", icon: <Database className="h-5 w-5" /> },
  ]

  const softSkills = [
    { name: "Communication", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Collaboration", icon: <CheckCircle className="h-5 w-5" /> },
    { name: "Emotional Intelligence", icon: <Brain className="h-5 w-5" /> },
    { name: "Leadership Potential", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Attention to Detail", icon: <Eye className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="h-5 w-5" /> },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A combination of technical expertise and soft skills that enable me to deliver comprehensive solutions to
            complex challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills Column */}
          <div className="space-y-10">
            {/* Frontend Skills */}
            <div>
              <motion.h3
                className="text-xl font-semibold mb-6 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Frontend Technologies
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {frontendSkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Card className="hover:border-primary/50 transition-colors">
                      <CardContent className="p-4 flex items-center space-x-3">
                        <div className="text-primary">{skill.icon}</div>
                        <span className="font-medium">{skill.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Backend Skills */}
            <div>
              <motion.h3
                className="text-xl font-semibold mb-6 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Backend Technologies
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {backendSkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Card className="hover:border-primary/50 transition-colors">
                      <CardContent className="p-4 flex items-center space-x-3">
                        <div className="text-primary">{skill.icon}</div>
                        <span className="font-medium">{skill.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              className="text-xl font-semibold mb-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Soft Skills
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {softSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="text-primary">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Skills Visualization
            <motion.div
              className="mt-10 p-6 bg-background rounded-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="font-medium mb-4">Professional Growth</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Problem Solving</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Team Collaboration</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Adaptability</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

