const greetingIntro: string = 'Hello';
const multilineGreetingIntro: string = `
    'Hello 
    there'
`;

function concatGreetingMsg(greetingIntro: string = 'Hi there', ... words: string []) : string {
    return greetingIntro.concat(... words);
}

let result: string = concatGreetingMsg(undefined, ' test');
console.log(`Result is ${result}`);

result = concatGreetingMsg(multilineGreetingIntro, ' test');
console.log(`Result is ${result}`);