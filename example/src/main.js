import Vue from 'vue'
import App from './App.vue'

import Popover from '../../src/index.js'
Vue.use(Popover)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

import Button from 'vue-multiple-button'
import 'vue-multiple-button/lib/button.css'
Vue.use(Button)

new Vue({
    el: '#app',
    render: h => h(App)
})
