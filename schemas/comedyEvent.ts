// schemas/comedyEvent.ts
export default {
    name: 'comedyEvent',
    type: 'document',
    title: 'Comedy Events',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'shortDescription',
        type: 'text',
        title: 'Short Description for Previews'
      },
      {
        name: 'fullDescription',
        type: 'text',
        title: 'Full Description'
      },
      {
        name: 'comedyPromoter',
        type: 'reference',
        to: [{type: 'comedyPromoter'}],
        title: 'Promoter'
      },
      {
        name: 'showType',
        type: 'reference',
        to: [{type: 'showType'}],
        title: 'Type of Show'
      },
      {
        name: 'startDate',
        type: 'datetime',
        title: 'Start Date of Event'
      },
      {
        name: 'endDate',
        type: 'datetime',
        title: 'End Date of Event'
      },
      // Additional fields like door opening time, show begin and end times, banner images, etc.
    ]
  }
  