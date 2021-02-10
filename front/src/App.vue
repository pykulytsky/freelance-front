<template>
  <div id="app">
    <div class="navbar">
      <nav-bar-component></nav-bar-component>
    </div>

    <div class="main">
      <router-view/>
    </div>

    <footer>
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/core/Navbar'
import Footer from './components/core/Footer'

export default {
  components: {
    navBarComponent: Navbar,
    footerComponent: Footer
  }
}
</script>

<style>


#app {
  margin: 0;
  padding: 0;
  min-height: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  font-family: 'Hammersmith One', sans-serif;
}

.main {
  margin-top: 50px;
}
</style>
