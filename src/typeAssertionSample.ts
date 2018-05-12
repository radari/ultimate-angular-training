type Car = {
    'brand': string,
    'model': string,
    'fuel': 'hybrid' | 'electric' | 'gas' | 'diesel',
}

const carObject: Car = {
    brand: 'Ferrari',
    model: 'California',
    fuel: 'gas'
};

const serializedCar: string = JSON.stringify(carObject);

// here, using the 'as' keyword, we are casting the object into Car type -> code completion is able to suggests its attributes
(JSON.parse(serializedCar) as Car).brand;