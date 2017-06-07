export function state() {
  return {
    title: 'BabyLogen',
    description: '',
  };
}

export const mutations = {
  set(currentState, meta) {
    currentState.title = meta.title ? `${meta.title} | BabyLogen` : 'BabyLogen';
    currentState.description = meta.description || '';
  },
};
