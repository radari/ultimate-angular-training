const pizza = {
    name: 'Barbecue chicken',
    toppings: ['Diced chicken', 'Home-made BBQ sauce'],
    price: 20,
    getPrices() {
        return this.price;
    }
};

const deliveryMode = 'To go';

const order = {
    pizza,
    deliveryMode
};

console.log(order);
console.log(order.pizza.getPrices());