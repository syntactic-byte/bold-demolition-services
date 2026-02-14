import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  heroImage: Media
  blockImage: Media
  author: User
}

export const post5: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'asbest-verwijdering-veiligheid',
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
                text: 'Asbest is een van de gevaarlijkste materialen bij sloopwerk. Professionele verwijdering is essentieel voor uw gezondheid en veiligheid.',
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
                text: 'Voordelen van Professionele Asbestsanering',
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
                text: '✓ BRL SVS-001 gecertificeerde vakmensen\n✓ Strikte veiligheidsprotocollen en PBM\n✓ Hermetische afzetting met onderdruksysteem\n✓ Natte verwijdering om vezels te binden\n✓ Grondige reiniging en luchtmetingen\n✓ Complete documentatie en verwerkingsbewijzen',
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
                text: 'Gevaren van Zelf Asbest Verwijderen',
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
                text: '✗ Levensgevaarlijke longziekten (asbestose, kanker)\n✗ Wetenschappelijk bewezen: geen veilige grenswaarde\n✗ Besmetting van woning en spullen\n✗ Gevaar voor gezinsleden en omwonenden\n✗ Wettelijk verboden zonder certificering\n✗ Geen verzekering dekt asbestschade',
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
                text: 'Ons Saneringsproces',
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
                text: 'Stap 1: Inventarisatie en risicoanalyse\nStap 2: Aanvraag vergunningen bij gemeente\nStap 3: Hermetische afzetting werkgebied\nStap 4: Natte verwijdering en direct sealen\nStap 5: Reiniging met HEPA-stofzuigers\nStap 6: Luchtmetingen en oplevering',
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
                text: 'Waar Kan Asbest Voorkomen?',
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
                text: 'Asbest werd veel gebruikt tussen 1940-1993 in:\n✓ Golfplaten op daken en schuren\n✓ Tegellijm en vloertegels\n✓ Kitvoegen en voegspecie\n✓ Isolatie om leidingen\n✓ Brandwerende coatings\n✓ Asbestcement buizen',
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
        'Professionele gids voor veilige asbestverwijdering. Lees over gezondheidsrisicos, wettelijke eisen, veiligheidsprocedures en certificeringen.',
      image: heroImage.id,
      title: 'Veilige Asbestverwijdering: Professionele Gids',
    },
    relatedPosts: [],
    title: 'Veilige Asbestverwijdering: Professionele Gids',
  }
}
