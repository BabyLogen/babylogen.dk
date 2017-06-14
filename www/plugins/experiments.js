window.GoogleAnalyticsObject = 'ga';
window.ga = window.ga || function ga() {
  (window.ga.q = window.ga.q || []).push(arguments); //eslint-disable-line
};
window.ga.l = 1 * new Date();

export default ({ store }) => {
  if (!window.ga) {
    return;
  }

  Object.keys(store.state.experiments).forEach((key) => {
    const experiment = store.state.experiments[key];
    window.ga('set', 'exp', `${experiment.id}.${experiment.index}`);
    console.log('experiment', `${experiment.id}.${experiment.index}`);
  });
};
