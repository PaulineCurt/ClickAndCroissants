<template>
        <footer class="footer text-center  text-muted">
            <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h2>Contactez nous</h2>
                    <p>Adresse : {{ getAddress }}</p>
                    <p>Téléphone : {{ getPhone }}</p>
                    <p>Email : {{ getEmail }}</p>
                </div>
                <div class="col-md-4">
                    <h2>Horaires :</h2>
                    <ul class="list-unstyled">
                        <li>Lundi-Vendredi: {{ getHours.mondayFriday }}</li>
                        <li>Samedi:{{ getHours.saturday }} </li>
                        <li>Dimanche: {{ getHours.sunday }}</li>
                    </ul>
                </div>
                <div class="col-md-4 d-flex flex-column">
                    <h2>Nos produits</h2>
                    <ul class="list-unstyled">
                      <li>        
                        <router-link :to="{ name: 'Bakery'}">
                        Boulangerie 🥖 
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Cake'}">            
                           Pâtisseries 🍰
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Viennesie'}">
                          Viennoiseries 🥐 
                        </router-link>
                      </li>
                      <li>
                      <router-link :to="{ name: 'Snacking'}">
                         Snacking 🍔
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'Drink'}">
                        Boissons 🥤
                      </router-link>
                    </li>
                    </ul>
                </div>
            </div>

            <div class="text-center mt-4">
                <p>&copy; 2023 {{ getRestaurantName }} 
                    <img class="logo" :src="getLogo.source" :alt="getLogo.alt" />
                </p>
            </div>

            </div>
        </footer>
</template>

<script>
export default {
  name: 'FooterApp',

  computed: {
    getAddress() {
      return this.$store.getters.getAddress;
    },
    getEmail() {
      return this.$store.getters.getEmail;
    },
    getPhone(){
        return this.$store.getters.getPhone;
    },
    getRestaurantName() {
      return this.$store.getters.getRestaurantName;
    },
    getLogo() {
      return this.$store.getters.getLogo;
    },
    getHours() {
      return this.$store.getters.getHours;
    },
    }

  }
</script>

<style scoped lang="scss">
.footer {
    margin-top: 30vh;
    border-top: 1px solid orange;

    .container  {
        margin-top: 10vh;
    }

    img {
        width: 150px;
    }
    h2 {
        color: orange;
    }

    a {
      text-decoration: none;
      color: #2c3e50;
    }
      li {

        :hover {
          color: orange;
        }
      }
    
}
</style>