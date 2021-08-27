Instagram = {};
var Oauth = Package.oauth.OAuth;
Oauth.registerService('instagram', 2, null, function(query) {

  var response = getTokenResponse(query);
  var accessToken = response.access_token;
  var identity = response.user;

  var serviceData = _.extend(identity, {accessToken: response.access_token});

  return {
    serviceData: serviceData,
    options: {
      profile: { name: identity.full_name },
      services: { instagram: identity }
    }
  };
});

var getTokenResponse = function (query) {
  var config = ServiceConfiguration.configurations.findOne({service: 'instagram'});

  if (!config)
    throw new ServiceConfiguration.ConfigError();

  var response;
  try {
    response = HTTP.post(
      "https://api.instagram.com/oauth/access_token", {
        params: {
          code: query.code,
          client_id: config.clientId,
          redirect_uri: OAuth._redirectUri("instagram", config),
          client_secret: OAuth.openSecret(config.secret),
          grant_type: 'authorization_code'
        }
      });

    if (response.error) // if the http response was an error
        throw response.error;
    if (typeof response.content === "string")
        response.content = JSON.parse(response.content);
    if (response.content.error)
        throw response.content;
  } catch (err) {
    throw _.extend(new Error("Failed to complete OAuth handshake with Instagram. " + err.message),
                   {response: err.response});
  }

  return response.content;
};

Instagram.retrieveCredential = function(credentialToken, credentialSecret) {
  return Oauth.retrieveCredential(credentialToken, credentialSecret);
};
