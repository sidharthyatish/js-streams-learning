const jsonArrayStreamer = require('stream-json/streamers/StreamArray');
const jsonObjectStreamer = require('stream-json/streamers/StreamObject')
const fs = require('fs');
const Batch = require("stream-json/utils/Batch");
const util = require("util");
const {pipeline} = require("node:stream/promises");

const parseJsonObjectsUsingStream = () => {
    const pipeline = fs.createReadStream('./sample-objects.json')
        .pipe(jsonObjectStreamer.withParser());

    pipeline.on('data', data => console.log("Received : ", data));
}


const parseJsonArrayUsingStream = () => {
    const pipeline = fs.createReadStream('./sample-array.json')
        .pipe(jsonArrayStreamer.withParser());

    pipeline.on('data', data => console.log("Received : ", data));
}

const splitJsonArrayIntoBatches = () => {
    const pipeline = fs.createReadStream('./sample-array.json')
        .pipe(jsonArrayStreamer.withParser())
        .pipe(new Batch({batchSize : 10}))

    pipeline.on('data', data => console.log("Received : ", data));
}
const generator = async function* (iterableArrayObjects) {
    for await (const elements of iterableArrayObjects) {
        yield elements.map(e => e.value.name);
    }
}



const changingDataOnStreaming = async () => {
    await pipeline(
        fs.createReadStream('./sample-array.json'),
        jsonArrayStreamer.withParser(),
        async function* (source, { signal }) {
            // source.setEncoding('utf8');  // Work with strings rather than `Buffer`s.
            for await (const chunk of source) {
                console.log("Extract key from this chunk",chunk)
                yield await chunk.key;
            }
        },
        async (source) => {
           for await (const chunk of source){
               console.log("Extracted key : ",chunk)
           }
        }
    );


    // pipeline.on('data', data => console.log(data));
}

// parseJsonObjectsUsingStream();
// parseJsonArrayUsingStream();
splitJsonArrayIntoBatches();
// changingDataOnStreaming().then((data)=>{
//     console.log("FINAL DATA: ")
//     console.log(data)
// })
