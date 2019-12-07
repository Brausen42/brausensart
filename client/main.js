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

const images = [
  {
    url: 'https://lh3.googleusercontent.com/2h9opzfJ_QWoghmB_VrOaZjXtFU0_AM38MUMMC9RTxNWU4_f3k5-ouhc0-CPAUHES9J51kj8gKg9igb8VSATqb_Vnx5znJmTxyHt0EIq31vVJhtTg2qaxz3IHrKOeQsaYvOJ0Ki_NqkkKTktcoLqeqIUSp8O1fTAEKeBwT1dSV1_hvaNqozvDml5wrdSWchNafluREtHikeKzmUCX784h8LnE38CI4jEo5d51KQVWA08oR881A0e-9I7rMGSBOq7CJ9F0R9r380kD-mxHkrTrt4vMN-OumkidGF0De5BWe2uV9X7h5kiHLgnt8_xTQlTTAosRenpriXOIxzGLkp94LHRRxGbEPPJgKCXFQbd-IXaL2n6-XA-nBCerSPcdfGYJlU5EtaVk-5LuFWnNIk--ESbeqVWSoM-YTa9Zvb4vrzHDX8apn7FrPfjCQVjabxELk02d1ePDhP9fr6yt18jiwCumZAbgtMkrp4bgm_qiU6rSAF-ZiTvODwT4-mgGY2upuA5yrxcf_7QtpoDYUJY1Bhu13y913P2mO_i2uzKjYxi1yyk8TyLDjRrI_yySfPUXfxvWvEX8bvODJo44Ks2zHZq5XHVE6Ed2s7BoxrnySU1UDj0XGvDfrmc1oEU7InPYWViEkPzqQaLYNbIkyttuSUc6aln-1Bn_8aoPr7xcRPyJgUS5TD5pA=w678-h967-no'
  },
  {
    url: './assets/pic.jpg'
  }
]

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
    <img src="${images[0].url}"/>
  </div>
  `
});

const app = new Vue({
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