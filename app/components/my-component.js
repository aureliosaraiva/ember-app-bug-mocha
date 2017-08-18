/* eslint-disable */
import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  model: null,
  didReceiveAttrs() {
    console.log(get(this, 'model'));
    console.log(get(this, 'model.fullName'));
  }
});
