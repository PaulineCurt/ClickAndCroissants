export const cart = {
  items: [],
  total: 0,

  addToCart(item) {
    const existingItem = this.items.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push({
        name: item.name,
        price: item.price.toFixed(2),
        quantity: item.quantity,
      });
    }

    this.total += item.price * item.quantity;
  },

  removeFromCart(itemName) {
    const index = this.items.findIndex(cartItem => cartItem.name === itemName);

    if (index !== -1) {
      const removedItem = this.items.splice(index, 1)[0];
      this.total -= removedItem.price * removedItem.quantity;
    }
  },

  addToShoppingCart(item) {
    this.addToCart(item);
    this.itemMessage = `${item.quantity} ${item.quantity === 0 ? item.name : `${item.name}s`} ajouté(e)s au panier`;
  },

  incrementQuantity(item) {
    item.quantity++;
    this.itemMessage = `${item.quantity} ${item.quantity === 0 ? item.name : `${item.name}s`} ajouté(e)s au panier`;
  },

  decrementQuantity(item) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  },
};
