import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ProjectenClient from './page.client'

export default async function Projecten() {
  let projects: any[] = []
  
  try {
    const payload = await getPayload({ config: configPromise })
    const projectsData = await payload.find({
      collection: 'projects',
      sort: '-completed',
      limit: 100,
      depth: 1, // Populate image relationship
    })
    projects = projectsData.docs
  } catch (error) {
    console.error('Error fetching projects:', error)
  }

  return <ProjectenClient projects={projects} />
}
