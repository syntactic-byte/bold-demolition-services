import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'KRACHT IN',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'SLOOPWERK',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'TitanBrekers is uw betrouwbare partner voor professioneel sloop- en demontagewerk. Met meer dan 25 jaar ervaring maken wij ruimte voor uw toekomst.',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Background Image',
        },
        {
          name: 'ctaButtons',
          type: 'array',
          label: 'Call-to-Action Buttons',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'style',
              type: 'select',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
              ],
            },
          ],
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Statistics',
          fields: [
            {
              name: 'number',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            {
              name: 'icon',
              type: 'text',
              admin: {
                description: 'Lucide icon name (e.g., Clock, Shield, Award)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'aboutPreview',
      type: 'group',
      label: 'About Preview Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'OVER TITANBREKERS',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Met meer dan 25 jaar ervaring is TitanBrekers uitgegroeid tot een van de meest gerespecteerde sloopbedrijven van Nederland. Wij combineren vakmanschap met moderne technieken voor elk type sloop- en demontageproject.',
        },
        {
          name: 'highlights',
          type: 'array',
          label: 'Highlights',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
