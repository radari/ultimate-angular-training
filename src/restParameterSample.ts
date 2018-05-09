function concat(word, ... arrayOfWords) {
    logArguments(word, arrayOfWords);
    return word + arrayOfWords.reduce((prev, current) => prev + current);
}

function logArguments(word, ... arrayOfWords) {
    console.log(arguments);
}

console.log(concat("Hello", 'My', 'Name', 'Is', 'Charly'));
logArguments("Hello");
logArguments("Hello", null);
logArguments("Hello", undefined);