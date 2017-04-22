import contentfulClient from '../contentful-client';

export default function fetchItem({ id }) {
  return contentfulClient
    .getEntries({ 'sys.id': id })
    .then(response => response.items[0]);
}
