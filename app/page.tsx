"use client"

import Image from "next/image"
import { Instagram, Linkedin, Github, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ExperienceCard from "@/components/ui/experience-card"
import { allExperiences } from "@/data/experience-data"
import { projects } from "@/data/projects-data"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string | null>('about')
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    setIsInitialLoad(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-16 font-[family-name:var(--font-space-grotesk)]">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full max-w-5xl mx-auto px-6 space-y-8"
      >
        {/* Header */}
        <header className="w-full">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">
                  Hey! I&apos;m <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-[wave_3s_ease-in-out_infinite]">Ryan</span>
                </h1>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30"
                >
                  Available for Work
                </motion.span>
              </div>

              <p className="text-sm text-slate-400">Aspiring Software Engineer</p>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>Singapore</span>
              </div>

              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="flex items-center gap-3"
              >
                {[
                  { href: "https://instagram.com/ryanlimxy", Icon: Instagram },
                  { href: "https://linkedin.com/in/ryanlimxy", Icon: Linkedin },
                  { href: "https://github.com/proxyo1", Icon: Github }
                ].map((social) => (
                  <motion.div
                    key={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-white hover:bg-slate-800 cursor-pointer">
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              <p className="text-sm text-slate-500">
                Built on Next.js - Hosted on <span className="text-slate-400 underline"><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></span>
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/me.jpg?height=256&width=256"
                alt="Profile picture"
                width={180}
                height={180}
                className="rounded-full"
              />
            </motion.div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-8 py-4 border-b border-slate-700"
          >
            {['about', 'experience', 'projects', 'education'].map((section) => (
              <motion.div
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost" 
                  className={`text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer ${
                    activeSection === section ? 'text-white bg-slate-800' : ''
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </nav>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {activeSection === 'experience' && (
            <motion.section 
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: isInitialLoad ? 1.0 : 0 }}
              className="w-full space-y-6"
            >
              <h2 className="text-2xl font-bold text-center mb-8">Work Experience</h2>
              <div className="flex flex-col items-center gap-6">
                {allExperiences
                  .filter(exp => exp.type === 'work')
                  .map((experience, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <ExperienceCard
                        title={experience.title}
                        organization={experience.organization}
                        organizationWebsite={experience.organizationWebsite}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        description={experience.description}
                        skills={experience.skills}
                        imageUrl={experience.imageUrl}
                        type={experience.type}
                      />
                    </motion.div>
                  ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'education' && (
            <motion.section 
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: isInitialLoad ? 1.0 : 0 }}
              className="w-full space-y-6"
            >
              <h2 className="text-2xl font-bold text-center mb-8">Education</h2>
              <div className="flex flex-col items-center gap-6">
                {allExperiences
                  .filter(exp => exp.type === 'education')
                  .map((experience, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <ExperienceCard
                        title={experience.title}
                        organization={experience.organization}
                        organizationWebsite={experience.organizationWebsite}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        description={experience.description}
                        skills={experience.skills}
                        imageUrl={experience.imageUrl}
                        type={experience.type}
                      />
                    </motion.div>
                  ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'about' && (
            <motion.section 
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: isInitialLoad ? 1.0 : 0 }}
              className="w-full space-y-6"
            >
              <h2 className="text-2xl font-bold text-center mb-8">About Me</h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 leading-relaxed"
              >
                Fresh Information Technology graduate @ Temasek Polytechnic with a passion for Software Engineering and Fintech.
                <br />
                <br />
                Currently building <a href="https://www.linkedin.com/feed/update/urn:li:activity:7337123878533550080/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">InternHunt</a>, a job aggregator for internships.
              </motion.p>
            </motion.section>
          )}

          {activeSection === 'projects' && (
            <motion.section 
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: isInitialLoad ? 1.0 : 0 }}
              className="w-full space-y-6"
            >
              <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
              <div className="flex flex-col items-center gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <ExperienceCard
                      title={project.title}
                      organization={project.organization}
                      organizationWebsite={project.organizationWebsite}
                      startDate={project.startDate}
                      endDate={project.endDate}
                      description={project.description}
                      skills={project.skills}
                      imageUrl={project.imageUrl}
                      type="work"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
