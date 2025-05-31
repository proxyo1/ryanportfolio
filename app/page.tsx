"use client"

import Image from "next/image"
import { Mail, Twitter, Linkedin, Github, ExternalLink, Moon, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ExperienceCard from "@/components/ui/experience-card"
import { allExperiences } from "@/data/experience-data"
import { useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-16 font-[family-name:var(--font-space-grotesk)]">
      <div className="w-full max-w-5xl mx-auto px-6 space-y-8">
        {/* Header */}
        <header className="w-full">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">
                  Hey! I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-[wave_3s_ease-in-out_infinite]">Ryan</span>
                </h1>
                <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
                  Available for Work
                </span>
              </div>

              <p className="text-sm text-slate-400">Aspiring Software Engineer</p>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>Singapore</span>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white cursor-pointer">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white cursor-pointer">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white cursor-pointer">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white cursor-pointer">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm text-slate-500">
              Hosted on <span className="text-slate-400 underline">vercel.com</span>
              </p>
            </div>

            <div className="flex-shrink-0">
              <Image
                src="/me.jpg?height=256&width=256"
                alt="Profile picture"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="w-full">
          <div className="flex items-center justify-center gap-8 py-4 border-b border-slate-700">
            <Button 
              variant="ghost" 
              className={`text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer ${
                activeSection === 'about' ? 'text-white bg-slate-800' : ''
              }`}
              onClick={() => handleSectionClick('about')}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className={`text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer ${
                activeSection === 'experience' ? 'text-white bg-slate-800' : ''
              }`}
              onClick={() => handleSectionClick('experience')}
            >
              Experience
            </Button>
            <Button 
              variant="ghost" 
              className={`text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer ${
                activeSection === 'projects' ? 'text-white bg-slate-800' : ''
              }`}
              onClick={() => handleSectionClick('projects')}
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              className={`text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer ${
                activeSection === 'education' ? 'text-white bg-slate-800' : ''
              }`}
              onClick={() => handleSectionClick('education')}
            >
              Education
            </Button>
          </div>
        </nav>

        {/* Content Sections */}
        {activeSection === 'experience' && (
          <section className="w-full space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">Work Experience</h2>
            <div className="flex flex-col items-center space-y-6">
              {allExperiences
                .filter(exp => exp.type === 'work')
                .map((experience, index) => (
                  <ExperienceCard
                    key={index}
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
                ))}
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section className="w-full space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">Education</h2>
            <div className="flex flex-col items-center space-y-6">
              {allExperiences
                .filter(exp => exp.type === 'education')
                .map((experience, index) => (
                  <ExperienceCard
                    key={index}
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
                ))}
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="w-full space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">About Me</h2>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <p className="text-slate-300 leading-relaxed">
                  I'm a passionate software engineer with a love for creating innovative solutions and beautiful user experiences. 
                  With expertise in modern web technologies, I enjoy tackling complex problems and turning ideas into reality.
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="w-full space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <p className="text-slate-300 leading-relaxed">
                  Projects section coming soon! This will showcase my latest work and personal projects.
                </p>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  )
}
