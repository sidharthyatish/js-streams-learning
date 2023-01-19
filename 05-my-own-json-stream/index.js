const fs = require('fs')
const stream = require('stream');

const jsonStream = new stream.Transform({
    transform(chunk, encoding, callback) {
        try {
            const data = JSON.parse(chunk.toString());
            if (Array.isArray(data)) {
                data.forEach((item) => {
                    this.push(item);
                });
            } else {
                this.push(data);
            }
            callback();
        } catch (err) {
            callback(err);
        }
    }
});

jsonStream.on('data', (data) => {
    console.log(data);
});

jsonStream.on('error', (err) => {
    console.error(err);
});

const parseJsonArrayUsingStream = () => {
    const pipeline = fs.createReadStream('./sample-array.json')
        .pipe(jsonStream);

    pipeline.on('data', data => console.log("Received : ", data));
}

parseJsonArrayUsingStream()
