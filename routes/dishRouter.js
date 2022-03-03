const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next)=>{
    res.end('Will send all the dishes to you!');
})
.post((req, res, next)=>{
  res.end('Will add dish :'+req.body.name + 'With details :'+req.body.description);
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported in dishes');
})
.delete((req, res, next)=>{
    res.end('Deleting all the dishes');
});

dishRouter.route('/:dishId')
//Dish id endpoint
.all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next)=>{
    res.end('Will send the dish :'+req.params.dishId +  'to you!');
})
.post((req, res, next)=>{
  res.statusCode = 403;  
  res.end('Post operation not supported on dishes');
})
.put((req, res, next)=>{
    res.statusCode = 200;
    res.write('Updating the dish details :'+req.params.dishId +  '\n');
    
    res.end('Will update the dish: '+ req.body.name +  'With details: '+ req.body.description);
})
.delete((req, res, next)=>{
    res.end('Deleting the dishes'+ req.params.dishId);

});

module.exports = dishRouter;