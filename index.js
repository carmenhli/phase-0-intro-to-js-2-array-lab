// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
destructivelyAppendCat("Ralph")
console.log(cats)

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("Ralph")
console.log(cats)

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
destructivelyRemoveLastCat()
console.log(cats)

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
destructivelyRemoveFirstCat()
console.log(cats)

function appendCat(name){
    const newCatsArray = [...cats, name]
    return newCatsArray
}
const newCats = appendCat("Kitty")
console.log(newCats)

function prependCat(name){
    const newCatsArrayTwo = [name, ...cats]
    return newCatsArrayTwo
}
const newCatsArrayTwo = prependCat("Baby")
console.log(newCatsArrayTwo)

function removeLastCat(name){
    const newCatsArrayThree = cats.slice(0,-1)
    return newCatsArrayThree
}
const newCatsArrayThree = removeLastCat(1)
console.log(newCatsArrayThree)

function removeFirstCat(name){
    const newCatsArrayFour = cats.slice(1)
    return newCatsArrayFour
}
const newCatsArrayFour = removeFirstCat(1)
console.log(newCatsArrayFour)