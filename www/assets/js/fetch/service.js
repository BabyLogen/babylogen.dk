import contentfulClient from '../contentful-client';

export default function fetchService({ id, store, error }) {
  return contentfulClient
    .getEntries({ 'sys.id': id })
    .then((response) => {
      if (response.items.length === 0) {
        return error({ statusCode: 404, message: 'Service not found' });
      }
      const service = response.items[0];
      store.commit('meta/set', service.fields);
      store.commit('page/set', service);
      return null;
    });
}
