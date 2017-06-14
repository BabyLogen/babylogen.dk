function generate(variants, id) {
  const index = Math.floor(Math.random() * variants.length);
  return {
    index,
    variant: variants[index],
    id,
  };
}

export function state() {
  return {
    contentBoxButtonType: generate(['ghost-primary', 'primary'], 'RGC3tbvER2qAOyK6zW6y7Q'),
  };
}

export const mutations = {};
