<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/NavApp.vue'
import Footer from '@/components/FooterApp.vue'
import 'font-awesome/css/font-awesome.min.css';


export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #F5F5F5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
