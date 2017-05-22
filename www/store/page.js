export function state() {
  return {
    fields: {},
    sys: {},
  };
}

export const mutations = {
  set(currentState, page) {
    currentState.fields = page.fields;
    currentState.sys = page.sys;
  },
};
