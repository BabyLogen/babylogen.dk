import contentfulClient from '../contentful-client';

export default function fetchPage({ id, store, error }) {
  return contentfulClient
    .getEntries({ 'sys.id': id, include: 2 })
    .then((response) => {
      if (response.items.length === 0) {
        return error({ statusCode: 404, message: 'Post not found' });
      }
      const page = response.items[0];
      store.commit('meta/set', page.fields);
      store.commit('page/set', page);
      return null;
    });
}
