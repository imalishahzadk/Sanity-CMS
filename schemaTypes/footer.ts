import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footerSection',
  title: 'Footer Section',
  type: 'document',
  fields: [
    defineField({
      name: 'Ques',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'qHead',
      title: 'Question Header',
      type: 'string',
    }),
    defineField({
      name: 'qPara1',
      title: 'Question Paragraph 1',
      type: 'text',
    }),
    defineField({
      name: 'qPara2',
      title: 'Question Paragraph 2',
      type: 'text',
    }),
    defineField({
      name: 'qBtn1',
      title: 'Question Button 1',
      type: 'string',
    }),
    defineField({
      name: 'qBtn2',
      title: 'Question Button 2',
      type: 'string',
    }),
    defineField({
      name: 'qlink1',
      title: 'Question Link 1',
      type: 'string',
    }),
    defineField({
      name: 'qlink2',
      title: 'Question Link 2',
      type: 'string',
    }),
    defineField({
      name: 'qlink3',
      title: 'Question Link 3',
      type: 'string',
    }),
    defineField({
      name: 'qlink4',
      title: 'Question Link 4',
      type: 'string',
    }),
    defineField({
      name: 'socialHead',
      title: 'Social Media Headline',
      type: 'string',
    }),
    defineField({
      name: 'socialBtn',
      title: 'Social Media Button',
      type: 'string',
    }),
    defineField({
      name: 'socialDiv',
      title: 'Social Media',
      type: 'string',
    }),
  ],
})
