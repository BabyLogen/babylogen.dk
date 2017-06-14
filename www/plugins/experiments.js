window.GoogleAnalyticsObject = 'ga';
window.ga = window.ga || function ga() {
  (window.ga.q = window.ga.q || []).push(arguments); //eslint-disable-line
};
window.ga.l = 1 * new Date();

// Only for static generated websites
function chooseVariant(experiment) {
  const localStorageKey = `experiment-${experiment.id}`;
  const local = localStorage.getItem(localStorageKey);
  if (local) {
    return local;
  }
  const index = Math.floor(Math.random() * experiment.variants.length);
  localStorage.setItem(localStorageKey, index);
  return index;
}

export default ({ store }) => {
  if (!window.ga) {
    return;
  }

  Object.keys(store.state.experiments).forEach((key) => {
    const experiment = store.state.experiments[key];

    // Only for static generated websites
    experiment.index = chooseVariant(experiment);

    window.ga('set', 'exp', `${experiment.id}.${experiment.index}`);
    console.log('experiment', `${experiment.id}.${experiment.index}`);
  });
};

