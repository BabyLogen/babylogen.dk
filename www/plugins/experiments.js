// Google Analytics boilerplate to make sure it works all the time
window.GoogleAnalyticsObject = 'ga';
window.ga = window.ga || function ga() {
  (window.ga.q = window.ga.q || []).push(arguments); //eslint-disable-line
};
window.ga.l = 1 * new Date();

// Hotjar boilerplate
window.hj = window.hj || function hj() {
  (window.hj.q = window.hj.q || []).push(arguments); //eslint-disable-line
};

// Only for static generated websites
function chooseVariant(experiment) {
  const localStorageKey = `experiment-${experiment.id}`;

  // If a valid index is stored in localStorage then use it
  const localIndex = localStorage.getItem(localStorageKey);
  if (
    localIndex &&
    localIndex < experiment.variants.length // Make sure index is within range
  ) {
    return localIndex;
  }

  // Choose random index
  const index = Math.floor(Math.random() * experiment.variants.length);

  // Save experiment index in localStorage to make sure user will always
  // be displayed the same variant
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

    // Send data to Google
    window.ga('set', 'exp', `${experiment.id}.${experiment.index}`);

    // Tag HotJar recordings.
    window.hj('tagRecording', `${experiment.id}.${experiment.index}`);
    // Heatmap
    window.hj('trigger', `${experiment.id}.${experiment.index}`);
  });
};

