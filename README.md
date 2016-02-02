# ember-human-api
[![npm version](https://badge.fury.io/js/ember-human-api.svg)](http://badge.fury.io/js/ember-human-api.svg)

This add-on is a solution for integrating Human API into your Ember.js web app.

## Installation

```
ember install ember-human-api
```

## Usage
* Create Human API account: https://developer.humanapi.co/signup
* Define your appKey, clientId, clientSecret, and serverEndpoint in config.
```
//config/environment.js
  appKey: '<app-key-goes-here>',
  clientId: '<client-id-goes-here>',
  clientSecret: '<client-secret-goes-here>',
  serverEndpoint: '<server-endpoint-goes-here>'
//...
```
###serverEndpoint
After authentication on Human API's servers, a POST request is sent to the specified __serverEndpoint__ with user credentials including __humanId__, __clientId__, and __sessionToken__. Configure the intended response on your server end and that will be the resolve of the __connect()__ function.

###humanapi
Inject the service where needed.
```
humanapi: Ember.inject.service()
```

#### connect()
`connect()` makes a request to Human API to connect different applications to the specified user. For basic understanding of how Human API request works read: http://hub.humanapi.co/docs/start-here

Accepts __opts__ as an argument. Passed in parameters should container clientUserId and publicToken (if applicable). Returns an __Ember.RSVP.Promise__ which is either resolved with __success__ containing the response from your server endpoint or __err__ which explains why the request failed.
It is used like this:
```
let user = this.get('model');
let opts = {
  clientUserId: user.get('id'),
  publicToken: user.get('publicToken')
}

this.get('humanapi').connect(opts).then(function(response) {
  // response from your server
});
```

For more information refer to Human API docs: http://hub.humanapi.co/docs

#TODO
* Write tests
* Queries

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
