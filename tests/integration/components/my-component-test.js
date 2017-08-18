/* eslint-disable */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import EmberObject, { get, set } from '@ember/object';


describe('Integration | Component | my component', function() {
  setupComponentTest('my-component', {
    integration: true
  });

  it('its working', function() {
    const modelFake = EmberObject.create({
      fullName: 'foo bar'
    });

    this.set('model', modelFake);

    this.render(hbs`{{my-component model=model}}`);

    expect(this.$()).to.have.length(1);
  });

  it('its not working', function() {
    const modelFake = EmberObject.create({
      fullName: 'foo bar'
    });

    set(this, 'model', modelFake);

    this.render(hbs`{{my-component model=model}}`);

    expect(this.$()).to.have.length(1);
  });
});
