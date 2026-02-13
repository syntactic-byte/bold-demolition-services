#!/usr/bin/env node
/**
 * Image Setup Script for Hand Demolition Work
 *
 * This script downloads appropriate placeholder images from Unsplash
 * that reflect indoor/hand demolition work with hammers and hand tools.
 */

import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDir = path.join(__dirname, 'public')

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// Image configurations with Unsplash IDs for hand demolition work
const images = [
  {
    filename: 'hero-demolition.jpg',
    url: 'https://images.unsplash.com/photo-1589939700024-31e04597f944?w=1920&q=80', // Construction worker with hammer
    alt: 'Hand demolition work with hammers and tools',
    description: 'Hero image showing worker doing manual demolition',
  },
  {
    filename: 'project-1.jpg',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', // Construction site interior
    alt: 'Interior demolition project - kitchen removal',
    description: 'Kitchen demolition project',
  },
  {
    filename: 'project-2.jpg',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6f5c76?w=800&q=80', // Worker with tools
    alt: 'Manual demolition with hand tools',
    description: 'Hand tool demolition work',
  },
  {
    filename: 'project-3.jpg',
    url: 'https://images.unsplash.com/photo-1590644365607-1c5a519e7b37?w=800&q=80', // Construction interior
    alt: 'Interior wall demolition',
    description: 'Interior wall removal project',
  },
  {
    filename: 'service-manual.jpg',
    url: 'https://images.unsplash.com/photo-1589939700024-31e04597f944?w=800&q=80', // Worker with hammer
    alt: 'Manual demolition with hammer',
    description: 'Manual demolition service',
  },
  {
    filename: 'service-interior.jpg',
    url: 'https://images.unsplash.com/photo-1581858726788-75bc0f5a8b2a?w=800&q=80', // Interior renovation
    alt: 'Interior strip-out work',
    description: 'Interior demolition service',
  },
  {
    filename: 'service-selective.jpg',
    url: 'https://images.unsplash.com/photo-1565514020132-6c74297ab83d?w=800&q=80', // Selective demolition
    alt: 'Selective demolition preserving structure',
    description: 'Selective demolition work',
  },
  {
    filename: 'about-team.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', // Construction workers
    alt: 'TitanBrekers demolition team',
    description: 'Our experienced team',
  },
]

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(publicDir, filename)

    // Check if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`  ↻ Already exists: ${filename}`)
      resolve(filepath)
      return
    }

    const file = fs.createWriteStream(filepath)

    https
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          // Follow redirect
          https
            .get(response.headers.location, (redirectResponse) => {
              redirectResponse.pipe(file)
              file.on('finish', () => {
                file.close()
                console.log(`  ✓ Downloaded: ${filename}`)
                resolve(filepath)
              })
            })
            .on('error', reject)
        } else {
          response.pipe(file)
          file.on('finish', () => {
            file.close()
            console.log(`  ✓ Downloaded: ${filename}`)
            resolve(filepath)
          })
        }
      })
      .on('error', (err) => {
        fs.unlink(filepath, () => {})
        console.error(`  ✗ Failed: ${filename} - ${err.message}`)
        reject(err)
      })
  })
}

async function downloadAllImages() {
  console.log('📸 Downloading demolition images...\n')

  for (const img of images) {
    try {
      await downloadImage(img.url, img.filename)
    } catch (error) {
      console.error(`  Error downloading ${img.filename}:`, error.message)
    }
  }

  console.log('\n✅ Image download complete!')
  console.log('\n📝 Alternative image sources:')
  console.log('   - Unsplash: https://unsplash.com/search/construction-demolition')
  console.log('   - Pexels: https://www.pexels.com/search/demolition/')
  console.log('   - Pixabay: https://pixabay.com/images/search/demolition/')
  console.log('\n📌 Recommended search terms:')
  console.log('   - "interior demolition"')
  console.log('   - "manual demolition"')
  console.log('   - "demolition hammer"')
  console.log('   - "construction worker tools"')
  console.log('   - "renovation interior"')
}

downloadAllImages().catch(console.error)
