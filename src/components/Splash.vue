<template>
  <div>
    <circ id="viewport" 
      v-bind:size="focused ? 800 : 400" 
      v-bind:style="viewportStyle"
      @mouseenter.native="focused = true"
      @mouseleave.native="focused = false">
      <div id="title" v-bind:style="titleStyle">
        <img id="logo" alt="Just Keep Brausen logo" src="../assets/justkeepbrausen.jpg">
        <h1>{{ msg }}</h1>
      </div>
    </circ>
    <img class="gallery" v-for="src in content" 
      v-bind:key="src" 
      v-bind:src="`${publicPath}content/${src}`"
      v-bind:style="getImageStyle(content.indexOf(src))"
      v-on:click="activeSrc = src"/>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import circ from '@/components/circ.vue'

interface Coordinate2D {
  x: number,
  y: number
}

const ext = '.jpg'
const content = [
  'one','two','three','four','five','six','seven','eight','nine'
].map(base => `${base}${ext}`)

const getWindowDimensions = () => ({
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
})

export default Vue.extend({
  name: 'Splash',
  components: {
    circ
  },
  data: () => ({
    activeSrc: null as number|null,
    rotation: 0,
    distance: 300,
    distanceDir: 10,
    content,
    publicPath: process.env.BASE_URL,
    center: getWindowDimensions() as Coordinate2D,
    focused: false
  }),
  computed: {
    viewportStyle: function() {
      const addUnit = (num: number) => `${num}px`
      const style = {
        top: addUnit(this.center.y),
        left: addUnit(this.center.x),
        background: this.activeSrc ? 
          `no-repeat center url(${this.publicPath}content/${this.activeSrc})`:
          null,
        backgroundSize: '800px'
      } as CSSStyleDeclaration
      if (this.focused) {
        style.borderRadius = '10px'
      }
      
      return style
    },
    titleStyle: function() {
      return this.focused ? {
        opacity: '0.0',
        visibility: 'hidden'
      } : {}
    }
  },
  props: {
    msg: String,
  },
  created: function() {
    const self = this
    window.addEventListener('resize', function() {
      const { x, y } = getWindowDimensions()
      self.center = {x, y}
    })
    setInterval(function(){
      self.rotation += (3.14159 / 2000)
      self.distance += (self.distanceDir / 100)
      if ((self.distance > 350) || (self.distance < 250)) {
        self.distanceDir = self.distanceDir * -1
      }
    }, 10)
  },
  methods: {
    getImageStyle: function(index: number) {
      const addUnit = (num: number) => `${num}px`
      return {
        top: addUnit(this.center.y),
        left: addUnit(this.center.x),
        transformOrigin: `-${this.distance}px`,
        transform: `
          translate(-50%, -50%)
          translate(${this.distance + 50}px, 0)
          rotate(${this.rotation + (2 * Math.PI * (index / this.content.length))}rad)
        `
      }
    }
  }
});
</script>

<style scoped lang="stylus">
.gallery {
  position absolute
  width 100px
  height 100px
  border-radius 50px
  cursor pointer
  border 1px solid white
}

#logo {
	height 50px;
	border-radius 25px;
}

#title {
  display flex
  align-items center
  justify-content center
  background-color rgba(255,255,255, 0.7);
  padding 10px
  border-radius 10px
  font-size 0.8rem
  > * {
    margin-left 5px
    margin-right 5px
  }
  transition opacity 0.5s
}

#viewport {
  position: absolute
  transform: translate(-50%, -50%)
  transition width 0.5s, height 0.5s
  z-index 10
}
</style>
