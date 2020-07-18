<template>
  <div id="root" v-bind:style="rootStyle">
      <slot v-bind:style="contentStyle"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Circle',
  props: {
    size: Number
  },
  data: () => ({
  }),
  computed: {
      rootStyle: function() {
          const sizeAsPx = `${this.size}px`
          const halfSizeAsPx = `${this.size / 2}px`
          return {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: sizeAsPx,
              height: sizeAsPx,
              borderRadius: halfSizeAsPx
          }
      },
      contentStyle: function() {
          return {
            position: 'relative',
          }
      }
  }
});
</script>

<style scoped lang="stylus">
#root {
	height 50px;
	border-radius 25px;
}
</style>
