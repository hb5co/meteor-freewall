Package.describe({
  name: 'hb5:meteor-freewall',
  summary: 'jQuery layouts with CSS3 animation effects and call back events',
  version: '0.0.1',
  git: 'https://github.com/hb5co/meteor-freewall.git'
});

Package.onUse(function(api) {
  api.addFiles('lib/freewall/freewall.js', 'client');
});
