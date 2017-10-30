import contentfulClient from '../contentful-client';

export default function fetchCommingEvents(limit = 8) {
  return contentfulClient
    .getEntries({
      content_type: 'event',
      order: 'fields.startDate',
      limit,
      'fields.startDate[gte]': new Date(),
    })
    .then(response => response.items);
}
