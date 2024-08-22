import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Home Page',
  type: 'document',
  fields: [
    ///////////////////////////////////Custom Videos////////////////////////////
    defineField({
      name: 'videoPoster1',
      title: 'Custom Video 1 Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'customVideo1',
      title: 'Custom Video 1 File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),

    defineField({
      name: 'videoPoster2',
      title: 'Custom Video 2 Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'customVideo2',
      title: 'Custom Video 2 File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),

    /////////////////////////////////////// Custom Videos and thumbnails///////////////////////////////

    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'videoBgImage',
      title: 'Video Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'pricing_button',
      title: 'Pricing Button',
      type: 'string',
    }),
    defineField({
      name: 'book_call_button',
      title: 'Book a Call Button',
      type: 'string',
    }),
    defineField({
      name: 'SpanShow',
      title: 'Span Show',
      type: 'string',
    }),
    defineField({
      name: 'SpanReels',
      title: 'Span Reels',
      type: 'string',
    }),
    defineField({
      name: 'our',
      title: 'Our',
      type: 'string',
    }),
    defineField({
      name: 'spectacular',
      title: 'Spectacular',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'string',
    }),
    defineField({
      name: 'dummyPara',
      title: 'Dummy Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'backgroundSpan',
      title: 'Background Span',
      type: 'string',
    }),
    defineField({
      name: 'section4AIVideos',
      title: 'Section 4 AI Videos',
      type: 'string',
    }),

    /////////////////////////////section 4///////////////////////////////////
    defineField({
      name: 'section4Para1',
      title: 'Section 4 Paragraph 1',
      type: 'string',
    }),
    defineField({
      name: 'section4Para2',
      title: 'Section 4 Paragraph 2',
      type: 'string',
    }),
    defineField({
      name: 'section4Para3',
      title: 'Section 4 Paragraph 3',
      type: 'string',
    }),
    defineField({
      name: 'section4Btn',
      title: 'Section 4 Button',
      type: 'string',
    }),

    defineField({
      name: 'section4Img1',
      title: 'Section 4 Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section4Img2',
      title: 'Section 4 Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section4Img3',
      title: 'Section 4 Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    /////////////////////////////////////section5//////////////////////////////////////////
    defineField({
      name: 'section5title1',
      title: 'Section 5 Title 1',
      type: 'string',
    }),
    defineField({
      name: 'section5Desc1',
      title: 'Section 5 Description 1',
      type: 'text',
    }),
    defineField({
      name: 'section5title2',
      title: 'Section 5 Title 2',
      type: 'string',
    }),
    defineField({
      name: 'section5Desc2',
      title: 'Section 5 Description 2',
      type: 'text',
    }),
    defineField({
      name: 'section5title3',
      title: 'Section 5 Title 3',
      type: 'string',
    }),
    defineField({
      name: 'section5Desc3',
      title: 'Section 5 Description 3',
      type: 'text',
    }),
    defineField({
      name: 'section5title4',
      title: 'Section 5 Title 4',
      type: 'string',
    }),
    defineField({
      name: 'section5Desc4',
      title: 'Section 5 Description 4',
      type: 'text',
    }),
    defineField({
      name: 'section5title5',
      title: 'Section 5 Title 5',
      type: 'string',
    }),
    defineField({
      name: 'section5Desc5',
      title: 'Section 5 Description 5',
      type: 'text',
    }),
    defineField({
      name: 'section5title6',
      title: 'Section 5 Title 6',
      type: 'string',
    }),
    defineField({
      name: 'section5Desc6',
      title: 'Section 5 Description 6',
      type: 'text',
    }),

    /////////////////////////////////////section6//////////////////////////////////////////////////////
    defineField({
      name: 'section6Heading',
      title: 'Section 6 Heading',
      type: 'string',
    }),
    defineField({
      name: 'section6Para',
      title: 'Section 6 Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'section6Service1Head',
      title: 'Section 6 Service 1 Head',
      type: 'string',
    }),
    defineField({
      name: 'section6Service1Para',
      title: 'Section 6 Service 1 Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'section6Service2Head',
      title: 'Section 6 Service 2 Head',
      type: 'string',
    }),
    defineField({
      name: 'section6Service2Para',
      title: 'Section 6 Service 2 Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'section6Service3Head',
      title: 'Section 6 Service 3 Head',
      type: 'string',
    }),
    defineField({
      name: 'section6Service3Para',
      title: 'Section 6 Service 3 Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'section6Service4Head',
      title: 'Section 6 Service 4 Head',
      type: 'string',
    }),
    defineField({
      name: 'section6Service4Para',
      title: 'Section 6 Service 4 Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'section6Service5Head',
      title: 'Section 6 Service 5 Head',
      type: 'string',
    }),
    defineField({
      name: 'section6Service5Para',
      title: 'Section 6 Service 5 Paragraph',
      type: 'text',
    }),

    defineField({
      name: 'section6title1',
      title: 'Section 6 Title 1',
      type: 'string',
    }),
    defineField({
      name: 'section6Desc1',
      title: 'Section 6 Description 1',
      type: 'text',
    }),
    defineField({
      name: 'section6title2',
      title: 'Section 6 Title 2',
      type: 'string',
    }),
    defineField({
      name: 'section6Desc2',
      title: 'Section 6 Description 2',
      type: 'text',
    }),
    defineField({
      name: 'section6title3',
      title: 'Section 6 Title 3',
      type: 'string',
    }),
    defineField({
      name: 'section6Desc3',
      title: 'Section 6 Description 3',
      type: 'text',
    }),

    ///////////////////////////////////////section 08///////////////////////
    defineField({
      name: 'section8Head',
      title: 'Section 8 Head',
      type: 'string',
    }),
    defineField({
      name: 'section8Head1',
      title: 'Section 8 Head 1',
      type: 'text',
    }),

    defineField({
      name: 'section8title1',
      title: 'Section 8 Title 1',
      type: 'string',
    }),
    defineField({
      name: 'section8Desc1',
      title: 'Section 8 Description 1',
      type: 'text',
    }),
    defineField({
      name: 'section8title2',
      title: 'Section 8 Title 2',
      type: 'string',
    }),
    defineField({
      name: 'section8Desc2',
      title: 'Section 8 Description 2',
      type: 'text',
    }),
    defineField({
      name: 'section8title3',
      title: 'Section 8 Title 3',
      type: 'string',
    }),
    defineField({
      name: 'section8Desc3',
      title: 'Section 8 Description 3',
      type: 'text',
    }),
    defineField({
      name: 'section8title4',
      title: 'Section 8 Title 4',
      type: 'string',
    }),
    defineField({
      name: 'section8Desc4',
      title: 'Section 8 Description 4',
      type: 'text',
    }),
    defineField({
      name: 'section8title5',
      title: 'Section 8 Title 5',
      type: 'string',
    }),
    defineField({
      name: 'section8Desc5',
      title: 'Section 8 Description 5',
      type: 'text',
    }),

    ////////////////////////////////section 09//////////////////////////////////////
    defineField({
      name: 'section9Head',
      title: 'Section 9 Head',
      type: 'string',
    }),
    defineField({
      name: 'section9Head1',
      title: 'Section 9 Head 1',
      type: 'string',
    }),
    defineField({
      name: 'section9Para',
      title: 'Section 9 Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'section9Btn1',
      title: 'Section 9 Button 1',
      type: 'string',
    }),
    defineField({
      name: 'section9Btn2',
      title: 'Section 9 Button 2',
      type: 'string',
    }),

    ////////////////////////////////////section 10 //////////////////////////////////
    defineField({
      name: 'section10Head',
      title: 'Section 10 Heading',
      type: 'string',
    }),
    defineField({
      name: 'section10Para',
      title: 'Section 10 Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'section10Btn',
      title: 'Section 10 Button',
      type: 'string',
    }),
    defineField({
      name: 'section10Btn1',
      title: 'Section 10 Button 1',
      type: 'string',
    }),

    defineField({
      name: 'section10Title1',
      title: 'Section 10 Video Title 1',
      type: 'string',
    }),
    defineField({
      name: 'section10Title2',
      title: 'Section 10 Video Title 2',
      type: 'string',
    }),
    defineField({
      name: 'section10Title3',
      title: 'Section 10 Video Title 3',
      type: 'string',
    }),
    defineField({
      name: 'section10Title4',
      title: 'Section 10 Video Title 4',
      type: 'string',
    }),
    defineField({
      name: 'section10Title5',
      title: 'Section 10 Video Title 5',
      type: 'string',
    }),
    defineField({
      name: 'section10Title6',
      title: 'Section 10 Video Title 6',
      type: 'string',
    }),
    defineField({
      name: 'section10BrandName1',
      title: 'Section 10 Brand Name 1',
      type: 'string',
    }),
    defineField({
      name: 'section10BrandName2',
      title: 'Section 10 Brand Name 2',
      type: 'string',
    }),
    defineField({
      name: 'section10BrandName3',
      title: 'Section 10 Brand Name 3',
      type: 'string',
    }),
    defineField({
      name: 'section10BrandName4',
      title: 'Section 10 Brand Name 4',
      type: 'string',
    }),
    defineField({
      name: 'section10BrandName5',
      title: 'Section 10 Brand Name 5',
      type: 'string',
    }),
    defineField({
      name: 'section10BrandName6',
      title: 'Section 10 Brand Name 6',
      type: 'string',
    }),

    defineField({
      name: 'section10Poster1',
      title: 'Section 10 Poster 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section10Poster2',
      title: 'Section 10 Poster 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section10Poster3',
      title: 'Section 10 Poster 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section10Poster4',
      title: 'Section 10 Poster 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section10Poster5',
      title: 'Section 10 Poster 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section10Poster6',
      title: 'Section 10 Poster 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'section10Video1',
      title: 'Section 10 Video 1',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section10Video2',
      title: 'Section 10 Video 2',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section10Video3',
      title: 'Section 10 Video 3',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section10Video4',
      title: 'Section 10 Video 4',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section10Video5',
      title: 'Section 10 Video 5',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section10Video6',
      title: 'Section 10 Video 6',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),

    //////////////////////////////////section 11/////////////////////////////
    defineField({
      name: 'section11Head',
      title: 'Section 11 Heading',
      type: 'string',
    }),
    defineField({
      name: 'section11Para',
      title: 'Section 11 Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'section11Btn',
      title: 'Section 11 Button',
      type: 'string',
    }),
    defineField({
      name: 'section11Title1',
      title: 'Section 11 Video Title 1',
      type: 'string',
    }),
    defineField({
      name: 'section11Title2',
      title: 'Section 11 Video Title 2',
      type: 'string',
    }),
    defineField({
      name: 'section11Title3',
      title: 'Section 11 Video Title 3',
      type: 'string',
    }),
    defineField({
      name: 'section11Title4',
      title: 'Section 11 Video Title 4',
      type: 'string',
    }),
    defineField({
      name: 'section11Title5',
      title: 'Section 11 Video Title 5',
      type: 'string',
    }),
    defineField({
      name: 'section11Title6',
      title: 'Section 11 Video Title 6',
      type: 'string',
    }),
    defineField({
      name: 'section11BrandName1',
      title: 'Section 11 Brand Name 1',
      type: 'string',
    }),
    defineField({
      name: 'section11BrandName2',
      title: 'Section 11 Brand Name 2',
      type: 'string',
    }),
    defineField({
      name: 'section11BrandName3',
      title: 'Section 11 Brand Name 3',
      type: 'string',
    }),
    defineField({
      name: 'section11BrandName4',
      title: 'Section 11 Brand Name 4',
      type: 'string',
    }),
    defineField({
      name: 'section11BrandName5',
      title: 'Section 11 Brand Name 5',
      type: 'string',
    }),
    defineField({
      name: 'section11BrandName6',
      title: 'Section 11 Brand Name 6',
      type: 'string',
    }),

    defineField({
      name: 'section11Img1',
      title: 'Section 11 Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section11Img2',
      title: 'Section 11 Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section11Img3',
      title: 'Section 11 Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section11Img4',
      title: 'Section 11 Image 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section11Img5',
      title: 'Section 11 Image 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section11Img6',
      title: 'Section 11 Image 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'section11Video1',
      title: 'Section 11 Video 1',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section11Video2',
      title: 'Section 11 Video 2',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section11Video3',
      title: 'Section 11 Video 3',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section11Video4',
      title: 'Section 11 Video 4',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section11Video5',
      title: 'Section 11 Video 5',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'section11Video6',
      title: 'Section 11 Video 6',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),

    ///////////////////////////////////////section 12/////////////////////////////
    defineField({
      name: 'section12Head',
      title: 'Section 12 Heading',
      type: 'string',
    }),
    defineField({
      name: 'section12Span1',
      title: 'Section 12 Description 1',
      type: 'string',
    }),
    defineField({
      name: 'section12Span2',
      title: 'Section 12 Description 2',
      type: 'string',
    }),
    defineField({
      name: 'section12Span3',
      title: 'Section 12 Description 3',
      type: 'string',
    }),
    defineField({
      name: 'section12Span4',
      title: 'Section 12 Description 4',
      type: 'string',
    }),
    defineField({
      name: 'section12Span5',
      title: 'Section 12 Description 5',
      type: 'string',
    }),
    defineField({
      name: 'section12Span6',
      title: 'Section 12 Description 6',
      type: 'string',
    }),
    defineField({
      name: 'section12Head1',
      title: 'Section 12 Subheading 1',
      type: 'string',
    }),
    defineField({
      name: 'section12Span11',
      title: 'Section 12 Additional Description 1',
      type: 'string',
    }),
    defineField({
      name: 'section12Span22',
      title: 'Section 12 Additional Description 2',
      type: 'string',
    }),
    defineField({
      name: 'section12Span33',
      title: 'Section 12 Additional Description 3',
      type: 'string',
    }),
    defineField({
      name: 'section12Span44',
      title: 'Section 12 Additional Description 4',
      type: 'string',
    }),

    ////////////////////////////////Faq section (from components folder)///////////////////////
    defineField({
      name: 'faqHead',
      title: 'FAQ Heading',
      type: 'string',
    }),
    defineField({
      name: 'faqQ1',
      title: 'FAQ Question 1',
      type: 'string',
    }),
    defineField({
      name: 'faqA1',
      title: 'FAQ Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'faqQ2',
      title: 'FAQ Question 2',
      type: 'string',
    }),
    defineField({
      name: 'faqA2',
      title: 'FAQ Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'faqQ3',
      title: 'FAQ Question 3',
      type: 'string',
    }),
    defineField({
      name: 'faqA3',
      title: 'FAQ Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'faqQ4',
      title: 'FAQ Question 4',
      type: 'string',
    }),
    defineField({
      name: 'faqA4',
      title: 'FAQ Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'faqQ5',
      title: 'FAQ Question 5',
      type: 'string',
    }),
    defineField({
      name: 'faqA5',
      title: 'FAQ Answer 5',
      type: 'string',
    }),
    defineField({
      name: 'faqQ6',
      title: 'FAQ Question 6',
      type: 'string',
    }),
    defineField({
      name: 'faqA6',
      title: 'FAQ Answer 6',
      type: 'string',
    }),
    defineField({
      name: 'faqBtn1',
      title: 'FAQ Button 1',
      type: 'string',
    }),
    defineField({
      name: 'faqBtn2',
      title: 'FAQ Button 2',
      type: 'string',
    }),
  ],
})
