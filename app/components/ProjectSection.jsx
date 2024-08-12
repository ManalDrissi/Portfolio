"use client";
import React, { useState, useRef } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "Tramway Mobile App",
    description: "My tramway app's design emphasizes a clean and intuitive user interface, with a neutral color scheme that aligns with the city's branding. The layout prioritizes easy navigation, using familiar icons and minimal text to guide users efficiently. Accessibility and real-time information is central to the design, ensuring a seamless experience for all passengers.",
    image: "/images/projects/image1.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/6TDJW8ia1ROEcAKpGkFzpb/Tram?node-id=1-2&t=NZyxZ1cqoycqy9SX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2",
  },
  {
    id: 2,
    title: "Restaurant tablet app",
    description: "This restaurant menu tablet application features an elegant and visually appealing design that showcases the menu items with high-quality images and concise descriptions. The user interface is intuitive, allowing customers to easily navigate through categories and customize their orders with a few taps. This design is also incorporate smooth animations and transitions to enhance the overall dining experience while maintaining a clear and readable font that matches the restaurant's branding.",
    image: "/images/projects/image2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/pMOFvcGi1GHCWdL2coelkt/Resto?node-id=3-7&t=43hejqVtMw82ZBZQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A7",
  },
  {
    id: 3,
    title: "online Honey store",
    description: "Online honey store design does exude warmth and natural appeal, using a color palette inspired by honey's rich golden tones and natural elements. The layout is clean and user-friendly, with high-quality images of the products and detailed descriptions highlighting the honey's origin, flavor notes, and benefits. Easy navigation through categories, such as types of honey or usage recommendations, along with a smooth checkout process, is crucial. The design is also emphasize trustworthiness, through customer reviews and certifications, to build confidence in the product's authenticity and quality.",
    image: "/images/projects/image3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/O9DODvwud59o4BTXRyeWGz/Honey?node-id=103-572&t=fdkVIIm8B1os2B9E-1&scaling=min-zoom&content-scaling=fixed&page-id=103%3A571&starting-point-node-id=103%3A572",
  },
  {
    id: 4,
    title: "E-learning website",
    description: "The UX/UI design for this online course website for faculty students is clean and intuitive, with easy navigation to browse courses by category. Each course page features clear descriptions, instructor details, and visual aids. A modern, academic aesthetic with readable fonts and a balanced color scheme is used, ensuring a seamless experience across devices.",
    image: "/images/projects/image4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/VcLKEa68LNEql44PzUlTcy/E-Fac?node-id=1-2&t=Lr2zFGEj8Fe6w0Rb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 5,
    title: "Assurance App",
    description: "My assurance web application features a streamlined design with a focus on efficiency and ease of use. The search functionality is prominently placed, allowing users to quickly filter and find specific assurances through keywords, categories, or filters. A clean, minimalist interface with clear labels and intuitive navigation ensures users can access relevant information effortlessly. Visual indicators, such as status tags or color coding, helps highlight the assurance details.",
    image: "/images/projects/image5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/hdJTqIixPI2vVD4rjl6w2Y/assurance?t=qtunUVWdOigbZ3IB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2",
  },
  {
    id: 6,
    title: "Alphorm website",
    description: "The Alphorm website has a professional design with a clean homepage featuring highlighted courses and clear navigation. Course listings are organized with filters and detailed pages for each course. Include a user dashboard for tracking progress and manage enrollments. The design is modern, with a professional color palette and responsive layout for all devices. Ensuring robust search functionality for easy course discovery.",
    image: "/images/projects/image6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.alphorm.com/",
  },
]

const ProjectSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectSection