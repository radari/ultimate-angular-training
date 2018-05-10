const car = {
    brand: 'Volkswagen',
    model: 'Tiguan',
    bhp: 150,
    gearbox: 'manual'
};

// destructuring as is
function registerCar({brand, model, unknown}) {
    console.log(brand, model, unknown);
}

// destructuring while assigning to new named variables
function registerCar2({brand: carBrand, gearbox: transmission}) {
    console.log(carBrand, transmission);
}

function extractBrandAndModel(car) {
    return {
        brand: car.brand,
        model: car.model
    };
}

registerCar(car);
registerCar2(car);

// destructing and assign to new variable
const {model} = extractBrandAndModel(car);
console.log(model);

// destructuring array
const carBrands = ['Volkswagen', 'Cadillac', 'Ford', 'Maseratti'];
const [a, b, c, d] = carBrands;
console.log(a, b, c, d);

// destructing array as function parameter
function logCarBrands([a, b, c, d]: any) {
    console.log(a, b, c, d);
}
logCarBrands(carBrands);