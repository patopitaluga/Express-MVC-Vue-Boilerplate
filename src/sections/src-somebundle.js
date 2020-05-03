window.Vue = require('vue/dist/vue' + ((process.env.NODE_ENV === 'production') ? '.min' : '') + '.js'); // this NODE_ENV is set by webpack with the "mode" property https://webpack.js.org/concepts/mode/ Dev version of Vue can be debuged by Vue Devtools in the browser and performs a little bit worse.
if (process.env.NODE_ENV === 'development') console.log('Project Name running in development mode.');

/**
 * This file will be processed by webpack and loaded on the browser, so don´t leave sensitive information.
 * Will be load in calendar-timeline.html
 */
/* eslint-disable prefer-const */
import somecomponent from '../../vue-components/vc-somecomponent/vc-somecomponent.vue';

new Vue({
  el: '#app',
  components: {
    somecomponent,
  },
  data: function() { // eslint-disable-line require-jsdoc
    return {
    };
  },
});
