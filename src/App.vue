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
  background url(/content/background.jpg) center center

#app:before
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background radial-gradient(white, transparent)
  opacity 1.0
</style>
