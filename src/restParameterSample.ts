function concat(word, ... arrayOfWords) {
    console.log(arguments);
    return word + arrayOfWords.reduce((prev, current) => prev + current);
}

console.log(concat("Hello", 'My', 'Name', 'Is', 'Charly'));