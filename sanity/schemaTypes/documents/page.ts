import { defineArrayMember, defineField, defineType } from 'sanity';
import { IoMdDocument } from 'react-icons/io';

export default defineType({
  name: 'page',
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
      description: 'The slug for the page. Read only.',
      readOnly: true,
    }),

    defineField({
      name: 'metaData',
      group: 'seo',
      type: 'metaDataEmbed',
    }),

    defineField({
      name: 'blocks',
      type: 'array',
      group: 'blocks',
      of: [defineArrayMember({ title: 'Hero Banner', type: 'heroPageBlock' })],
    }),
  ],
  initialValue: {
    slug: 'hjem',
  },
});
