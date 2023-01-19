function* counter() {
    let i=0;
    while (true){
        yield i++;
    }
}

const myCounter = counter();

console.log(myCounter.next()) // Gives expected result
console.log(myCounter.next()) // Gives expected result

console.log(counter().next()) // Calling it directly doesn't work as expected because every time we call generator function directly, it creates a new instance of gen
console.log(counter().next())
