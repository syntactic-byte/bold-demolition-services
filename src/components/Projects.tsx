'use client'

import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import type { Project } from '@/payload-types'
import { useTranslation } from '@/hooks/useTranslation'

interface ProjectsProps {
  projects?: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
  const { t, locale } = useTranslation()

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, Record<string, string>> = {
      demolition: {
        nl: 'Industriële Sloop',
        en: 'Industrial Demolition',
        fr: 'Démolition Industrielle',
        de: 'Industrieller Abriss',
        it: 'Demolizione Industriale',
        es: 'Demolición Industrial',
        sv: 'Industriell Rivning',
        fi: 'Teollinen Purku',
        pl: 'Rozbiórka Przemysłowa',
        ar: 'هدم صناعي',
        zh: '工业拆除',
        ja: '産業解体',
        pt: 'Demolição Industrial',
        tr: 'Endüstriyel Yıkım',
        ru: 'Промышленный Демонтаж',
      },
      asbestos: {
        nl: 'Asbestsanering',
        en: 'Asbestos Removal',
        fr: 'Désamiantage',
        de: 'Asbestsanierung',
        it: 'Rimozione Amianto',
        es: 'Retiro de Amianto',
        sv: 'Asbestsanering',
        fi: 'Asbestin Poisto',
        pl: 'Usuwanie Azbestu',
        ar: 'إزالة الأسبستوس',
        zh: '石棉清除',
        ja: 'アスベスト除去',
        pt: 'Remoção de Amianto',
        tr: 'Asbet Temizleme',
        ru: 'Удаление Асбеста',
      },
      renovation: {
        nl: 'Gebouwen Sloop',
        en: 'Building Demolition',
        fr: 'Démolition de Bâtiments',
        de: 'Gebäudeabbriss',
        it: 'Demolizione Edile',
        es: 'Demolición de Edificios',
        sv: 'Byggnadsrivning',
        fi: 'Rakennuspurku',
        pl: 'Rozbiórka Budynków',
        ar: 'هدم المباني',
        zh: '建筑拆除',
        ja: '建物解体',
        pt: 'Demolição de Edifícios',
        tr: 'Bina Yıkımı',
        ru: 'Демонтаж Зданий',
      },
      environmental: {
        nl: 'Milieusanering',
        en: 'Environmental Remediation',
        fr: 'Assainissement Environnemental',
        de: 'Umweltsanierung',
        it: 'Bonifica Ambientale',
        es: 'Remediación Ambiental',
        sv: 'Miljösanering',
        fi: 'Ympäristön Puhdistus',
        pl: 'Sanacja Środowiska',
        ar: 'التصحيح البيئي',
        zh: '环境修复',
        ja: '環境修復',
        pt: 'Remediação Ambiental',
        tr: 'Çevre Temizliği',
        ru: 'Экологическое Восстановление',
      },
    }
    return labels[category]?.[locale] || labels[category]?.['nl'] || 'Sloopwerk'
  }

  const getProjectImage = (project: Project, index: number) => {
    // Use CMS image if available, otherwise fallback
    if (project.image && typeof project.image === 'object' && project.image.url) {
      return project.image.url
    }
    const fallbackImages = ['/project-1.webp', '/project-2.webp', '/project-3.webp']
    return fallbackImages[index % fallbackImages.length]
  }

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return t.projects?.completed || 'Voltooid'
    return new Date(dateString).toLocaleDateString(locale, {
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
                {t.sections?.ourProjects || 'Onze Projecten'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
              {t.projects?.sectionTitle ? (
                <>
                  {t.projects.sectionTitle.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-gradient">
                    {t.projects.sectionTitle.split(' ').slice(-1)}
                  </span>
                </>
              ) : (
                <>
                  RECENT <span className="text-gradient">WERK</span>
                </>
              )}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              {t.projects?.description ||
                'Ontdek onze meest recente sloop- en demontageprojecten door heel Nederland.'}
            </p>
          </div>
          <Link
            href={t.paths?.projects || '/projecten'}
            className="btn-outline-power flex items-center gap-2 self-start"
          >
            {t.cta?.viewAllProjects || 'Alle Projecten'}
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
