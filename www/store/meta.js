export function state() {
  return {
    title: 'BabyTeamet',
    description: 'Få kompetent og ærlig vejledning af specialister før, under og efter graviditeten.',
  };
}

export const mutations = {
  set(currentState, meta) {
    currentState.title = meta.title ? `${meta.title} | BabyTeamet` : 'BabyTeamet';
    currentState.description = meta.description || '';
  },
};
