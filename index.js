// Write your solution here!

//Initial Array cats

let cats = ["Milo", "Otis", "Garfield"]

cats.length
console.log(cats.length)

//Destructively add "Ralph" to end of array using .push

cats.push("Ralph")

cats.length
console.log(cats.length, cats)

//Destructively add "Bob" to beginning of array using .unshift()

cats.unshift("Bob")

cats.length
console.log(cats.length, cats)

//Destructively remove last cat using .pop()

cats.pop()

console.log(cats.length, cats)

//Destructively remove first cat using .shift()

cats.shift()

console.log(cats.length, cats)

//Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged (use spread operator)

let appendCats = ["Arnold", ...cats]
console.log(appendCats.length, appendCats)
console.log(cats)

//Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged (use .slice)

let removeLastCat = appendCats.slice(-1)
console.log(removeLastCat.length, removeLastCat)




