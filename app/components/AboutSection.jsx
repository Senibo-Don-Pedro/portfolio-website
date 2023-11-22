"use client"
import React, { useTransition, useState } from "react"
import Image from "next/image"
import TabButton from "./TabButton"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 md:grid md:grid-cols-2">
        <li>TailwindCSS</li>
        <li>Shadcn</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Data Fetching</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bells University of Technology, Nigeria.{" "}
          <i>B.Eng Computer Engineering</i>
        </li>
        <li>FreeCodeCamp</li>
      </ul>
    ),
  },
  {
    title: "soft skills",
    id: "soft skills",
    content: (
      <ul className="list-disc pl-2 md:grid md:grid-cols-2">
        <li>Active listener</li>
        <li>Emotionally intelligent</li>
        <li>Good communication skills</li>
        <li>Problem solver </li>
        <li>Keen attention to detail </li>
        <li>Fast Learner</li>
        <li>Can work under pressure</li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/coding-gif.gif" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base ">
            I am a motivated software engineer with over a year of hands-on
            experience in software development initiatives. My passion for
            software development drives me to constantly seek new challenges and
            opportunities. I&apos;m excited about the prospect of taking on
            fresh projects in the near future. Feel free to connect with me or
            send a message if you&apos;d like to learn more about my journey and
            expertise. I&apos;m always eager to engage with others and expand my
            network
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              Hard Skills
            </TabButton>
            <TabButton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleChange("soft skills")}
              active={tab === "soft skills"}
            >
              Soft Skills
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
