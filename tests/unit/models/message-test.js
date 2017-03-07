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

test('should correctly display usernames that do not contain numbers', function(assert) {
  const newMessage = this.subject({ username: 'john.smith'});
  assert.equal(newMessage.get('displayName'), 'John Smith');
});

test('should correctly display usernames that do contain numbers', function(assert) {
  const newMessage = this.subject({ username: 'Mary.15lewis'});
  assert.equal(newMessage.get('displayName'), 'Mary Lewis');
});
