Package.describe({
  summary: "Instagram account login for meteor",
  "version": "0.2.2",
  "git": "https://github.com/yubozhao/meteor-accounts-instagram",
  "name": "bozhao:accounts-instagram"
});

Package.onUse(function(api) {
  api.versionsFrom(['1.3','2.3']);
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-oauth', ['client', 'server']);

  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('instagram_client.js', 'client');
  api.addFiles('instagram_server.js', 'server');
  api.addFiles("instagram.js");

  api.export('Instagram');

  api.addFiles([
    'instagram_configuration.html',
    'instagram_configuration.js',
    'instagram_login_button.css'
  ],'client');
});
