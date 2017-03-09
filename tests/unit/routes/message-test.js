import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('route:message', 'Unit | Route | message', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('it returns a list of messages', function(assert) {
  var store = {
    findAll: function() {
      return new Ember.RSVP.Promise(function(resolve) {
        resolve([
          {id: 1, date: '2015-10-11T08:40:51.620Z', useragent: 'mock user agent', message: 'hello', username: 'john.doe', pic: 'http://semantic-ui.com/images/avatar/small/johm.jpg'},
          {id: 2, date: '2015-10-12T08:40:51.620Z', useragent: 'another mock user agent', message: 'hi there', username: 'jane.smith', pic: 'http://semantic-ui.com/images/avatar/small/jane.jpg'},
        ]);
      });
    }
  };
  var route = this.subject();
  route.set('store', store);
  assert.deepEqual(route.model()._result, [
    {id: 1, date: '2015-10-11T08:40:51.620Z', useragent: 'mock user agent', message: 'hello', username: 'john.doe', pic: 'http://semantic-ui.com/images/avatar/small/johm.jpg'},
    {id: 2, date: '2015-10-12T08:40:51.620Z', useragent: 'another mock user agent', message: 'hi there', username: 'jane.smith', pic: 'http://semantic-ui.com/images/avatar/small/jane.jpg'},
  ]);
});
