import fetch from 'node-fetch';
async function* fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    yield response.json();
}

const it = fetchUsers();

// it.next() returns a promise
// it.next().then() returns the generator iterator object

console.log(it.next().then((res)=>{
    console.log(res)
}))

// it.next().then(({ value, done }) => {
//     console.log(value);
// });

