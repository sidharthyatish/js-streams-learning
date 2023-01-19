import fetch from 'node-fetch';

const url = 'https://api.agify.io/?name=michael';

const options = {
    method: 'GET',
};


const handler = async () => {
    const res = await fetch(url, options);
    console.log("Done fetching")
    return res.json();
}

handler().then((res) => {
    if (res) {
        console.log("Lambda is done")
    }
})

console.log("End")
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error('error:' + err));