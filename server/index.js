const express = require('express');
const events = require('events');
const app = express();

const emitter = new events.EventEmitter();

app.use(express.json());

app.listen(80, () => {
    console.log('SERVER WORKED!');
});
