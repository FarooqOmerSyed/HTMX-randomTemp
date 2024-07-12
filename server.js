import express from 'express';

const app = express();


// static folder
app.use(express.static('public'));

// parse url-encoded
app.use(express.urlencoded({ extended: true }));

//parse json
app.use(express.json());




// handling random weather data  GET
let currentTemp = 20;
app.get('/get-temperature', (req, res) => {
    currentTemp += Math.random() * 2 - 1;
    res.send(currentTemp.toFixed(1) + 'C');
});





// start the server

app.listen(3001, () => {
    console.log('server is listening in port 3001')
});