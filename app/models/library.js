import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  addresss: DS.attr('string'),
  phone: DS.attr('string'),

  isValid: Ember.computed.notEmpty('name')
});
