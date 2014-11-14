Package.describe({
  summary: "Instagram account login for meteor",
  "version": "0.1.2",
  "git": "https://github.com/yubozhao/meteor-accounts-instagram",
  "name": "bozhao:accounts-instagram"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
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
        
  api.add_files('instagram_client.js', 'client');
  api.add_files('instagram_server.js', 'server');
  api.add_files("instagram.js");

  api.export('Instagram');

  api.add_files([
    'instagram_configuration.html',
    'instagram_configuration.js', 
    'instagram_login_button.css'
  ],'client');
});
