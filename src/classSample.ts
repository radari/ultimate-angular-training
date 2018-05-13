{
    class Car {
        brand: string;
        model: string;
        features: string[] = [];

        constructor(brand: string, model: string) {
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

    let myCar: Car = new Car('McLaren', 'P1');
    myCar.addFeatures('satnav');
    myCar.addFeatures('metallic painting');
    console.log(myCar);
    myCar.clearFeatures();
    console.log(myCar);
}