Instagram = {};

Instagram.requestCredential = function (options, credentailRequestCompleteCallback) {
  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    credentialRequestCompleteCallback = options;
    options = {};
  }

  var config = ServiceConfiguration.configurations.findOne({service: 'instagram'});
  if (!config) {
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(
      new ServiceConfiguration.ConfigError());
    return;
  }
  var credentialToken = Random.secret();

  console.log('credentialToken created on client is ', credentialToken);
  var scope = (options && options.requestPermissions) || ['basic'];
  var flatScope = _.map(scope, encodeURIComponent).join('+');

  var loginUrl =
    'https://instagram.com/oauth/authorize' +
      '?client_id=' + config.clientId +
      '&response_type=code' +
      '&scope=' + scope +
      '&redirect_uri=' + Meteor.absoluteUrl('_oauth/instagram?close=close') +
      '&state=' + credentialToken;

  OAuth.showPopup(
    loginUrl,
    _.bind(credentailRequestCompleteCallback, null, credentialToken),
    {width: 900, height: 450}
  );
};
