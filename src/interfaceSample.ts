{
    interface Vehicule {
        brand: string,
        model: string,
        fuel: 'gas' | 'diesel' | 'electric',

        getName(): string
    }

    interface Truck extends Vehicule {
        maxPayload: number;
    }


    const myCar: Vehicule = {
        brand: 'BMW',
        model: 'X1',
        fuel: 'gas',

        getName: function() {
            return `${this.brand} ${this.model}`;
        }
    };

    const myTruck: Truck = {
        brand: 'Scania',
        model: 'P Serie',
        fuel: 'diesel',
        maxPayload: 25000,

        getName: function() {
            return `${this.brand} ${this.model} truck - max payload = ${this.maxPayload}`;
        }
    };

    console.log(myCar.getName());
    console.log(myTruck.getName());
}