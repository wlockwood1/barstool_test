import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  date: DS.attr('date'),
  useragent: DS.attr('string'),
  message: DS.attr('string'),
  username: DS.attr('string'),
  pic: DS.attr('string'),
  displayName: Ember.computed('username', function() {
    var name = `${this.get('username')}`;
    var newName = name.split('.');
    return titleCase(newName[0]) + " " + titleCase(newName[1].replace(/[^a-zA-Z-]/g, ''));
  })
});

function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
