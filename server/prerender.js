var prerenderio = Npm.require('prerender-node');
var token;
var serviceUrl;
var protocol;
var host;
var settings = Meteor.settings.PrerenderIO;


token = process.env.PRERENDERIO_TOKEN || (settings && settings.token);
protocol = process.env.PRERENDERIO_PROTOCOL || (settings && settings.protocol);
host = process.env.PRERENDERIO_HOST || (settings && settings.host);

// service url (support `prerenderServiceUrl` (for historical reasons) and `serviceUrl`)
serviceUrl = settings && (settings.prerenderServiceUrl || settings.serviceUrl);
serviceUrl = process.env.PRERENDERIO_SERVICE_URL || serviceUrl;


if (token) {
  if (serviceUrl) {
    prerenderio.set('prerenderServiceUrl', serviceUrl);
    prerenderio.set('prerenderToken', token);
  } 
  if (protocol) {
    prerenderio.set('protocol', protocol);
  } 
  if (host) {
    prerenderio.set('host', host);
  }  

  prerenderio.set('afterRender', function afterRender(error) {
    if (error) {
      console.log('prerenderio error', error); // eslint-disable-line no-console
      return;
    }
  });

  WebApp.rawConnectHandlers.use(prerenderio);
  
}
