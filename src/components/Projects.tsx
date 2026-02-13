'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import type { Project } from '@/payload-types'
import type { Locale } from '@/utilities/translations'

interface ProjectsProps {
  projects?: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
  const [locale, setLocale] = useState<Locale>('nl')

  useEffect(() => {
    const storedLang = localStorage.getItem('locale') as Locale
    if (storedLang && (storedLang === 'nl' || storedLang === 'en')) {
      setLocale(storedLang)
    }
  }, [])

  const isEnglish = locale === 'en'

  const getCategoryLabel = (category: string) => {
    if (isEnglish) {
      switch (category) {
        case 'demolition':
          return 'Industrial Demolition'
        case 'asbestos':
          return 'Asbestos Removal'
        case 'renovation':
          return 'Building Demolition'
        case 'environmental':
          return 'Environmental Remediation'
        default:
          return 'Demolition Work'
      }
    }
    switch (category) {
      case 'demolition':
        return 'Industriële Sloop'
      case 'asbestos':
        return 'Asbestsanering'
      case 'renovation':
        return 'Gebouwen Sloop'
      case 'environmental':
        return 'Milieusanering'
      default:
        return 'Sloopwerk'
    }
  }

  const getProjectImage = (project: any, index: number) => {
    // Use CMS image if available, otherwise fallback
    if (project.image && typeof project.image === 'object' && project.image.url) {
      return project.image.url
    }
    const fallbackImages = ['/project-1.jpg', '/project-2.jpg', '/project-3.jpg']
    return fallbackImages[index % fallbackImages.length]
  }

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return isEnglish ? 'Completed' : 'Voltooid'
    return new Date(dateString).toLocaleDateString(isEnglish ? 'en-US' : 'nl-NL', {
      year: 'numeric',
      month: 'long',
    })
  }

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-2 mb-4 sm:px-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
                {isEnglish ? 'Our Projects' : 'Onze Projecten'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
              {isEnglish ? 'RECENT ' : 'RECENT '}
              <span className="text-gradient">{isEnglish ? 'WORK' : 'WERK'}</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              {isEnglish
                ? 'Discover our most recent demolition and dismantling projects throughout the Netherlands.'
                : 'Ontdek onze meest recente sloop- en demontageprojecten door heel Nederland.'}
            </p>
          </div>
          <Link href="/projecten" className="btn-outline-power flex items-center gap-2 self-start">
            {isEnglish ? 'All Projects' : 'Alle Projecten'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-background border border-border hover:border-primary transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={getProjectImage(project, index)}
                  alt={project.title || 'Project'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary px-2 py-1 sm:px-3">
                <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">
                  {getCategoryLabel(project.category || 'demolition')}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm mb-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{formatDate(project.completed)}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
