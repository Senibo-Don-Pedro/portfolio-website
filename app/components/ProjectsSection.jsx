"use client"
import React, { useState, useRef } from "react"
import ProjectCard from "./ProjectCard"
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "Briefly Article Summarizer",
    description:
      "Briefly, an innovative AI-powered website summarizer! 🚀 Simply copy and paste any webpage URL into our user-friendly submit form, and watch as Briefly efficiently distills the entire content into a concise summary. Revolutionizing the way we navigate the web, saving you time while ensuring you get the information you need.",
    skillsUsed: "Tailwind CSS, JavaScript, Reactjs",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Senibo-Don-Pedro/ai-paraphraser",
    previewUrl: "https://brieflysummarizer.vercel.app/",
  },
  {
    id: 2,
    title: "Surekicks",
    description:
      "A landing page for Surekicks, a shoe vendor. For this project, I used a blend of technologies including CSS (following the BEM model for clean, maintainable code), JavaScript, and React to build a visually appealing and high-performing landing page. I wanted to create an experience that can truly stand out in the competitive world of online shoe retail if it is improved further.",
    image: "/images/projects/2.png",
    skillsUsed: "Tailwind CSS, JavaScript, Reactjs, Figma",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Senibo-Don-Pedro/SureKicks",
    previewUrl: "https://surekicks.vercel.app/",
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              skillsUsed={project.skillsUsed}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
