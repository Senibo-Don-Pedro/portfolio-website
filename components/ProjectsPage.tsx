"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Extended project data with more details
const allProjects = [
  {
    title: "Gourmet",
    description: "A full stack food ordering platform, which allows you to place orders, and manage your restaurant.",
    longDescription:
      "Gourmet is a comprehensive food ordering platform that connects customers with restaurants. The application features user authentication, restaurant browsing, menu management, order placement, and real-time order tracking. Restaurant owners can manage their menus, view orders, and update their business information through a dedicated dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Authentication", "Stripe Payment"],
    github: "https://github.com/senibodonpedro/gourmet",
    demo: "https://gourmet-app.vercel.app",
    featured: true,
  },
  {
    title: "Briefly Article Summarizer",
    description:
      "An AI-powered summarizer that efficiently distills complex content into concise, easily digestible summaries, optimizing time and enhancing key insight retention.",
    longDescription:
      "Briefly is an AI-powered article summarization tool that uses advanced natural language processing to condense lengthy articles into concise, readable summaries. Users can input article URLs or paste text directly, adjust summary length, and save summaries for later reference. The application leverages OpenAI's GPT models to generate high-quality summaries while preserving the key points and context of the original content.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "OpenAI API", "Tailwind CSS", "LocalStorage", "Responsive Design"],
    github: "https://github.com/senibodonpedro/briefly",
    demo: "https://briefly-summarizer.vercel.app",
    featured: true,
  },
  {
    title: "Reserve",
    description:
      "A full stack Hotel reservation platform that allows users to search, book, and manage hotel reservations.",
    longDescription:
      "Reserve is a comprehensive hotel booking platform that enables users to search for accommodations, view detailed information about properties, and make reservations. The application includes features such as user authentication, property filtering by location and amenities, date-based availability checking, secure payment processing, and booking management. Hotel owners can list their properties, manage bookings, and update availability through a dedicated dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Node.js", "Prisma", "MySQL", "Authentication", "Payment Integration"],
    github: "https://github.com/senibodonpedro/reserve",
    demo: "https://reserve-hotels.vercel.app",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my skills, experience, and projects.",
    longDescription:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. The site features a clean, minimalist design with smooth animations, dark mode support, and optimized performance. It includes sections for showcasing skills, professional experience, projects, and contact information.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/senibodonpedro/portfolio",
    demo: "https://donpedro.dev",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides current conditions and forecasts for locations worldwide.",
    longDescription:
      "A feature-rich weather dashboard that provides real-time weather information and forecasts for locations around the world. Users can search for cities, view current conditions, hourly forecasts, and 7-day outlooks. The application includes interactive maps, weather alerts, and historical data visualization. Weather data is sourced from multiple APIs to ensure accuracy and reliability.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "Weather API", "Chart.js", "Geolocation", "Progressive Web App"],
    github: "https://github.com/senibodonpedro/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    featured: false,
  },
  {
    title: "Task Manager",
    description: "A productivity application for managing tasks, projects, and deadlines.",
    longDescription:
      "A comprehensive task management application designed to help users organize their work and increase productivity. Features include task creation with priorities and deadlines, project organization, collaborative task assignment, progress tracking, and customizable notifications. The application supports multiple views including Kanban boards, calendar views, and list views to accommodate different workflow preferences.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Firebase", "Vuex", "Authentication", "Real-time Updates"],
    github: "https://github.com/senibodonpedro/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    featured: false,
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product catalog, shopping cart, and payment processing.",
    longDescription:
      "A comprehensive e-commerce platform that enables businesses to sell products online. The application includes features such as product catalog management, category organization, search functionality, shopping cart, secure checkout with multiple payment options, order tracking, and customer account management. Admin users can manage inventory, process orders, and access sales analytics through a dedicated dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MongoDB", "Redux", "Stripe", "Authentication", "Admin Dashboard"],
    github: "https://github.com/senibodonpedro/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    featured: false,
  },
  {
    title: "Fitness Tracker",
    description: "An application for tracking workouts, nutrition, and fitness progress.",
    longDescription:
      "A comprehensive fitness tracking application that helps users monitor their health and fitness journey. Features include workout logging with exercise details and performance metrics, nutrition tracking with calorie and macronutrient calculations, body measurement recording, goal setting, progress visualization through charts and graphs, and personalized workout recommendations based on user data and preferences.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Redux", "Health API Integration", "Cross-platform"],
    github: "https://github.com/senibodonpedro/fitness-tracker",
    demo: "https://fitness-tracker-demo.vercel.app",
    featured: false,
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...new Set(allProjects.flatMap((project) => project.tags))]

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter((project) => project.tags.includes(filter))

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/#projects" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A comprehensive collection of my work, showcasing various technologies and solutions I've developed
            throughout my career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

