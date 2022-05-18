const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => cats.push(name);

const destructivelyPrependCat = name => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = name => {
    const newCats = cats.slice()
    newCats.push(name);
    return newCats;
}

const prependCat = name => {
    const newCats = cats.slice()
    newCats.unshift(name);
    return newCats;
}

const removeLastCat = function() {
    return cats.slice(0, cats.length - 1)
}

const removeFirstCat = function() {
    return cats.slice(1, cats.length)
}