import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-4">
            <Link
              href="https://www.linkedin.com/in/senibo-don-pedro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/senibodonpedro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:senibodonpedro@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Don-Pedro Senibo. All rights reserved.
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

