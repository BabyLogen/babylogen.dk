import contentfulClient from '../contentful-client';

export default function fetchPage({ id, store, error }) {
  return contentfulClient
    .getEntries({ 'sys.id': id, include: 5 })
    .then((response) => {
      if (response.items.length === 0) {
        return error({ statusCode: 404, message: 'Post not found' });
      }
      let mainIdUsed = false;
      const circularRemover = JSON.stringify(response.items[0], (key, value) => {
        if (
          typeof value === 'object' &&
          value !== null &&
          value.sys &&
          (mainIdUsed || value.sys.id !== id) &&
          value.sys.contentType &&
          value.sys.contentType.sys &&
          value.sys.contentType.sys.id === 'page'
        ) {
          return {
            sys: {
              id: value.sys.id,
            },
            fields: {
              path: value.fields.path,
            },
          };
        }
        if (
          typeof value === 'object' &&
          value !== null &&
          value.sys &&
          value.sys.id === id
        ) {
          mainIdUsed = true;
        }
        return value;
      });
      const page = JSON.parse(circularRemover);
      store.commit('meta/set', page.fields);
      store.commit('page/set', page);
      return null;
    });
}
