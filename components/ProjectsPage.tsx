"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Extended project data with more details
const allProjects = [
  {
    title: "Gourmet",
    description:
      "A full stack food ordering platform, which allows you to place orders, and manage your restaurant.",
    longDescription:
      "Gourmet is a comprehensive food ordering platform that connects customers with restaurants. The application features user authentication, restaurant browsing, menu management, order placement, and real-time order tracking. Restaurant owners can manage their menus, view orders, and update their business information through a dedicated dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "Stripe Payment",
    ],
    github: "https://github.com/Senibo-Don-Pedro/gourmet-api",
    demo: "https://gourmet-xxm9.onrender.com/",
    featured: true,
  },
  {
    title: "Briefly Article Summarizer",
    description:
      "An AI-powered summarizer that efficiently distills complex content into concise, easily digestible summaries, optimizing time and enhancing key insight retention.",
    longDescription:
      "Briefly is an AI-powered article summarization tool that uses advanced natural language processing to condense lengthy articles into concise, readable summaries. Users can input article URLs or paste text directly, adjust summary length, and save summaries for later reference. The application leverages OpenAI's GPT models to generate high-quality summaries while preserving the key points and context of the original content.",
    image: "/placeholder.svg?height=400&width=600",
    tags: [
      "React.js",
      "OpenAI API",
      "Tailwind CSS",
      "LocalStorage",
      "Responsive Design",
    ],
    github: "https://github.com/Senibo-Don-Pedro/ai-paraphraser",
    demo: "https://brieflysummarizer.vercel.app/",
    featured: true,
  },
  {
    title: "Reserve",
    description:
      "A full stack Hotel reservation platform that allows users to search, book, and manage hotel reservations.",
    longDescription:
      "Reserve is a comprehensive hotel booking platform that enables users to search for accommodations, view detailed information about properties, and make reservations. The application includes features such as user authentication, property filtering by location and amenities, date-based availability checking, secure payment processing, and booking management. Hotel owners can list their properties, manage bookings, and update availability through a dedicated dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: [
      "Next.js",
      "Node.js",
      "Prisma",
      "MySQL",
      "Authentication",
      "Payment Integration",
    ],
    github: "https://github.com/Senibo-Don-Pedro/mern-booking-app",
    demo: "https://mern-booking-app-inzy.onrender.com/",
    featured: true,
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(allProjects.flatMap((project) => project.tags)),
  ];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.tags.includes(filter));

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A comprehensive collection of my work, showcasing various
            technologies and solutions I've developed throughout my career.
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
                {/* <div className="relative h-48 w-full overflow-hidden">
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
                </div> */}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
  );
}
