const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next)=>{
    res.end('Will send all the Promotions to you!');
})
.post((req, res, next)=>{
  res.end('Will add dish :'+req.body.name + 'With details :'+req.body.description);
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported in promotions');
})
.delete((req, res, next)=>{
    res.end('Deleting all the promotions');
});

promoRouter.route('/:promoId')
//Dish id endpoint
.all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next)=>{
    res.end('Will send the dish :'+req.params.promoId +  'to you!');
})
.post((req, res, next)=>{
  res.statusCode = 403;  
  res.end('Post operation not supported on promotions');
})
.put((req, res, next)=>{
    res.statusCode = 200;
    res.write('Updating the dish details :'+req.params.promoId +  '\n');
    
    res.end('Will update the dish: '+ req.body.name +  'With details: '+ req.body.description);
})
.delete((req, res, next)=>{
    res.end('Deleting the promotions'+ req.params.promoId);

});

module.exports = promoRouter;