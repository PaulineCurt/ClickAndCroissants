<template>
    <div class="header">
      <div class="img__header">
          <img class="logo" :src="getLogo.source" :alt="getLogo.alt" />
        </div>
				<p class="description">
					Bienvenue chez <b class="restaurant-name">{{ getRestaurantName }}</b>! <br>
					Plongez dans une expérience de boulangerie virtuelle inédite avec {{ getRestaurantName }}, 
					votre destination gourmande en ligne ! <br>
					Dites adieu aux réveils précoces du dimanche matin grâce à notre système de commande en click and collect innovant. <br>
					Découvrez une gamme exquise de produits de boulangerie, des croissants croustillants aux pains aux chocolats fondants, <br>
					et précommandez-les la veille pour une expérience de petit-déjeuner sans stress. <br>
					Laissez-nous transformer vos matins en moments de délice, 
					et profitez de la fraîcheur incomparable de nos produits, le tout à portée de clic. <br>
					Bienvenue dans l'avenir du petit-déjeuner chez {{ getRestaurantName }}, 
					où la boulangerie virtuelle rencontre la satisfaction des papilles, un délicieux éveil à la fois !
				</p>
    </div>
</template>

<script>
export default {
  name: 'HeaderApp',

  computed: {
    getAddress() {
      return this.$store.getters.getAddress;
    },
    getEmail() {
      return this.$store.getters.getEmail;
    },
    getRestaurantName() {
      return this.$store.getters.getRestaurantName;
    },
    getLogo() {
      return this.$store.getters.getLogo;
    },
  }
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img__header {
      width: 100%;
      height: 100vh;
      background-attachment: fixed; 
      background-size: cover;
      background-position: center; 
      background-repeat: no-repeat; 
      background-image: url("../assets/boulangerie2.jpg");
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo {
      width: 400px;
      border-radius: 100%;
    }
    p {
      margin-top: 20vh;
    }
    justify-content: center;
    .restaurant-name {
      color: orange;
    }
}

</style>