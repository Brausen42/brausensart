const host_url = `${window.location.protocol}//${window.location.host}`;
/*
Vue.component('modal', {
  template: `
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <button class="modal-close-button" @click="$emit('close')">&times;</button>
              <slot name="body">
                default body
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `
})
*/

/**
 * Page title/header component
 */
Vue.component('page-title', {
  props: ['title'],
  data: function () {
    return {
    }
  },
  computed: {

  },
  template: `
  <div id="page_title">
    <title>{{ title }}</title>
    <div>
      <h1>{{ title }}</h1>
      <p>-Under Construction-</p>
    </div>
  </div>
  `
});

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      page_title: "Brausen's Art"
    }
  },
  template: `
  <page-title v-bind:title="page_title"></page-title>
  `
})