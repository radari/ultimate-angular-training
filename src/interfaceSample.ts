{
    interface Vehicule {
        brand: string,
        model: string,
        fuel: 'gas' | 'diesel' | 'electric',

        getName(): string
    }


    const myCar: Vehicule = {
        brand: 'BMW',
        model: 'X1',
        fuel: 'gas',

        getName: function() {
            return `${this.brand} ${this.model}`
        }
    };

    console.log(myCar.getName());
}