import React from "react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200">
              Hello, I'm{" "}
            </span>
            Senibo
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Software Engineer, Frontend | TailwindCSS, JavaScript, React,
            Next.js, Material-UI
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-400 to-yellow-200 hover:bg-slate-200 text-yellow-700">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-teal-400 to-yellow-200 hover:bg-slate-800 text-white mt-3">
              <span className=" block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-[-10px] relative">
          <Image
            src="/images/display.jpg"
            alt="hero image"
            className=" rounded-full lg:ml-24"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
