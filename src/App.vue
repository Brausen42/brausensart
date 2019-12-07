<template>
  <div id="app">
    <div id="nav">
      <!-- TODO: Make actual routes
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
html, body
  width 100%
  height 100%
  margin 0
  overflow hidden

#app
  width 100%
  height 100%
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background radial-gradient(transparent, slategray)
</style>
