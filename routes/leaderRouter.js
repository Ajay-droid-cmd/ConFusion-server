const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const leaderRouter = express.Router();
const Leaders = require('../models/leader')
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.get((req, res,next)=>{
   Leaders.find({})
   .then((leaders)=>{
       res.statusCode =200;
       res.setHeader('Content-type','application/json')
       res.json(leaders)
   },(err)=>next(err))
   .catch((err)=>next(err))
})
.post((req, res, next)=>{
  Leaders.create(req.body)
  .then((leaders)=>{
      res.statusCode = 200;
      res.setHeader('Content-type','application/json')
      res.json(leaders)
  },(err)=>next(err))
  .catch((err=>next(err)))
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported in leaders');
})
.delete((req, res, next)=>{
    Leaders.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-type','application/json');
        res.json(resp)
    },(err)=>next(err))
    .catch((err)=>next(err));
});

leaderRouter.route('/:leaderId')

.get((req, res,next)=>{
 Leaders.findById(req.body.leaderId)
 .then((leader)=>{
     res.statusCode = 200;
     res.setHeader('Content-type','application/json')
     res.json(leader);
 },(err)=>next(err))
 .catch((err)=>next(err))
})
.post((req, res, next)=>{
  res.statusCode = 403;  
  res.end('Post operation not supported on leaders');
})
.put((req, res, next)=>{
    Leaders.findByIdAndUpdate(req.params.leaderId,{
        $set:req.body
    },{new : true})
    .then((leaders)=>{
        res.statusCode =200;
        res.setHeader('Content-type','application/json')
        res.json(leaders)
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.delete((req, res, next)=>{
    Leaders.findByIdAndRemove(req.params.promoId)
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));

});

module.exports = leaderRouter;