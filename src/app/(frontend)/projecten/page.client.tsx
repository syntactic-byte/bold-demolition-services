'use client'

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"
import { MapPin } from "lucide-react"

interface ProjectenClientProps {
  projects?: any[]
}

const categories = ["Alle", "Demolition", "Renovation", "Asbestos", "Environmental"]

const getCategoryLabel = (category: string) => {
  const labels: any = {
    'demolition': 'Industriële Sloop',
    'renovation': 'Gebouwen Sloop',
    'asbestos': 'Asbest Sanering',
    'environmental': 'Milieusanering',
  }
  return labels[category] || 'Sloopwerk'
}

export default function ProjectenClient({ projects = [] }: ProjectenClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  
  const filteredProjects = selectedCategory === 'Alle' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory.toLowerCase())
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl mb-4">
              ONZE <span className="text-gradient">PROJECTEN</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Ontdek onze meest recente sloop- en demontageprojecten. Van industriële complexen 
              tot kantoorgebouwen - bekijk waar TitanBrekers het verschil heeft gemaakt.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-medium uppercase tracking-wider text-sm transition-colors ${
                  category === selectedCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const imageUrl = project.image && typeof project.image === 'object' 
                ? project.image.url 
                : null
              const year = project.completed ? new Date(project.completed).getFullYear() : '2024'
              
              return (
              <div
                key={project.id || index}
                className="group relative overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-sm">Project afbeelding</div>
                    </div>
                  )}
                </div>

                {/* Category & Year Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="bg-primary px-3 py-1">
                    <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                      {year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{year}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
