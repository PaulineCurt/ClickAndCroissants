<template>
    <div class="nav">
      <div class="left">
        <router-link :to="{ name: 'HomeView' }">
        <img class="logo" :src="getLogo.source" :alt="getLogo.alt" />
      </router-link>
      </div>
      <div class="right">
        <ul>
          <li>
        <router-link :to="{ name: 'HomeView' }">
          Accueil
        </router-link>
      </li>
      <li>
        <router-link :to=" { name: 'Concept' }">
          Concept
        </router-link>
      </li>
      <li class="dropdown">
        <router-link :to="{ name: 'Products'}">
          <img src="../assets/concept/menu.png" alt="">
          Nos produits
        </router-link>
        <ul class="dropdown-content">
          <li>        
            <router-link :to="{ name: 'Bakery'}">
            🥖 Boulangerie 
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Cake'}">            
              🍰 Pâtisseries
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Viennesie'}">
              🥐 Viennoiseries
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Snacking'}">
              🍔 Snacking
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Drink'}">
              🥤 Boissons
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to=" { name: 'Contact' }">
          Contact
        </router-link>
      </li>
      
      <li>
        <router-link :to=" { name: 'Basket' }">
          Panier
        </router-link>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavApp',

  computed: {
    getLogo() {
      return this.$store.getters.getLogo;
    },
    getRestaurantName(){
      return this.$store.getters.getRestaurantName;
    }
  }

}
</script>


<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  border-bottom: 1px solid orange;
  a {
    color: #2c3e50;
    text-decoration: none;

    :hover {
      color: orange;
    }
  }

  .left {
    display: flex;
    align-items: center;

    img {
      width: 95px;
    }
  }
  .right {
    list-style: none;
    margin-right: 5vw;
    display: flex;

    li {
      display: inline-block;
      margin-right: 20px;

      :hover {
        color: orange;
      }
    
        img {
          width: 15%;
        }
        svg {
        width: 25%;
      }
      .icon-cart path {
        fill: orange;
        transition: .2s linear;
        background: transparent;
      }
    }
  }
}

.dropdown {
  position: relative;
  z-index: 45;
  .dropdown-content {
      display: none;
      position: absolute;
      min-width: 180px;
      z-index: 1;
      border: 1px solid black;
      text-align: start;
      padding: 1vw;
    }

}
    .dropdown:hover .dropdown-content {
      display: block;
    }


</style>

