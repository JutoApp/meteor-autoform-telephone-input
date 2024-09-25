Package.describe({
  name: 'juto:autoform-telephone-input',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: 'Autoform plugin for entering and validating international telephone numbers',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JutoApp/meteor-autoform-telephone-input.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "intl-tel-input" : "24.5.0"
});

Package.onUse(function(api) {
  api.versionsFrom('2.12');
  api.use([
    'ecmascript',
    'templating@1.4.2',
    'dm:template-extension@4.1.1',
    'aldeed:template-extension'
  ],['client']);
  api.use([
    'aldeed:autoform@5.8.1||6.0.0||7.0.0',
  ],['client'], {weak: true}); // we need to specify it as a weak ref or dependency resolution breaks
  api.addAssets([
    'public/flags.webp',
    'public/flags@2x.webp',
    'public/globe_light.webp',
    'public/globe_light@2x.webp',
    'public/globe.webp',
    'public/globe@2x.webp',
  ],['client']);
  api.addFiles([
    'client/css/intlTelInput.min.css',
    'client/intl-telephone-input.html',
    'client/intl-telephone-input.js',
    'client/css/intlTelInputFlagOverride.css'
  ],['client']);

});
