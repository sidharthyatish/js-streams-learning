//https://www.derpturkey.com/node-js-generators-for-streaming/
// A Generator function that returns a Generator object
// that yields the numbers 0 to 9 one at at time

//yield ~= breakpoints
function* createGenerator() {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
}

const sampleGenerator = createGenerator();

console.log(sampleGenerator.next()) //Should return 0 {value: 0, done: false}
console.log(sampleGenerator.next()) //should return 1
console.log(sampleGenerator.next().done) //should return false for value 2

//normally print remaining values. Since generator is an iterator, we can access elems without .next() call
for(const value of sampleGenerator){
    console.log(value)
}
console.log(sampleGenerator.next()) //now value is undefined and done is true
//thus, generators behave like streams. Does not load everything in the memory and get things done one by one
