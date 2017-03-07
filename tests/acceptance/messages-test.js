import { test } from 'qunit';
import moduleForAcceptance from 'barstool-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | message');

test('visiting /messages', function(assert) {
  visit('/messages');

  andThen(function() {
    assert.equal(currentURL(), '/messages');
  });
});
