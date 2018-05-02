const pizzas = [
    {
        name: 'Super supreme',
        toppings: ['diced beef']
    }
];


let mappedResult = pizzas.map((pizza, idx) => 'Pizza #' + idx + ' : ' + pizza.name.toUpperCase());
console.log(mappedResult);

const customPizza = {
    name: 'Custom pizza',
    toppings: ['Grilled beacon', 'Pineapple dices', 'Hot base sauce', 'Stripped beef'],
    toString: function() {
        setTimeout(function() {
            console.log(customPizza);
        }, 1000)
    },
    toStringWithArrowFunction: function() {
        setTimeout(() => console.log(this), 1000)
    }
};

customPizza.toString();
customPizza.toStringWithArrowFunction();
// NOTE: arrow function does not create a new scope and does not bind 'this'