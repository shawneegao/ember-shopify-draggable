import Component from '@ember/component';
import { Swappable, Plugins } from 'draggable';
import layout from '../templates/components/swappable-group';
import { get, set } from '@ember/object';
import { A } from '@ember/array';
import { tryInvoke } from '@ember/utils';

export default Component.extend({
    layout,
    classNames: ['swappable-group'],
    events: A([
        'swap',
        'swapped',
        'start',
        'stop'
    ]),
    initializeEventListeners() {
        const swappable = get(this, 'swappable');
        get(this, 'events').forEach(eventName => {
            swappable.on(`swappable:${eventName}`, (event) => {
                tryInvoke(this, eventName, [event]);
            });
        });
    },
    init() {
        //Default swappable group array to be null, these will be added when the sortable groups insert into the DOM
        const swappable = new Swappable([], {
            draggable: '.swappable-item',
            mirror: {
                constrainDimensions: true
            },
            plugins: [Plugins.ResizeMirror]
        });
        set(this, 'swappable', swappable);
        this.initializeEventListeners();
        this._super(...arguments);
    },
    willDestroyElement() {
        get(this, 'swappable').destroy();
        this._super(...arguments);
    }
});
