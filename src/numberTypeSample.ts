// Here, the variable type is inferred to number through the value it is assigned
let carWeight = 1250;

// Here, an error is thrown at compilation time because we trying to assign a string to a number variable;
carWeight = '25';

// Explicitly typing a variable
let carBHP: number = 125;


function computeBHPRatio(carWeight: number, carBhp: number) : number {
    return carWeight / carBhp;
}

let res: number = computeBHPRatio(1475, 150);
console.log(`Result is: ${res}`);