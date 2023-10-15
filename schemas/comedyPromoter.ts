// schemas/comedyPromoter.ts
export default {
    name: 'comedyPromoter',
    type: 'document',
    title: 'Comedy Promoter',
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
        name: 'logo',
        type: 'image',
        title: 'Logo',
      },
      {
        name: 'additionalLinks',
        type: 'array',
        of: [{ type: 'url' }],
        title: 'Links to More Information',
      }
    ]
  }
  