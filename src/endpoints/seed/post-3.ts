import { RequiredDataFromCollectionSlug } from 'payload'
import type { PostArgs } from './post-1'

export const post3: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: '25-jaar-titanbreakers',
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
                text: 'Dit jaar vieren wij een bijzondere mijlpaal: 25 jaar TitanBreakers! Van een klein familiebedrijf zijn wij uitgegroeid tot een toonaangevend demontagebedrijf.',
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
                text: 'Waarom Kiezen voor TitanBreakers?',
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
                text: '✓ 25 jaar ervaring in sloop en demontage\n✓ Gecertificeerd en volledig verzekerd\n✓ 98% recyclingpercentage\n✓ Snelle en professionele service\n✓ Landelijke dekking met lokale vestigingen\n✓ 24/7 beschikbaar voor spoedopdrachten',
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
                text: 'Onze Belangrijkste Mijlpalen',
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
                text: '1999: Oprichting van TitanBreakers\n2005: Eerste grote industriële projecten\n2008: Alle benodigde certificeringen behaald\n2015: Introductie duurzaam circulair concept\n2018: Nationale Bouwprijs voor Duurzaamheid\n2024: 25-jarig jubileum met 10.000+ projecten',
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
                text: 'Toekomstvisie: Duurzaam Groeien',
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
                text: 'Onze ambities voor de komende jaren:\n✓ 100% CO2-neutrale operaties in 2030\n✓ Uitbreiding naar België en Duitsland\n✓ Verdere automatisering en robotisering\n✓ Eigen opleidingscentrum voor talent\n✓ Doorgroeien naar 200 medewerkers',
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
        'Vier met ons mee 25 jaar TitanBreakers! Lees over onze groei van familiebedrijf naar nationaal sloopbedrijf en onze toekomstvisie.',
      image: heroImage.id,
      title: '25 Jaar TitanBreakers: Onze Inspirerende Reis',
    },
    relatedPosts: [],
    title: '25 Jaar TitanBreakers: Onze Inspirerende Reis',
  }
}
