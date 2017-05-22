export const state = {
  fields: {},
  sys: {},
};

export const mutations = {
  set(currentState, page) {
    currentState.fields = page.fields;
    currentState.sys = page.sys;
  },
};
