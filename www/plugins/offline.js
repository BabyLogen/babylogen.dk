import OfflinePlugin from 'offline-plugin/runtime';

if (process.env.NODE_ENV === 'production') {
  window.onNuxtReady(() => {
    OfflinePlugin.install({
      onInstalled() {
        console.log('Offline plugin installed.'); // eslint-disable-line no-console
      },
      onUpdating() {},
      onUpdateReady() {
        OfflinePlugin.applyUpdate();
      },
      onUpdated() {
        window.location.reload();
      },
    });
  });
}
