import { moduleFor, test, expect } from 'ember-qunit';

moduleFor('route:message', 'Unit | Route | message', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

//tests that shows its displaying messages correctly
