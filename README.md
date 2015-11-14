# Meteor Acccounts Instagram
#### Instagram account login for meteor

## Install

`cd <your-meteor-project>`

`meteor add bozhao:accounts-instagram`

and also add following package as pre-req -

`meteor add service-configuration`


## Setup and Usage

1. Register your app with Instagram Developer Site at following url- http://instagram.com/developer/clients/register

2. Fill out the given form but make sure that redirect url as shown as follows-

  OAuth redirect_uri: `<your-server-domain>:<port>/_oauth/instagram`

  For e.g.redirect url for localhost : `http://localhost:3000/_oauth/instagram`

3. After registration, note down the clientid and client secret.
4. Now in your app do create the `accounts.js` (or `accounts.coffee` if you use coffeescript) and put following code inside

 so, it file looks in directory tree- `<your-app-directory>/server/accounts.js`  and put the client id and client secret from previous step

    ```
    ServiceConfiguration.configurations.remove({
      service: 'instagram'
    });
    ServiceConfiguration.configurations.insert({
      service: 'instagram',
      scope: 'basic',
      clientId: '<your-client-id>',
      secret: '<your-client-secret>'
    });
    ```
5. Now, all things are setup, you are ready to use this package
6. Add following button code for login
```
      Meteor.loginWithInstagram(function (err, res) {
          if (!err) {
            console.log('sucess ' + res)
          } else {
            console.log('login failed ' + err)
          }
      });
```
