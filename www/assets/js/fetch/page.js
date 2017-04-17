import contentfulClient from '../contentful-client';

export default function fetchPage({ id, store, error }) {
  return contentfulClient
    .getEntries({ 'sys.id': id })
    .then((response) => {
      if (response.items.length === 0) {
        return error({ statusCode: 404, message: 'Post not found' });
      }
      const fields = response.items[0].fields;
      store.commit('meta/set', fields);
      store.commit('page/setSections', fields.sections);
      return null;
    });
}
