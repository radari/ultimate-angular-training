{
    interface Vehicule {
        brand: string,
        model: string,
        fuel: 'gas' | 'diesel' | 'electric',
        maxSpeed?: number,

        // index signature -> allows to dynamically add properties to data structure
        [key: number]: number,

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
        maxSpeed: 164,

        getName: function() {
            return `${this.brand} ${this.model} truck - max payload = ${this.maxPayload}`;
        }
    };

    // example of how to exploit index signatures to dynamically add property to an existing data structure
    myTruck[5] = 5;

    console.log(myCar.getName(), myCar.maxSpeed);
    console.log(myTruck.getName(), myTruck.maxSpeed);
}