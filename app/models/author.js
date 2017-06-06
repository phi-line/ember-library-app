import DS from 'ember-data';
import Ember from 'ember';
import Faker from 'faker';

export default DS.Model.extend({

  name: DS.attr('string'),
  books: DS.hasMany('book', {inverse: 'author', async: true}),

  isNotValid: Ember.computed.empty('name'),

  randomize() {
    this.set('name', Faker.name.findName());

    // we return the record instance, we can chain an other function, for example .save(), check in Seeder Controller.
    return this;
  }
});
