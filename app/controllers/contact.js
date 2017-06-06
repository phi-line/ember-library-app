import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      //alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', 'Thank you for reaching out!');
      this.set('emailAddress', '');
    }
  }
});
