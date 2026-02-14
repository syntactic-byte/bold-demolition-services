import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  heroImage: Media
  blockImage: Media
  author: User
}

export const post6: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'duurzaam-sloopwerk',
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
                text: 'Duurzaamheid is geen trend meer, maar een noodzaak. Bij TitanBreakers recyclen wij 98% van alle sloopmaterialen en streven naar CO2-neutraliteit.',
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
                text: 'Voordelen van Duurzaam Sloopwerk',
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
                text: '✓ 98% recyclingpercentage van sloopmaterialen\n✓ Significante CO2-besparing door hergebruik\n✓ Materiaalscheiding op de bouwplaats\n✓ Samenwerking met gecertificeerde verwerkers\n✓ Grondstoffen voor nieuwe producten\n✓ Bijdrage aan circulaire economie',
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
                text: 'Nadelen van Traditionele Sloop',
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
                text: '✗ Slechts 40-60% recycling via traditionele methoden\n✗ Grote hoeveelheden bouwafval op stortplaatsen\n✗ Verlies van waardevolle grondstoffen\n✗ Hoge CO2-uitstoot door productie nieuwe materialen\n✗ Vermenging van materialen maakt recycling moeilijk\n✗ Geen aandacht voor hergebruik van complete elementen',
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
                text: 'Onze Materiaalstromen',
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
                text: '✓ Hout: biomassa en nieuwe plaatmaterialen\n✓ Beton: granulaat voor wegenbouw\n✓ Metaal: recycling naar staal- en aluminiumproducten\n✓ Kunststof: nieuwe producten en verpakkingen\n✓ Glas: nieuw glas en isolatiemateriaal\n✓ Gips: nieuwe gipsplaten en grondstabilisator',
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
                text: 'Circulair Bouwen: De Toekomst',
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
                text: 'Wij gaan verder dan alleen recyclen. Met 3D-scanning inventariseren we materialen voor hergebruik. Deuren, kozijnen en sanitair krijgen een tweede leven via marktplaatsen voor gebruikte bouwmaterialen. Dit is next-level circulair bouwen.',
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
        'Ontdek alles over duurzaam sloopwerk. Lees hoe wij 98% van onze materialen recycleren en bijdragen aan een circulaire economie.',
      image: heroImage.id,
      title: 'Duurzaam Sloopwerk: Bouw Mee aan een Groenere Toekomst',
    },
    relatedPosts: [],
    title: 'Duurzaam Sloopwerk: Bouw Mee aan een Groenere Toekomst',
  }
}
