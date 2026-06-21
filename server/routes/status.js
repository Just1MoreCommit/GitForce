const express = require('express')
const { addClient, removeClient, broadcast } = require('../sse/clients');

const router = express.Router();
let final = null;

// const myMiddleware = (req, res, next) => {
//     console.log("A request came in");
//     next();
// };


router.get('/events', (req, res) => {
    //phone call between frontend and backend
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    res.flushHeaders()
    addClient(res); 
    res.write(`data: ${JSON.stringify({ message: 'connected'})}\n\n`);
    req.on('close', ()=> {
        removeClient(res);
    });
});


router.post('/', (req, res) => {
    //update data sent by n8n
    const data = req.body;
    final = data;
    broadcast(data);
});


router.get('/result', (req, res) => {
    

    if(!final) {
       return res.status(400).json({ error: 'result not ready yet!!'});
    };

    res.json(final);
});

module.exports = router;