const state = {
  items: [], // Vos articles
  total: 0,  // Le total du panier
};

const getters = {
  totalCartItems: (state) => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },
};

const mutations = {
  removeOneItemFromCart: (state, item) => {
    const foundItem = state.items.find((i) => i.name === item.name);
    if (foundItem) {
      if (foundItem.quantity > 1) {
        foundItem.quantity -= 1;
        state.total -= foundItem.price;
      } else {
        const index = state.items.indexOf(foundItem);
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      }
    }
  },
};

export default {
  state,
  getters,
  mutations,
};
