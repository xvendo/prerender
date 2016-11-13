Package.describe({
  name: 'xvendo:prerender',
  summary: 'Node wrapper for prerender',
  version: '1.0.0',
  git: 'https://github.com/xvendo/prerender',
});

Npm.depends({
  'prerender-node': '2.2.2',
});

Package.onUse(function packageConfiguration(api) {
  api.use(['templating'], 'client');
  api.use(['webapp'], 'server');
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('server/prerender.js', 'server');
  api.addFiles('client/prerender.html', 'client');
});
