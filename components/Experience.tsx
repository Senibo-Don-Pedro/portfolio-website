"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      title: "Software Engineer- ProcessMaker",
      company: "Ecobank Nigeria",
      period: "04.2024 – present",
      location: "Lagos, Nigeria",
      responsibilities: [
        "Develop, optimize, and maintain workflow automation solutions using ProcessMaker to streamline banking operations and improve internal efficiencies.",
        "Collaborate with cross-functional teams to integrate automated workflows with core banking systems, ensuring scalability, security, and alignment with business needs.",
        "Spearhead process improvements to reduce processing times, automate routine tasks, and enhance service delivery.",
        "Monitor and troubleshoot issues related to automated workflows, providing timely resolutions to support business continuity.",
      ],
    },
    {
      title: "Full-stack Engineer",
      company: "Ecobank Nigeria",
      period: "04.2024 – present",
      location: "Lagos, Nigeria",
      responsibilities: [
        "Build and maintain fullstack web applications utilizing Next.js for frontend development and Express.js for backend services to support internal and external banking services.",
        "Design and implement user-friendly, responsive web interfaces using Next.js, ensuring seamless interaction with server-side logic and databases.",
        "Collaborate with stakeholders to gather requirements, create solutions, and deploy web applications that enhance user experience and operational efficiency.",
        "Optimize web applications for speed, scalability, and security, ensuring they meet the high standards required in the banking sector.",
      ],
    },
    {
      title: "IT Administrator",
      company: "Rural Electrification Agency",
      period: "01.2023 – 01.2024",
      location: "Abuja, Nigeria",
      responsibilities: [
        "Responding to user inquiries, troubleshooting problems, and providing step-by-step guidance.",
        "Diagnosing and resolving hardware and software issues, such as computer crashes, software errors, or network connectivity problems.",
        "Installing, configuring, and maintaining computer systems, software, and peripherals.",
        "Assisting in managing and maintaining IT inventory, including hardware, software licenses, and equipment.",
        "Participating in IT projects, such as system upgrades, software rollouts, or network expansions.",
      ],
    },
    {
      title: "Network Engineering Intern",
      company: "Nigerian National Petroleum Company",
      period: "04.2021 – 10.2021",
      location: "Abuja, Nigeria",
      responsibilities: [
        "Served as a first responder during network incidents, promptly providing troubleshooting and technical support to minimize downtime and swiftly restore network connectivity.",
        "Executed proficient crimping techniques for LAN and telephone cables, ensuring precise termination and strict adherence to industry standards, guaranteeing reliable network connectivity.",
        "Successfully installed and connected analog and digital telephones, meticulously verifying proper connectivity to assigned patch plates in the server room for analog phones and accurate association with the correct switch for digital phones.",
        "Assisted in the configuration, maintenance, and troubleshooting of network devices, including routers, switches, and access points, to ensure optimal performance and reliability.",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

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
            A track record of delivering impactful solutions across various roles in the technology sector.
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
                      <Badge variant="outline" className="mb-1 sm:ml-auto w-fit">
                        {exp.period}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
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
  )
}

