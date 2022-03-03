const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next)=>{
    res.end('Will send all the leaders to you!');
})
.post((req, res, next)=>{
  res.end('Will add dish :'+req.body.name + 'With details :'+req.body.description);
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported in leaders');
})
.delete((req, res, next)=>{
    res.end('Deleting all the leaders');
});

leaderRouter.route('/:leaderId')
//Dish id endpoint
.all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next)=>{
    res.end('Will send the dish :'+req.params.leaderId +  'to you!');
})
.post((req, res, next)=>{
  res.statusCode = 403;  
  res.end('Post operation not supported on leaders');
})
.put((req, res, next)=>{
    res.statusCode = 200;
    res.write('Updating the dish details :'+req.params.leaderId +  '\n');
    
    res.end('Will update the dish: '+ req.body.name +  'With details: '+ req.body.description);
})
.delete((req, res, next)=>{
    res.end('Deleting the leaders'+ req.params.leaderId);

});

module.exports = leaderRouter;