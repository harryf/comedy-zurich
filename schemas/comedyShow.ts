// schemas/comedyShow.ts
import {FaMicrophoneAlt} from 'react-icons/fa'

export default {
    name: 'comedyShow',
    type: 'document',
    title: 'Comedy Shows',
    icon: FaMicrophoneAlt,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => [
          Rule.required().min(10).error('A title of min. 10 characters is required'),
          Rule.max(50).warning('Shorter titles are usually better')
        ],
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description: 'Makes a good URL for search engines e.g. https://comedy-zurich/comedy-brew - here "comedy-brew" is the slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        name: 'shortDescription',
        type: 'text',
        title: 'Short Description for Previews',
        rows: 2,
        description: 'This text is only used when the link is shared like on WhatsApp',
        validation: Rule => [
          Rule.max(255).error('Max 255 characters')
        ],
      },
      {
        name: 'fullDescription',
        title: 'Full Description',
        type: 'array', 
        of: [{type: 'block'}],
        description: 'The text editor allows advanced formating like links and headers'
      },
      {
        name: 'comedyPromoter',
        type: 'reference',
        to: [{type: 'comedyPromoter'}],
        title: 'Promoter',
        description: 'The organiser / promoter of this event'
      },
      {
        name: 'showTimes',
        title: 'Show Times',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'showTimes' }], weak: true }],
        description: 'A comedy show can have multiple times if needed',
      },
      {
        name: 'host',
        title: 'Host',
        description: 'The normal host of this show',
        type: 'reference',
        to: [{type: 'comedian'}],
        description: 'Who\'s hosting this show (optional)'
      },
      {
        name: 'performers',
        title: 'Performers',
        description: 'Comedians on the lineup - drag to sort by order of appearance',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'comedian' }] }]
      },
      {
        name: 'comedyVenue',
        title: 'Comedy Venue',
        description: 'The normal venue for this show',
        type: 'reference',
        to: [{ type: 'comedyVenue' }]
      },
      {
        name: 'showType',
        type: 'reference',
        to: [{type: 'showType'}],
        title: 'Type of Show'
      },
      {
        name: 'bannerHorizontal',
        type: 'image',
        title: 'Horizontal Banner (1920x1080)'
      },
      {
        name: 'bannerSquare',
        type: 'image',
        title: 'Square Banner (1080x1080)'
      },
      {
        name: 'bannerVertical',
        type: 'image',
        title: 'Vertical Banner (1080x1920)'
      },
    ]
  }
  