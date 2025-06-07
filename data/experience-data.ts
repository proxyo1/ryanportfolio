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
        "I help to maintain existing Business Systems and develop new internal tools used by the company, while partaking in new projects to enhance the company's operations.",
      skills: ["Python", "Project Management", "Business Analysis", "Software Development", "System Analysis", "Development Lifecycle"],
      imageUrl: "/rws.png?height=48&width=48",
      type: "work",
    },
    
    {
      title: "Barista",
      organization: "Starbucks",
      organizationWebsite: "https://starbucks.com",
      startDate: "Aug 2023",
      endDate: "Sep 2024",
      description:
        "Coffee.",
      skills: ["Customer Service", "Teamwork", "Communication"],
      imageUrl: "/starbucks.png?height=48&width=48",
      type: "work",
    },
  ]
  
  export const educationExperiences: Experience[] = [
    {
      title: "Diploma in Information Technology",
      organization: "Temasek Polytechnic",
      organizationWebsite: "https://tp.edu.sg",
      startDate: "Apr 2022",
      endDate: "May 2025",
      description:
        "Should've put in more effort in my assignments.. 😔Track and Field 4x100 POLITE Champion tho",
      skills: ["Full Stack Development","DevOps", "Data Structures", "Algorithms", "Machine Learning", "Agile Methodologies", "Cloud Applications", "Internet of Things"],
      imageUrl: "/tp.jpg?height=48&width=48",
      type: "education",
    },
  ]
  
  export const allExperiences: Experience[] = [...workExperiences, ...educationExperiences]
  