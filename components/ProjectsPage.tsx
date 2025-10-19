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
import Link from "next/link";
import { useState } from "react";

type ProjectLink = {
  label: string;
  href: string;
  kind?: "code" | "live" | "docs";
};

type Project = {
  title: string;
  description: string; // short subtitle
  longDescription: string; // expanded detail
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
};

const allProjects: Project[] = [
  // --- Significant (also on homepage) ---
  {
    title: "E-commerce Platform (Frontend + API)",
    description:
      "Next.js 15 frontend + Spring Boot API with JWT, RBAC, Swagger and Paystack integration.",
    longDescription:
      "A modern e-commerce stack. Frontend: Next.js 15 (App Router), SSR, Server Actions, Tailwind/shadcn, Google OAuth, Zustand cart, SEO. " +
      "Backend: Spring Boot 3, JWT security + OAuth2, product/catalog search & filters, persistent carts, order processing, Paystack payments with webhook verification, and OpenAPI/Swagger docs.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Java",
      "Spring Boot",
      "MySQL",
      "Paystack",
    ],
    links: [
      {
        label: "Live",
        href: "https://e-commerce-frontend-seven-silk.vercel.app/",
        kind: "live",
      },
      {
        label: "Frontend Code",
        href: "https://github.com/Senibo-Don-Pedro/e-commerce-frontend",
        kind: "code",
      },
      {
        label: "Backend Code",
        href: "https://github.com/Senibo-Don-Pedro/e-commerce-api",
        kind: "code",
      },
      {
        label: "API Docs (Swagger)",
        href: "https://e-commerce-api-4dj1.onrender.com/swagger",
        kind: "docs",
      },
    ],
    featured: true,
  },
  {
    title: "Secure Notes App (Frontend + Backend)",
    description:
      "React frontend + Spring Boot backend with JWT, optional MFA, OAuth, admin audit logs.",
    longDescription:
      "A production-ready notes platform. Frontend: clean, responsive React with Axios, environment-based API config and live CRUD. " +
      "Backend: Spring Boot 3, JWT auth with expiration, optional Google Authenticator MFA, OAuth (GitHub/Google), admin-only audit logs and user management, SMTP email notifications, Swagger docs.",
    tags: ["React", "Java", "Spring Boot", "JWT", "MFA", "MySQL"],
    links: [
      {
        label: "Live",
        href: "https://notes-application-frontend-9e75.onrender.com/",
        kind: "live",
      },
      {
        label: "Frontend Code",
        href: "https://github.com/Senibo-Don-Pedro/notes-frontend",
        kind: "code",
      },
      {
        label: "Backend Code",
        href: "https://github.com/Senibo-Don-Pedro/notes-backend",
        kind: "code",
      },
      {
        label: "API Docs (Swagger)",
        href: "https://notes-backend-deployment-latest.onrender.com/swagger-ui/index.html#/",
        kind: "docs",
      },
    ],
    featured: true,
  },
  {
    title: "Travel Planner App",
    description:
      "Trips + locations with drag-and-drop, 2D map + 3D globe, UploadThing images, GitHub OAuth.",
    longDescription:
      "Next.js 15 app using NextAuth v5 + Prisma/PostgreSQL. Create trips, add multiple locations (lat/lon), reorder with dnd-kit, and visualize on react-leaflet and react-globe.gl. UploadThing for cover images, Radix UI + Tailwind for responsive UI, next-themes for dark mode.",
    tags: [
      "Next.js",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
      "Leaflet",
      "Globe.gl",
      "UploadThing",
    ],
    links: [
      {
        label: "Live",
        href: "https://travel-planner-app-five.vercel.app",
        kind: "live",
      },
      {
        label: "Code",
        href: "https://github.com/Senibo-Don-Pedro/travel-planner-app",
        kind: "code",
      },
    ],
    featured: true,
  },
  {
    title: "Next-Auth Project",
    description:
      "Auth.js v5 demo: OAuth (GitHub/Google), email/password, email verification, reset, optional 2FA.",
    longDescription:
      "Demonstrates a complete Auth.js pipeline with Prisma/PostgreSQL: credentials sign-in, bcrypt hashing, verified emails, password resets via email, optional 2FA, role-based sessions, Zod/React Hook Form validation, dark/light theming, and a protected dashboard.",
    tags: [
      "Next.js",
      "Auth.js (NextAuth)",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "Nodemailer",
    ],
    links: [
      {
        label: "Live",
        href: "https://next-auth-project-jet.vercel.app",
        kind: "live",
      },
      {
        label: "Code",
        href: "https://github.com/Senibo-Don-Pedro/next-auth-project",
        kind: "code",
      },
    ],
    featured: true,
  },

  // --- Keep this one OFF the homepage, but include here ---
  {
    title: "Briefly — Article Summarizer",
    description:
      "React app that condenses long articles into concise summaries with adjustable length.",
    longDescription:
      "AI-powered summarizer for quick time-to-insight: paste a URL/text, get a concise summary; prompt tuning and local caching for snappy UX; Tailwind UI.",
    tags: ["React", "OpenAI API", "Tailwind"],
    links: [
      {
        label: "Live",
        href: "https://brieflysummarizer.vercel.app/",
        kind: "live",
      },
      {
        label: "Code",
        href: "https://github.com/Senibo-Don-Pedro/ai-paraphraser",
        kind: "code",
      },
    ],
  },

  // --- NEW: Smaller backend projects you shared ---
  {
    title: "URL Shortening Service (Spring Boot)",
    description:
      "Create/redirect/update/delete short links with idempotent create and hit-count stats. Global error shape. Swagger UI.",
    longDescription:
      "Implements URL normalization, unique short codes, atomic hit counters, deduped POST /shorten, and clean exception handling. JPA entity with indexes, service-layer validation, and OpenAPI via springdoc. Built from the roadmap.sh spec.",
    tags: ["Java", "Spring Boot", "MySQL", "Swagger"],
    links: [
      {
        label: "Code",
        href: "https://github.com/Senibo-Don-Pedro/url_shortening_service",
        kind: "code",
      },
      // no live/docs link yet — add later if you deploy
    ],
  },
  {
    title: "Todo List API (JWT Auth)",
    description:
      "Secure todos API with signup/login, JWT, role-aware access (admin vs user), pagination, and Swagger UI.",
    longDescription:
      "Spring Security with JWT, robust DTO validation, role-based filtering (admins see all; users see their own), PostgreSQL persistence, and a tidy Swagger surface for exploration.",
    tags: [
      "Java",
      "Spring Boot",
      "JWT",
      "Spring Security",
      "PostgreSQL",
      "Swagger",
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/Senibo-Don-Pedro/todo-list-with-authentication",
        kind: "code",
      },
      {
        label: "Project Spec",
        href: "https://roadmap.sh/projects/todo-list-api",
        kind: "docs",
      },
      // { label: "API Docs (Swagger)", href: "https://<your-host>/swagger-ui.html", kind: "docs" },
    ],
  },
  {
    title: "Weather API Wrapper Service",
    description:
      "Wrapper over OpenWeatherMap with Caffeine caching (12h) and neat Swagger docs.",
    longDescription:
      "Clean controller/service separation, cache-first reads with TTL invalidation, configurable units, and OpenAPI docs. Great example of API composition + caching.",
    tags: [
      "Java",
      "Spring Boot",
      "OpenWeatherMap",
      "Caffeine Cache",
      "Swagger",
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/Senibo-Don-Pedro/weather_api",
        kind: "code",
      },
      {
        label: "Project Spec",
        href: "https://roadmap.sh/projects/weather-api-wrapper-service",
        kind: "docs",
      },
      // { label: "API Docs (Swagger)", href: "http://localhost:8080/swagger-ui.html", kind: "docs" },
    ],
  },
  {
    title: "Blog Posts API",
    description:
      "CRUD for posts with search and JSON/XML content negotiation, global errors, Swagger UI.",
    longDescription:
      "Consistent ApiResponse<T> wrapper, JSON & XML support via Accept headers, repository/service layering, and MySQL persistence. Built to the roadmap.sh blogging API spec.",
    tags: ["Java", "Spring Boot", "MySQL", "Jackson XML", "Swagger"],
    links: [
      {
        label: "Code",
        href: "https://github.com/Senibo-Don-Pedro/blog_posts_api",
        kind: "code",
      },
      {
        label: "Project Spec",
        href: "https://roadmap.sh/projects/blogging-platform-api",
        kind: "docs",
      },
      // { label: "API Docs (Swagger)", href: "https://<your-host>/swagger-ui.html", kind: "docs" },
    ],
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(allProjects.flatMap((p) => p.tags))];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(filter));

  const iconFor = (kind?: ProjectLink["kind"]) =>
    kind === "code" ? (
      <Github className="mr-2 h-4 w-4" />
    ) : (
      <ExternalLink className="mr-2 h-4 w-4" />
    );

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
          <h1 className="text-4xl font-bold mb-4">Personal Projects & PoCs</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Significant, demo-able work. Long descriptions below give context;
            buttons link to live apps, repos, and API docs.
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
                <CardFooter className="flex flex-wrap gap-2">
                  {project.links.map((l) => (
                    <Button
                      key={l.href}
                      variant={l.kind === "code" ? "outline" : "default"}
                      size="sm"
                      asChild
                    >
                      <Link
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {iconFor(l.kind)} {l.label}
                      </Link>
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
