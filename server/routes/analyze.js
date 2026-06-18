//now i want this to read repo url from the frontened

const express = require('express');

const router = express.Router();

const myMiddleware = (req, res, next) => {
  // do something with the request
  console.log('a request came in!')
  
  next() // this is crucial — pass control to the next middleware or route
}

//when the request is directed from server.js to here. Ye dekhta hai ke agr koi request ati hai with verb post tu it will do this
router.post('/', (req, res) => {
    const repoUrl = req.body.repoUrl;
    if(!repoUrl) {
        return res.status(400).json({error: 'Repo URL not provided'});
    }
    else {
        return res.json({message: 'Pipeline started', repoUrl});
    }
})



module.exports = router;