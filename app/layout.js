import { Inter as FontSans } from "next/font/google"
import "./globals.css"

import { cn } from "../lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "DON-PEDRO SENIBO RESUME",
  description: "DON-PEDRO SENIBO RESUME",
  icons: {
    icon: [
      {
        url: "/icon.png",
        href: "/icon.png",
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
