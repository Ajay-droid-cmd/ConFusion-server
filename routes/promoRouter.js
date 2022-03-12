const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promotions = require('../models/promotions');
const promoRouter = express.Router();

//TODO Add endpoints to the api 
//TODO Test the api in postman DONE

promoRouter.use(bodyParser.json());
promoRouter.route('/')
.get((req, res,next)=>{
   Promotions.find({})
   .then((promotions)=>{
    res.statusCode = 200;
    res.setHeader('content-type','application/json')
    res.json(promotions);
   },(err)=>next(err))
   .catch((err)=>next(err))
})
.post((req, res, next)=>{
  Promotions.create(req.body)
  .then((promotions)=>{
      req.statusCode = 201;
      res.setHeader('Content-type','application/json');
      res.json(promotions)
  },(err)=>next(err))
  .catch((err)=>next(err));
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported in promotions');
})
.delete((req, res, next)=>{
    Promotions.remove({})
   .then((resp)=>{
       res.statusCode = 200;
       res.setHeader('content-type','application/json');
       res.json(resp)
   },(err)=>next(err))
   .catch((err)=> next(err));
});

promoRouter.route('/:promoId')
.get((req, res,next)=>{
   Promotions.findById(req.params.promoId)
   .then((promotions)=>{
        if(promotions != null){
            res.statusCode = 200;
            res.setHeader('Content-type','application/json');
            res.json(promotions)
        }
        else{
            err = new Error ('Promotion' + req.body.promoId + 'Not found');
            err.statusCode = 404;
            return next(err);
        }
   }, (err)=> next(err))
   .catch((err)=> next(err));
})
.post((req, res, next)=>{
  res.statusCode = 403;  
  res.end('Post operation not supported on promotions');
})
.put((req, res, next)=>{
    Promotions.findByIdAndUpdate(req.params.promoId,{
        $set : req.body
    },{new : true})
    .then((promotion)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(promotion)
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.delete((req, res, next)=>{
  Promotions.findByIdAndRemove(req.params.promoId)
  .then((resp)=>{
      res.statusCode = 200;
      res.setHeader('Content-type','application/json');
      res.json(resp);
  },(err)=>next(err))
  .catch((err)=>next(err));
});

module.exports = promoRouter;