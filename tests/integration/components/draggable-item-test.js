import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | draggable-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Template block usage:
    await render(hbs`
      {{#draggable-item}}
        template block text
      {{/draggable-item}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
