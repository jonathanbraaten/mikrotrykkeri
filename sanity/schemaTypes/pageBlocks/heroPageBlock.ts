import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'heroPageBlock',
  type: 'object',
  fields: [
    defineField({
      name: 'heroTitle',
      type: 'string',
      description: 'Optional title for the hero.',
    }),
    defineField({
      name: 'heroDescription',
      type: 'text',
      description: 'Optional description for the hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'Alternative text for screen readers.',
        },
      ],
    }),
  ],
});
