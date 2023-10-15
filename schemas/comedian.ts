// schemas/comedian.ts
export default {
    name: 'comedian',
    type: 'document',
    title: 'Comedian',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
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
      }
    ]
  }
  