export interface Project {
  title: string
  organization: string
  organizationWebsite?: string
  startDate: string
  endDate?: string
  description: string
  skills: string[]
  imageUrl?: string
  type: "project"
}

export const projects: Project[] = [
  {
    title: "Founder/Software Engineer",
    organization: "InternHunt",
    organizationWebsite: "https://www.internhunt.sg/",
    startDate: "",
    description: "Currently building a job aggregator for internships, helping students find relevant opportunities more efficiently.",
    skills: ["Next.js", "TypeScript", "Python", "Supabase", "Web Scraping"],
    imageUrl: "/internhunt.ico?height=48&width=48",
    type: "project",
  },
  {
    title: "paperpaws",
    organization: "Personal Project",
    organizationWebsite: "https://paperpaws.xyz/",
    startDate: "",
    description: "A Solana Memecoin paper trading application built on Python. It allows users to trade memecoins, enabling practice trading without the risk of losing real money. The platform provides a realistic trading experience while maintaining a risk-free environment for learning.",
    skills: ["Python", "Solana", "Next.js", "Blockchain", "API Integration", "Web3"],
    imageUrl: "/paperpaws.png?height=48&width=48",
    type: "project",
  },
  {
    title: "This Portfolio!",
    organization: "Personal Project",
    organizationWebsite: "https://github.com/proxyo1/ryanportfolio",
    startDate: "",
    description: "A minimalistic portfolio website built with Next.js and TypeScript. Features a clean design using shadcn/ui components and Tailwind CSS for styling.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React", "Framer Motion"],
    imageUrl: "/me.jpg?height=48&width=48",
    type: "project",
  },
  {
    title: "Cloud Migration Tool",
    organization: "Resorts World Sentosa",
    organizationWebsite: "https://rwsentosa.com",
    startDate: "",
    description: "A specialized Python solution designed to facilitate the migration of reservation data from the Opera On-Prem system to the cloud using Oracle's Hospitality Integration Platform (OHIP) APIs. The tool automates and streamlines the migration process by managing data handling, transformation, and validation, ensuring that all reservations are accurately updated and transferred.",
    skills: ["Python", "Data Manipulation", "REST APIs", "Data Validation", "ETL", "Streamlit"],
    imageUrl: "/rws.png?height=48&width=48",
    type: "project",
  },
  {
    title: "Digital Health Monitoring Tool",
    organization: "Resorts World Sentosa",
    organizationWebsite: "https://rwsentosa.com",
    startDate: "",
    description: "Developed a full-stack web application that monitors and reports on the health of Resorts World Sentosa's digital services and APIs. The system combines a Python backend using Selenium for automated testing and data collection, with a responsive Next.js frontend for real-time visualization. This tool continuously tracks multiple services, including websites, chatbots, and APIs, measuring performance metrics and logging results for analysis.",
    skills: ["Python", "Next.js", "Flask", "Selenium", "API Testing", "Real-time Monitoring"],
    imageUrl: "/rws.png?height=48&width=48",
    type: "project",
  },
] 