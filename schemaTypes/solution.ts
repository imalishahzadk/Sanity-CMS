import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'solutionPage',
  title: 'Solution Page',
  type: 'document',
  fields: [
    /////////////////////////////////// Video Content ////////////////////////////////
    defineField({
      name: 'solutionVideo1Poster',
      title: 'Solution Video 1 Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'solutionVideo1File',
      title: 'Solution Video 1 File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),


    /////////////////////////////////////// Page Content /////////////////////////////////
    defineField({
      name: 'solutionHeading',
      title: 'Solution Heading',
      type: 'string',
    }),
    defineField({
      name: 'solutionDescription',
      title: 'Solution Description',
      type: 'text',
    }),
    /////////////////////////////////// Service Category 1 ////////////////////////////////
    defineField({
      name: 'serviceCategory1Heading',
      title: 'Service Category 1 Heading',
      type: 'string',
    }),

    defineField({
      name: 'serviceCategory1List',
      title: 'Service Category 1 List',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    /////////////////////////////////// Service Category 2 ////////////////////////////////
    defineField({
      name: 'serviceCategory2Heading',
      title: 'Service Category 2 Heading',
      type: 'string',
    }),

    defineField({
      name: 'serviceCategory2List',
      title: 'Service Category 2 List',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    /////////////////////////////////// Service Category 3 ////////////////////////////////
    defineField({
      name: 'serviceCategory3Heading',
      title: 'Service Category 3 Heading',
      type: 'string',
    }),

    defineField({
      name: 'serviceCategory3List',
      title: 'Service Category 3 List',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    /////////////////////////////////// Service Category 4 ////////////////////////////////
    defineField({
      name: 'serviceCategory4Heading',
      title: 'Service Category 4 Heading',
      type: 'string',
    }),

    defineField({
      name: 'serviceCategory4List',
      title: 'Service Category 4 List',
      type: 'array',
      of: [{ type: 'string' }],
    }),



  ],
})
