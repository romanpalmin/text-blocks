/**
 * Инициализация инстанса Vue
 *
 * 25.06.2018 rpalmin
 */

import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
