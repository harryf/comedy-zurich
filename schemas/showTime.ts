// schemas/showTimes.ts
import {FaCalendarDay} from 'react-icons/fa'
import moment from "moment";

export default {
    name: 'showTimes',
    type: 'document',
    title: 'Show Times',
    icon: FaCalendarDay,
    fields: [
      {
        name: 'Show',
        type: 'string',
        title: 'Name and date of show',
      },
      {
        name: 'showDate',
        type: 'date',
        title: 'Date of Event',
        validation: Rule => Rule.required().min('2022-03-01T15:00:00.000Z')
      },
      {
        name: 'doorsOpen',
        type: 'datetime',
        title: 'Doors Opening Time',
        description: 'Time the doors open (option)',
      },
      {
        name: 'displayDoorsOpen',
        type: 'boolean',
        title: 'Display Doors Opening Time',
        initialValue: true,
      },
      {
        name: 'showBegins',
        type: 'datetime',
        title: 'Show Begins Time'
      },
      {
        name: 'showEnds',
        type: 'datetime',
        title: 'Show Ends Time'
      },
      {
        name: 'ticketLink',
        type: 'url',
        title: 'Ticket Link'
      },
      {
        name: 'comedyVenue',
        title: 'Comedy Venue',
        description: 'Set a venue if this show will be at a different venue to the normal one',
        type: 'reference',
        to: [{ type: 'comedyVenue' }]
      },
      {
        name: 'host',
        title: 'Host',
        description: 'Set a host if this show will is hosted by a different comedian to normal',
        type: 'reference',
        to: [{type: 'comedian'}],
      },
    ],
    initialValue: () => ({
        showDate: moment().add(7, 'd'),
        doorsOpen: moment().add(7, 'd').hour(19).minute(30),
        showBegins: moment().add(7, 'd').hour(20).minute(0),
        showEnds: moment().add(7, 'd').hour(22).minute(0),
      }),
  };
  