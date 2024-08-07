"use client";
import React from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Link from "next/link"

const downloadCV = () => {
  fetch("/CV_Manal_DRISSI_FR_EN.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL =
        window.URL.createObjectURL(blob)
      let alink = document.createElement("a")
      alink.href = fileURL
      alink.download = "CV_Manal_DRISSI.pdf"
      alink.click()
    })
  })
}

export default () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start text-gradient-to-br from-sky-500 to-white"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="bg-gradient-to-br from-emerald-500 to-sky-500 text-transparent inline-block bg-clip-text ">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Manal",
                1000,
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
                "UI/UX Designer",
                1000,
                'Twitch Streamer',
                1000,
                'Happy'
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Motivated developer ready to bring my passion and dedication to any team. Eager to contribute my skills and make a positive impact. let's connect and create something amazing together!
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-[#121212] mt-3"
            >
              Hire Me!
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span onClick={downloadCV} className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/images/me.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
