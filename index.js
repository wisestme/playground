if (navigator.serviceWorker.controller) {
	debug(
    navigator.serviceWorker.controller.scriptURL +
    ' (onload)', 'controller'
  );
  debug(
    'An active service worker controller was found, ' +
    'no need to register'
  );
} else {
	navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function(reg) {
    debug(reg.scope, 'register');
    debug('Service worker change, registered the service worker');
  });
}