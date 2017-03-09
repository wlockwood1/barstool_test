import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message', 'Unit | Model | message', {
  // Specify the other units that are required for this test.
  unit: true,
  needs: ['model:message']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('displayName', function(assert) {
  const newMessage = this.subject({ username: 'john.smith15'});
  assert.equal(newMessage.get('displayName'), 'John Smith');
});
