import React from "react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent pb-9 text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={80} height={80} />
          </Link>
        </span>
        <p className="text-teal-600">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
