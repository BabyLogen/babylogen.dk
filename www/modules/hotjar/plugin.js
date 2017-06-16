// Setup Hotjar
window.hj = window.hj || function hj() {
  (window.hj.q = window.hj.q || []).push(arguments); //eslint-disable-line
};


export default ({ app: { router } }) => {
  if (!window.hj) {
    console.warn('Hotjar is not available');
    return;
  }

  window._hjSettings = { // eslint-disable-line
    hjid: '<%= options.hjid %>',
    hjsv: '<%= options.hjsv %>',
  };

  // Every time the route changes (fired on initialization too)
  router.afterEach((to) => {
    // We tell Hotjar that page has changed
    window.hj('stateChange', to.fullPath);
  });
};
