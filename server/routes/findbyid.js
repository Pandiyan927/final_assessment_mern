var express = require('express');
var router = express.Router();
var saveParticipants=require('../models/form_schema');




router.get('/:docid',function(req,res,next){

  var id=req.params.docid;
  //saveParticipants.findById(id, function (err, user) { ... } );
  saveParticipants.findById(id, function(err,data){
    if(err)
    {
      throw err;
    }
    else
    {
      console.log("message got");
      res.json(data);
    }
  });



});



module.exports = router;