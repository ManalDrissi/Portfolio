"use client";
import React, { useTransition, useState } from "react"
import TabButton from "./TabButton"
import Image from "next/image"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Html&Css</li>
        <li>Reactjs</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>UNIX Shell</li>
        <li>Git</li>
        <li>Figma</li>
        <li>Sketch</li>
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
        <li>Adobe XD</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master in Applied Computer Science, Offshoring: 12/2022</li>
        <li>Bachelor&apos;s degree in Mathematics and Computer Science (SMI): 12/2020</li>
        <li>Diploma of General University Studies in Mathematics and Computer Science (DEUG): 12/2019</li>
        <li>Mathematical Sciences and Applied Informatics (SMIA): 12/2018</li>
        <li>American Baccalaureate: 12/2016</li>
        <li>Baccalaureate in Mathematical Sciences: 12/2015</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IBM Cloud Certification</li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/me1.png" width={500} height={500} alt='' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {/* I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. */}
            Creative UI Developer with more than 5 years of experience facilitating and supporting human interactions
            with complex systems and software. Maintains user-centric designs while adhering to prescribed interface
            principals and related development goals. Dedicated to creating inviting and unintimidating interfaces for
            everything from simple open-source applications to complex proprietary systems.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
