import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ExperienceCardProps {
  title: string
  organization: string
  organizationWebsite?: string
  startDate: string
  endDate?: string
  description: string
  skills: string[]
  imageUrl?: string
  type?: "work" | "education"
}

export default function ExperienceCard({
  title,
  organization,
  organizationWebsite,
  startDate,
  endDate,
  description,
  skills,
  imageUrl,
  type = "work",
}: ExperienceCardProps) {
  const formatDateRange = () => {
    if (!startDate) {
      return ""
    }
    if (endDate) {
      return `${startDate} - ${endDate}`
    }
    return `${startDate} - Present`
  }

  const getImageAltText = () => {
    if (type === "education") {
      return `${organization} logo`
    }
    return `${organization} logo`
  }

  return (
    <Card className="w-full max-w-4xl bg-black border-slate-700">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-start sm:justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {imageUrl && (
              <div className="flex-shrink-0">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt={getImageAltText()}
                  width={48}
                  height={48}
                  className="rounded-lg object-cover w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
            )}
            <div className="space-y-0.5 flex-1 min-w-0">
              <CardTitle className="text-lg sm:text-xl font-semibold text-white break-words">{title}</CardTitle>
              <div className="flex items-center gap-2 flex-wrap">
                <CardDescription className="text-sm sm:text-base font-medium text-slate-300 break-words">{organization}</CardDescription>
                {organizationWebsite && (
                  <Link
                    href={organizationWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Visit {organization} website</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 flex-shrink-0 whitespace-nowrap">{formatDateRange()}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 -mt-7 sm:-mt-7">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-slate-700 text-slate-200 hover:bg-slate-600">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
