import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  heroImage: Media
  blockImage: Media
  author: User
}

export const post4: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'badkamer-sloop-guide',
    _status: 'published',
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Een badkamerrenovatie begint altijd met professionele sloop. Deze gids legt alles uit over veilig en efficiënt badkamersloopwerk.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Voordelen van Professionele Badkamer Sloop',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '✓ Veilig afkappen van waterleidingen en afvoeren\n✓ Juiste afhandeling van elektra en vloerverwarming\n✓ Professionele asbestinventarisatie\n✓ Bescherming van vloeren en wanden\n✓ Afvalscheiding met minimaal 90% recycling\n✓ Veegklaar opleveren voor nieuwbouw',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Risicos van Zelf Slopen',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '✗ Waterschade door verkeerd afgekapt leidingwerk\n✗ Elektrische schokken en brandgevaar\n✗ Asbestexpositie zonder juiste bescherming\n✗ Beschadiging van onderliggende constructies\n✗ Verstopte afvoeren door puin\n✗ Geen garantie bij problemen',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Stap-voor-Stap Sloopproces',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Stap 1: Afsluiten water en elektra\nStap 2: Verwijderen sanitair (wc, wastafel, douche, bad)\nStap 3: Slopen tegelwanden en tegelvloeren\nStap 4: Demonteren badmeubels en spatschermen\nStap 5: Veilig afkappen leidingen\nStap 6: Grondige schoonmaak en oplevering',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: blockImage.id,
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Kosten en Doorlooptijd',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Een standaard badkamer (ca. 8m²) kost tussen €600 en €1.800 om professioneel te slopen. De werkzaamheden duren doorgaans 1-2 dagen, afhankelijk van de complexiteit en aanwezigheid van tegels.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description:
        'Complete gids voor professionele badkamersloop. Lees alles over veiligheid, het sloopproces stap-voor-stap en duurzame afvalverwerking.',
      image: heroImage.id,
      title: 'Professionele Badkamer Sloop: Stap-voor-Stap Gids',
    },
    relatedPosts: [],
    title: 'Professionele Badkamer Sloop: Stap-voor-Stap Gids',
  }
}
