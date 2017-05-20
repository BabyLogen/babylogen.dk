import contentfulClient from '../contentful-client';

export default function fetchCommingEvents() {
  return contentfulClient
    .getEntries({
      content_type: 'event',
      order: 'fields.startDate',
      limit: 7,
      'fields.startDate[gte]': new Date(),
    })
    .then(response => response.items);
}