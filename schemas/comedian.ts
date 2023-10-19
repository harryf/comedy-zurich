// schemas/comedian.ts
import {FaLaughWink} from 'react-icons/fa'

export default {
    name: 'comedian',
    type: 'document',
    title: 'Comedian',
    icon: FaLaughWink,
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
        name: 'avatar',
        type: 'image',
        title: 'Avatar',
      },
      {
        name: 'bio',
        type: 'text',
        title: 'Bio',
      },
      {
        name: 'photos',
        type: 'array',
        of: [{ type: 'image' }],
        title: 'Photos',
      },
      {
        name: 'additionalLinks',
        type: 'array',
        of: [{ type: 'url' }],
        title: 'Links to Website, Socials, etc.',
      },
    ]
  }
  