import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables FIRST
dotenv.config({ path: path.join(__dirname, '..', '.env') })

// Dynamically import config after env is loaded
const { default: config } = await import(path.join(__dirname, '..', 'src', 'payload.config.ts'))

async function seedEnglishTranslations() {
  console.log('🌱 Adding English translations...')

  const payload = await getPayload({ config })

  try {
    // English translations for Services
    const servicesTranslations = {
      'Gebouwen Sloop': {
        title: 'Building Demolition',
        description:
          'Complete demolition of homes, offices, and commercial buildings. From historic properties to modern office buildings - we ensure safe and efficient demolition.',
      },
      'Industriële Demontage': {
        title: 'Industrial Dismantling',
        description:
          'Specialized dismantling of factories, warehouses, and industrial installations. We have experience with complex industrial environments.',
      },
      'Asbest Sanering': {
        title: 'Asbestos Removal',
        description:
          'Certified removal of asbestos-containing materials according to SC-530 standards. Safe for people and environment, fully compliant with all legal requirements.',
      },
      'Recycling & Afvoer': {
        title: 'Recycling & Disposal',
        description:
          'Sustainable processing and recycling of demolition waste. We separate and process all materials in an environmentally friendly way with a recycling rate of 98%.',
      },
      Grondwerk: {
        title: 'Earthworks',
        description:
          'Excavation, leveling, and site preparation. From small plots to large construction sites - we prepare your ground for new construction.',
      },
      'Interieur Sloop': {
        title: 'Interior Demolition',
        description:
          'Strip-out work and selective demolition of interiors. Perfect for renovation projects and redevelopment of existing buildings.',
      },
    }

    // Update Services with English translations
    console.log('🔄 Updating Services...')
    for (const [dutchTitle, englishData] of Object.entries(servicesTranslations)) {
      const existingService = await payload.find({
        collection: 'services',
        where: {
          title: {
            equals: dutchTitle,
          },
        },
        limit: 1,
      })

      if (existingService.docs.length > 0) {
        await payload.update({
          collection: 'services',
          id: existingService.docs[0].id,
          locale: 'en',
          data: englishData,
        })
        console.log(`  ✓ Updated: ${dutchTitle} → ${englishData.title}`)
      }
    }

    // English translations for Projects
    const projectsTranslations = {
      'Oude Fabriek Rotterdam': {
        title: 'Old Factory Rotterdam',
        description:
          'Complete dismantling of a former steel factory of 15,000m² including asbestos removal and earthworks.',
      },
      'Kantoorcomplex Zuidas': {
        title: 'Office Complex Zuidas',
        description:
          'Controlled demolition of a 12-story office building in an urban area with minimal disruption.',
      },
      'Winkelcentrum Renovatie': {
        title: 'Shopping Center Renovation',
        description:
          'Selective strip-out of 15,000m² retail space for redevelopment into a mixed-use complex.',
      },
      'Haventerrein Demontage': {
        title: 'Port Area Dismantling',
        description:
          'Dismantling of port cranes, silos, and storage warehouses on a former port site.',
      },
      'Woningbouwproject Den Haag': {
        title: 'Housing Project The Hague',
        description:
          'Demolition of outdated apartment blocks to make room for 200 new sustainable homes.',
      },
      'Ziekenhuis Renovatie': {
        title: 'Hospital Renovation',
        description:
          'Phased strip-out of hospital wings during operational occupancy of the building.',
      },
    }

    // Update Projects with English translations
    console.log('🔄 Updating Projects...')
    for (const [dutchTitle, englishData] of Object.entries(projectsTranslations)) {
      const existingProject = await payload.find({
        collection: 'projects',
        where: {
          title: {
            equals: dutchTitle,
          },
        },
        limit: 1,
      })

      if (existingProject.docs.length > 0) {
        await payload.update({
          collection: 'projects',
          id: existingProject.docs[0].id,
          locale: 'en',
          data: englishData,
        })
        console.log(`  ✓ Updated: ${dutchTitle} → ${englishData.title}`)
      }
    }

    // English translations for Blog Posts
    const blogPostsTranslations = {
      'Nieuwe VCA Certificering Behaald': {
        title: 'New VCA Certification Achieved',
      },
      'Duurzaam Slopen: 98% Recycling': {
        title: 'Sustainable Demolition: 98% Recycling',
      },
      'Project Spotlight: Kantoorcomplex Zuidas': {
        title: 'Project Spotlight: Office Complex Zuidas',
      },
    }

    // Update Blog Posts with English translations
    console.log('🔄 Updating Blog Posts...')
    for (const [dutchTitle, englishData] of Object.entries(blogPostsTranslations)) {
      const existingPost = await payload.find({
        collection: 'posts',
        where: {
          title: {
            equals: dutchTitle,
          },
        },
        limit: 1,
      })

      if (existingPost.docs.length > 0) {
        try {
          await payload.update({
            collection: 'posts',
            id: existingPost.docs[0].id,
            locale: 'en',
            data: {
              title: englishData.title,
            },
            context: {
              skipRevalidation: true,
            },
          })
          console.log(`  ✓ Updated: ${dutchTitle} → ${englishData.title}`)
        } catch (error: any) {
          if (error.message?.includes('static generation store missing')) {
            console.log(
              `  ⚠️ Skipped revalidation for: ${dutchTitle} (updated but revalidation failed - this is normal in scripts)`,
            )
          } else {
            throw error
          }
        }
      }
    }

    // Update Pages (Home page)
    console.log('🔄 Updating Pages...')
    const existingHomePage = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home',
        },
      },
      limit: 1,
    })

    if (existingHomePage.docs.length > 0) {
      try {
        await payload.update({
          collection: 'pages',
          id: existingHomePage.docs[0].id,
          locale: 'en',
          data: {
            title: 'Home',
          },
          context: {
            skipRevalidation: true,
          },
        })
        console.log(`  ✓ Updated Home page title for English locale`)
      } catch (error: any) {
        if (error.message?.includes('static generation store missing')) {
          console.log(`  ⚠️ Updated Home page but revalidation skipped (normal in scripts)`)
        } else {
          throw error
        }
      }
    }

    // Update Site Settings
    console.log('🔄 Updating Site Settings...')
    const existingSiteSettings = await payload.findGlobal({
      slug: 'site-settings',
    })

    if (existingSiteSettings) {
      try {
        await payload.updateGlobal({
          slug: 'site-settings',
          locale: 'en',
          data: {
            companyName: 'TitanBrekers',
            tagline: 'Professional Demolition Work with Power and Precision',
          },
          context: {
            skipRevalidation: true,
          },
        })
        console.log(`  ✓ Updated Site Settings for English locale`)
      } catch (error: any) {
        if (error.message?.includes('static generation store missing')) {
          console.log(`  ⚠️ Updated Site Settings but revalidation skipped (normal in scripts)`)
        } else {
          throw error
        }
      }
    }

    // Update Home Page Global
    console.log('🔄 Updating Home Page Global...')
    const existingHomePageGlobal = await payload.findGlobal({
      slug: 'home-page',
    })

    if (existingHomePageGlobal) {
      try {
        await payload.updateGlobal({
          slug: 'home-page',
          locale: 'en',
          data: {
            hero: {
              title: 'POWER IN',
              subtitle: 'DEMOLITION',
              description:
                'TitanBrekers is your reliable partner for professional demolition work. With more than 25 years of experience, we make room for your future.',
            },
            aboutPreview: {
              title: 'ABOUT TITANBREKERS',
              description:
                'With more than 25 years of experience, TitanBrekers has grown into one of the most respected demolition companies in the Netherlands. We combine craftsmanship with modern techniques for every type of demolition and dismantling project.',
            },
          },
          context: {
            skipRevalidation: true,
          },
        })
        console.log(`  ✓ Updated Home Page Global for English locale`)
      } catch (error: any) {
        if (error.message?.includes('static generation store missing')) {
          console.log(`  ⚠️ Updated Home Page Global but revalidation skipped (normal in scripts)`)
        } else {
          throw error
        }
      }
    }

    // Update Services Page Global
    console.log('🔄 Updating Services Page Global...')
    const existingServicesPageGlobal = await payload.findGlobal({
      slug: 'services-page',
    })

    if (existingServicesPageGlobal) {
      try {
        await payload.updateGlobal({
          slug: 'services-page',
          locale: 'en',
          data: {
            hero: {
              title: 'WHAT WE DO',
              description:
                'From small strip-outs to complete building demolition - we have the expertise, equipment, and certifications for every demolition and dismantling project.',
            },
          },
          context: {
            skipRevalidation: true,
          },
        })
        console.log(`  ✓ Updated Services Page Global for English locale`)
      } catch (error: any) {
        if (error.message?.includes('static generation store missing')) {
          console.log(
            `  ⚠️ Updated Services Page Global but revalidation skipped (normal in scripts)`,
          )
        } else {
          throw error
        }
      }
    }

    // Update About Page Global
    console.log('🔄 Updating About Page Global...')
    const existingAboutPageGlobal = await payload.findGlobal({
      slug: 'about-page',
    })

    if (existingAboutPageGlobal) {
      try {
        await payload.updateGlobal({
          slug: 'about-page',
          locale: 'en',
          data: {
            hero: {
              title: 'WHO WE ARE',
              description:
                'For more than 25 years, TitanBrekers has been the specialist in professional demolition work. With passion, craftsmanship, and modern equipment, we make room for the future.',
            },
            story: {
              title: 'OUR STORY',
            },
          },
          context: {
            skipRevalidation: true,
          },
        })
        console.log(`  ✓ Updated About Page Global for English locale`)
      } catch (error: any) {
        if (error.message?.includes('static generation store missing')) {
          console.log(`  ⚠️ Updated About Page Global but revalidation skipped (normal in scripts)`)
        } else {
          throw error
        }
      }
    }

    // Update Contact Page Global
    console.log('🔄 Updating Contact Page Global...')
    const existingContactPageGlobal = await payload.findGlobal({
      slug: 'contact-page',
    })

    if (existingContactPageGlobal) {
      try {
        await payload.updateGlobal({
          slug: 'contact-page',
          locale: 'en',
          data: {
            hero: {
              title: 'GET IN TOUCH',
              description:
                'Do you have a demolition or dismantling project? Feel free to contact us for a quote or advice. We respond within 24 hours.',
            },
            formSettings: {
              title: 'SEND A MESSAGE',
              subjects: [
                { value: 'offerte', label: 'Request Quote' },
                { value: 'informatie', label: 'Request Information' },
                { value: 'samenwerking', label: 'Partnership' },
                { value: 'anders', label: 'Other' },
              ],
            },
          },
          context: {
            skipRevalidation: true,
          },
        })
        console.log(`  ✓ Updated Contact Page Global for English locale`)
      } catch (error: any) {
        if (error.message?.includes('static generation store missing')) {
          console.log(
            `  ⚠️ Updated Contact Page Global but revalidation skipped (normal in scripts)`,
          )
        } else {
          throw error
        }
      }
    }

    console.log('🎉 English translations added successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error adding English translations:', error)
    process.exit(1)
  }
}

seedEnglishTranslations()
