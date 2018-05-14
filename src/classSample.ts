{
    class Vehicle {
        brand: string;
        model: string;
        features: string[] = [];

        // note: in constructor arguments, when specifying a public/private modifier, we are actually using a shorthanded attribute definition
        //       --> no need to explicitly define it at class level...
        constructor(brand: string, model: string, public color: string, readonly vin: string) {
            this.brand = brand;
            this.model = model;
        }

        get availableFeatures() {
            return this.features;
        }

        set availableFeatures(features: string []) {
            this.features = features;
        }
    }

    class Car extends Vehicle {

        constructor(brand: string, model: string, public color: string, readonly vin: string) {
            super(brand, model, color, vin);
        }
    }

    let myCar: Car = new Car('McLaren', 'P1', 'Stellar blue', 'ZAPC16C1435072584');
    console.log(myCar);

    // --> will actually invoke the 'availableFeatures' setter
    myCar.availableFeatures = ['GPS', 'Rear view camera'];

    // --> will actually invoke the 'availableFeatures' getter
    console.log(myCar.availableFeatures);

    console.log(myCar);
    console.log(myCar.color);
    console.log(myCar.vin);
}