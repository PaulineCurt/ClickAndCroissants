<template>
  <div class="presentation__card">
    <div class="card" v-for="category in categories" :key="category.name">
      <router-link :to="{ name: category.route }">
        <img :src="category.image">
        <div class="card__content">
          <p class="card__title">{{ category.name }}</p>
          <p class="card__description">{{ category.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartApp',
  data() {
    return {
      categories: [
        {
          name: 'Boulangerie',
          route: 'Bakery',
          image: require('@/assets/pain.jpeg'),
          description: 'Découvrez notre sélection de pains artisanaux. Baguettes croustillantes, pains de campagne, et bien plus encore pour satisfaire votre appétit.'
        },
        {
          name: 'Viennoiseries',
          route: 'Viennesie',
          image: require('@/assets/viennoiseries.jpg'),
          description: 'Explorez nos viennoiseries fraîches et croustillantes. Du croissant classique au délicieux pain au chocolat, une variété de plaisirs vous attend.'
        },
        {
          name: 'Pâtisseries',
          route: 'Cake',
          image: require('@/assets/patisseries.jpg'),
          description: 'Plongez dans un monde de douceurs avec nos pâtisseries exquises. Éclairs au chocolat, tartes aux citrons, et bien d\'autres délices sucrés vous attendent.'
        },
        {
          name: 'Snacking',
          route: 'Snacking',
          image: require('@/assets/images/snacking/sandwich-avocado.jpeg'),
          description: 'Explorez notre délicieuse gamme de collations salées et de salades fraîches. Des sandwichs savoureux, des salades légères et bien plus encore pour satisfaire vos envies de saveurs salées.'
        },
      ]
    };
  }
}
</script>


<style scoped lang="scss">

img {
    width: 100%;
}
.presentation__card {
  margin-top: 20vh;
  margin-bottom: 20vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3vw;

  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        svg {
        width: 48px;
        fill: #333;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        :hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
        }

  }
}


.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}
</style>