// schemas/comedyPromoter.ts
import {FaDiagnoses} from 'react-icons/fa'

export default {
    name: 'comedyPromoter',
    type: 'document',
    title: 'Comedy Promoter',
    icon: FaDiagnoses,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description: 'Makes a good URL for search engines e.g. https://comedy-zurich/comedy-brew - here "comedy-brew" is the slug',
        options: {
          source: 'name',
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
        title: 'Short Description',
        rows: 2,
      },
      {
        name: 'logo',
        type: 'image',
        title: 'Logo',
      },
      {
        name: 'additionalLinks',
        type: 'array',
        of: [{ type: 'url' }],
        title: 'Links to More Information',
      },
      {
        name: 'promoterPhotos',
        type: 'array',
        of: [{ type: 'image' }],
        title: 'Promoter Photos',
      },
    ]
  }
  