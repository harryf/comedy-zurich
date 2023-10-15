// schemas/comedyVenue.ts
export default {
    name: 'comedyVenue',
    type: 'document',
    title: 'Comedy Venue',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'shortDescription',
        type: 'text',
        title: 'Short Description',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address',
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
      }
    ]
  }
  