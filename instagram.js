Accounts.oauth.registerService('instagram');

if (Meteor.isClient) {
  Meteor.loginWithInstagram = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Instagram.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.instagram'],
    forOtherUsers: [
      'services.instagram.username',
      'services.instagram.full_name',
      'services.instagram.profile_picture'
    ]
  });
}
