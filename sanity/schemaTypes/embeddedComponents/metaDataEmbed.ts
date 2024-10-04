import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'metaDataEmbed',
  type: 'object',
  fields: [
    defineField({
      name: 'metaDescription',
      type: 'text',
      description: 'The meta description will be used for the meta description and SEO.',
    }),
    defineField({
      name: 'metaImage',
      type: 'image',
      description: 'The meta image will be used for SEO and Social Sharing.',
    }),
  ],
});
