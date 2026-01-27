import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Demolition',
          value: 'demolition',
        },
        {
          label: 'Asbestos',
          value: 'asbestos',
        },
        {
          label: 'Renovation',
          value: 'renovation',
        },
        {
          label: 'Environmental',
          value: 'environmental',
        },
      ],
      defaultValue: 'demolition',
    },
    {
      name: 'completed',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'default',
        },
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
