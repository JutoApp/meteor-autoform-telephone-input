Package.describe({
  name: 'juto:autoform-telephone-input',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "intl-tel-input" : "15.0.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.1');
  api.use([
    'ecmascript',
    'templating',
    'aldeed:autoform@6.2.0'
  ],['client']);
  api.addAssets([
    'public/flags.png',
    'public/flags@2x.png',
  ],['client']);
  api.addFiles([
    'client/css/intlTelInput.min.css',
    'client/intl-telephone-input.html',
    'client/intl-telephone-input.js',
    'client/css/intlTelInputFlagOverride.css'
  ],['client']);

});
