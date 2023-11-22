"use client"
import React from "react"
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import GmailIcon from "../../public/gmail-icon.svg"
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {
  return (
    <section id="contact" className=" my-12 md:my-12 py-24 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900 to-transparent rounded-full h-80 w-80 z-10 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          definitely get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Senibo-Don-Pedro">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/senibo-don-pedro/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="mailto:senibodonpedro@gmail.com">
            <Image src={GmailIcon} alt="Gmail icon" width={50} height={50} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EmailSection
