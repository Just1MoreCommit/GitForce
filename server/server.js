const express = require('express');

const app = express();

app.use(cors()); //enables cors for all routes

app.use(express.json()); //tells express to parse data sent by frontend to JSON

const analyzeRoute = require('./routes/analyze'); // Basically analyze file ko import kr rhe ho and using it here as analyzeRoute same with status

const statusRoute = require('./routes/status');


app.use('/analyze', analyzeRoute);      //this means ke jb /analyze kisi url ke start mei aegi tu let the analyzeRoute (analyze wala file) to handle it same with status
app.use('/status', statusRoute);


app.listen(3000, ()=> {
    console.log('server running on port 3000');
})
