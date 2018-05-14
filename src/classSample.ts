{
    class Car {
        brand: string;
        model: string;
        features: string[] = [];

        // note: in constructor arguments, when specifying a public/private modifier, we are actually using a shorthanded attribute definition
        //       --> no need to explicitly define it at class level...
        constructor(brand: string, model: string, private version: string, public color: string) {
            this.brand = brand;
            this.model = model;
        }

        addFeatures(feature: string): void {
            this.features.push(feature);
        }

        clearFeatures(): void {
            this.features = [];
        }
    }

    let myCar: Car = new Car('McLaren', 'P1', 'x', 'Stellar blue');
    myCar.addFeatures('satnav');
    myCar.addFeatures('metallic painting');
    console.log(myCar);
    myCar.clearFeatures();
    console.log(myCar);
    console.log(myCar.color);
}