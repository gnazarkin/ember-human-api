import injectScript from 'ember-inject-script';

export function initialize(application) {
  application.deferReadiness();
  var url = "https://connect.humanapi.co/connect.js";
  injectScript(url).then(function() {
    application.advanceReadiness();
  });
}

export default {
  name: 'human-api-init',
  initialize: initialize
};
