import type { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
  label: 'Diensten Page',
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'WAT WIJ DOEN',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Van kleine stripwerken tot complete gebouwsloop - wij hebben de expertise, het materieel en de certificeringen voor elk sloop- en demontageproject.',
        },
      ],
    },
    {
      name: 'serviceDetails',
      type: 'array',
      label: 'Detailed Service Information',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
