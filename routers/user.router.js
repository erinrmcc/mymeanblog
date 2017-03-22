var express = require('express');
var userRouter = express.Router();
var user = require('../models/user.model');

userRouter.post('/signup', function(req, res){
  var newUser = new user(req.body);
  newUser.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Signup successful'
      });
    }
  });
});

userRouter.post('/login', function(req, res){

});

userRouter.get('/users', function(req, res){
  user.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err  //do not actually send full error back in production, not secure
      });
    } else {
      res.status(200).json({
        users: documents
      });
    }
  });
});

userRouter.get('/users/:id', function(req, res){
  user.find({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        users: documents
      });
    }
  });
});

userRouter.put('/users/:id', function(req, res){
  user.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500);json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated'
      });
    }
  });
});

userRouter.delete('/users/:id', function(req, res){
  user.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully delete'
      });
    }
  });
});

module.exports = userRouter;
