import config from '../config/environment';
import Ember from 'ember';

export default (Ember.Service || Ember.Object).extend({
  connect: function(opts) {
    if(!opts) {
      throw new Ember.Error('Human API: please pass in options');
    }
    let clientId = this.get('clientId');
    let serverEndpot = this.get('serverEndpoint');

    return new Ember.RSVP.Promise(function(resolve, reject) {
      var options = {
        clientUserId: opts.clientUserId,
        clientId: clientId,
        publicToken: opts.publicToken || '',  // Leave blank for new users

        finish: function(err, sessionTokenObject) {
          $.ajax({
            type: "POST",
            url: serverEndpoint,
            data: sessionTokenObject
          }).then(function(success) {
            console.log(success);
            resolve(success);
          }, function(error) {
            console.log(error);
            reject(error);
          });
        },

        close: function() {
          console.log('HumanApi: closed with no connections');
        },

        error: function(error) {
          console.log(error);
          reject(error);
        }
      }
      HumanConnect.open(options);
    });
  },

  appKey: config['human-api'].appKey,
  clientId: config['human-api'].clientId,
  clientSecret: config['human-api'].clientSecret,
  serverEndpoint: config['human-api'].serverEndpoint
});
