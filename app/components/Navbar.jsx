"use client"
import Link from "next/link"
import React, { useState } from "react"
import Image from "next/image"
import NavLinks from "./NavLinks"
import { HiBars3, HiXMark } from "react-icons/hi2"
import MenuOverlay from "./MenuOverlay"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"}>
          <Image src="/images/logo.png" alt="logo" width={110} height={100} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {navOpen ? (
            <button
              onClick={() => setNavOpen(false)}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <HiXMark className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <HiBars3 className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
