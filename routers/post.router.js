var express = require('express');
var postRouter = express.Router();
var post = require('../models/post.model');

postRouter.get('/posts', function(req, res){
  post.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: documents
      });
    }
  });
});

postRouter.get('/posts/:id', function(req, res){
  post.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        posts: documents
      });
    }
  });
});

postRouter.post('/posts', function(req, res){
  var newPost = new post(req.body);
  newPost.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Success'
      });
    }
  });
});

postRouter.put('/posts/:id', function(req, res){
  post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated'
      });
    }
  });
});

postRouter.delete('/posts/:id', function(req, res){
  post.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});


module.exports = postRouter;
