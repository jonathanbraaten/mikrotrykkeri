import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Forside',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'content', title: 'Content' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'seo',
      description: 'The title will be used for the title tag and SEO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaImage',
      type: 'image',
      description: 'The image will be used in the meta image for SEO and Social Sharing',
      options: { hotspot: true },
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      group: 'seo',
      description: 'The description will be used for the meta description and SEO',
    }),
  ],
});
