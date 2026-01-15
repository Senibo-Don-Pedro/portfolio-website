"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Users } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const education = [
    {
      institution: "Bells University of Technology",
      degree: "B.Eng. Computer Engineering",
      location: "Ota, Ogun State, Nigeria",
      details: [
        { icon: <GraduationCap className="h-4 w-4" />, text: "Major in Computer Engineering" },
        { icon: <Users className="h-4 w-4" />, text: "Bells Developer Community Member" },
      ],
    },
    {
      institution: "Certifications",
      degree: "Professional Licenses",
      location: "Online / Global",
      details: [
        { icon: <Award className="h-4 w-4" />, text: "ITIL® v4 Foundation Certification (PeopleCert)" },
        { icon: <Award className="h-4 w-4" />, text: "Foundational C# with Microsoft" },
      ],
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">My academic background and qualifications.</p>
        </motion.div>

        <motion.div className="space-y-8 max-w-3xl mx-auto" variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
          {education.map((edu) => (
            <motion.div key={edu.institution} variants={item}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.institution}</CardTitle>
                      <p className="text-primary font-medium">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {edu.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-primary">{detail.icon}</span>
                        <span className="text-muted-foreground">{detail.text}</span>
                      </li>
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
