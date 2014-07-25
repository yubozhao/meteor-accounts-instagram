Template.configureLoginServiceDialogForInstagram.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForInstagram.fields = function () {
  return [
    {property: 'clientId', label: 'Client Id'},
    {property: 'secret', label: 'Client Secret'}
  ];
};
