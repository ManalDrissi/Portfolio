
import React from "react"
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"


const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-800 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5 >
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m always on the look for new opportunities, and my inbox is readily available. Whether you have questions or simply wish to say hello, I&apos;ll do my utmost to respond promptly!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ManalDrissi">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/manal-drissi/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div >
    </section>
  )
}

export default EmailSection