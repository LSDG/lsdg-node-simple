const express = require('express');
const SimpleStorage = require('./simple-storage.js');

let appStorage = new SimpleStorage();
let app = new express();

let handleGetValue = function(req, res)
{
    res.end(appStorage.getValue(req.params.key));
};

let handleSetValue = function(req, res)
{
    let postData = '';

    req.on('data', (chunk) => {
        postData += chunk;
    });

    req.on('end', () => {
        res.end(appStorage.setValue(req.params.key, postData));
    });
};

app.get('/:key', handleGetValue);
app.post('/:key', handleSetValue);

app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
});
