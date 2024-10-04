import { defineField, defineType } from 'sanity';
import { IoMdDocument } from 'react-icons/io';

export default defineType({
  name: 'about',
  type: 'document',
  icon: IoMdDocument,
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'blocks', title: 'Page Blocks' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
      description: 'The title for the page.',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      description: 'The slug for the page. Do not modify.',
    }),

    defineField({
      name: 'metaData',
      group: 'seo',
      type: 'metaDataEmbed',
    }),

    defineField({
      name: 'content',
      type: 'fullPortableText',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return { title };
    },
  },
});
