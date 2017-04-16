export const state = {
  title: 'BabyLogen',
  description: '',
};

export const mutations = {
  setMeta(currentState, meta) {
    currentState.title = meta.title ? `${meta.title} | BabyLogen` : 'BabyLogen';
    currentState.description = meta.description || '';
  },
};
