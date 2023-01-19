// for..of syntax can be used on any iterable objects
// Set, Map, arrays, String etc are iterable. But normal objects are not

const medals = new Set(['gold', 'silver', 'bronze'])

for (const medal of medals) {
    console.log(medal)
}

const medallists = new Map([
    ['Teddy Riner', 33],
    ['Driulis Gonzalez Morales', 16],
    ['Ryoko Tani', 16],
    ['Ilias Iliadis', 15]
])

for (const [judoka, medals] of medallists) {
    console.log(`${judoka} has won ${medals} medals`)
}


const medallists = {
    'Teddy Riner': 33,
    'Driulis Gonzalez Morales': 16,
    'Ryoko Tani': 16,
    'Ilias Iliadis': 15
}
// We cannot iterate this object directly. This results in
/*
for (const [judoka, medals] of medallists) {
                               ^
TypeError: medallists is not iterable
 */

// We can iterate using Object.entries method
for (const [judoka, medals] of Object.entries(medallists)) {
    console.log(`${judoka} has won ${medals} medals`)
}