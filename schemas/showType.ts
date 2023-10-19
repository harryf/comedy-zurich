// schemas/showType.ts
export default {
    name: 'showType',
    type: 'document',
    title: 'Show Type',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Type',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array', 
        of: [{type: 'block'}],
      },
    ]
  }
  