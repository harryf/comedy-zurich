// schemas/comedyVenue.ts
import {FaBuilding} from 'react-icons/fa'

export default {
    name: 'comedyVenue',
    type: 'document',
    title: 'Comedy Venue',
    icon: FaBuilding,
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
        name: 'address',
        type: 'string',
        title: 'Address',
      },
      {
        name: 'gmapslink',
        type: 'url',
        title: 'Google Maps Link',
        description: 'Link to the location from Google Maps',
      },
      {
        name: 'gettingThere',
        type: 'text',
        title: 'Getting there',
        description: 'Clues for how to get there e.g. "2 mins from Central"',
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
        name: 'venuePhotos',
        type: 'array',
        of: [{ type: 'image' }],
        title: 'Photos from Previous Shows',
      },
    ]
  }
  