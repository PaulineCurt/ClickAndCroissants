<template>
    <div id="home">
        <Header />
        <Cart />

        <router-view />
    </div>
</template>

<script>

import Header from '@/components/HeaderApp.vue'
import Cart from '@/components/CartApp.vue'

export default {
  name: 'HomeView',

  components: {
    Header,
    Cart,
  },

}
</script>