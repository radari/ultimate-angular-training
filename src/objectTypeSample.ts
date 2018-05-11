{
    let car: { brand: string, model: string, breakHorsePower: number, getName(): string };

    car = {
        brand: 'Ford',
        model: 'F-150',
        breakHorsePower: 360,
        getName() {
            return `${this.brand} ${this.model}`;
        }
    };

    console.log(car.getName());
}
