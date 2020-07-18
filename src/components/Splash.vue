<template>
  <div>
    <Circle id="viewport" 
      v-bind:size="expanded ? 800 : 400" 
      v-bind:style="viewportStyle"
      @mouseenter.native="focused = true"
      @mouseleave.native="focused = false"
      @focus="focused = true"
      @blur="focused = false">
      <div id="title" v-bind:style="titleStyle">
        <img id="logo" alt="Just Keep Brausen logo" src="../assets/justkeepbrausen.jpg">
        <h1>{{ msg }}</h1>
      </div>
    </Circle>
    <img class="gallery" v-for="src in content" 
      v-bind:key="src" 
      v-bind:id="src"
      v-bind:src="`${publicPath}content/${src}`"
      v-bind:style="getImageStyle(content.indexOf(src))"
      v-on:click="changeImage(src)"/>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { mapActions, mapState } from 'vuex'
import { stateInterface } from '@/store'
import Circle from '@/components/circ.vue'

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
    Circle
  },
  data: () => ({
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
      const isHotDog = this.activeImage && this.activeImage.isHotDog
      const style = {
        top: addUnit(this.center.y),
        left: addUnit(this.center.x),
        background: this.activeImage ? 
          `no-repeat center url(${this.publicPath}content/${this.activeImage.src})`:
          null,
        backgroundSize: isHotDog ? 'auto 800px' : '800px',
      } as CSSStyleDeclaration
      if (this.expanded) {
        style.borderRadius = '10px',
        style.width = isHotDog ? `${800 * this.activeImage.WHratio}px` : '800px',
        style.height = isHotDog ? '800px' : `${800 / this.activeImage.WHratio}px`
      }
      
      return style
    },
    titleStyle: function() {
      return this.expanded ? {
        opacity: '0.0',
        visibility: 'hidden'
      } : {}
    },
    expanded: function() {
      return this.focused ? !!this.activeImage : false
    },
    ...mapState([
      'activeImage'
    ]),
  } as any,
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
    },
    changeImage: function(src: string) {
      const elem = document.getElementById(src) as HTMLImageElement
      this.activateImage({
        src,
        isHotDog: elem.naturalWidth < elem.naturalHeight,
        WHratio: elem.naturalWidth / elem.naturalHeight
      })
    },
    ...mapActions([
      'activateImage'
    ])
  } as any
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
  background rgba(255, 255, 255, 0.4)
  backdrop-filter blur(10px)
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
