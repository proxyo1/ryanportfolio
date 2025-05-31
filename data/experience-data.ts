export interface Experience {
    title: string
    organization: string
    organizationWebsite?: string
    startDate: string
    endDate?: string
    description: string
    skills: string[]
    imageUrl?: string
    type: "work" | "education"
  }
  
  export const workExperiences: Experience[] = [
    {
      title: "IT Intern",
      organization: "Resorts World Sentosa",
      organizationWebsite: "https://rwsentosa.com",
      startDate: "Apr 2024",
      endDate: "Apr 2025",
      description:
        "boi",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Jest"],
      imageUrl: "/rws.png?height=48&width=48",
      type: "work",
    },
  ]
  
  export const educationExperiences: Experience[] = [
    {
      title: "Bachelor of Science in Computer Science",
      organization: "University of Technology",
      organizationWebsite: "https://university.edu",
      startDate: "Sep 2016",
      endDate: "Jun 2020",
      description:
        "Graduated with honors. Focused on software engineering, algorithms, and data structures. Completed capstone project on machine learning applications in web development.",
      skills: ["Java", "Python", "Data Structures", "Algorithms", "Machine Learning", "Database Design"],
      imageUrl: "/placeholder.svg?height=48&width=48",
      type: "education",
    },
  ]
  
  export const allExperiences: Experience[] = [...workExperiences, ...educationExperiences]
  