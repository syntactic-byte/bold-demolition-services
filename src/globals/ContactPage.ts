import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'NEEM CONTACT OP',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Heeft u een sloop- of demontageproject? Neem vrijblijvend contact met ons op voor een offerte of advies. Wij reageren binnen 24 uur.',
          localized: true,
        },
      ],
    },
    {
      name: 'formSettings',
      type: 'group',
      label: 'Contact Form Settings',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'STUUR EEN BERICHT',
          localized: true,
        },
        {
          name: 'subjects',
          type: 'array',
          label: 'Form Subject Options',
          defaultValue: [
            { value: 'offerte', label: 'Offerte aanvragen' },
            { value: 'informatie', label: 'Informatie aanvragen' },
            { value: 'samenwerking', label: 'Samenwerking' },
            { value: 'anders', label: 'Anders' },
          ],
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
