var express = require('express');
var router = express.Router();
var saveParticipants=require('../models/form_schema');

router.post('/',function(req,res,next){
/*  dropdown_data=req.body.wave_dropdown;
  console.log("Inside save.js inside post");
  console.log(req.body);

  var save= new saveParticipants(req.body);

  switch(dropdown_data){

  	case 'wave3':
  		save.wave_dropdown="Wave 3";
  		break;

  	case 'wave4':
  		save.wave_dropdown="Wave 4";
  		break;

  	case 'wave5':
  		save.wave_dropdown="Wave 5";
  		break;

  	case 'wave6':
  		save.wave_dropdown="Wave 6";
  		break;

  	default:
        res.send("Improper operation");
  }

  console.log("Printing dropdown value before database");
  console.log(save.wave_dropdown);
  save.inputname=req.body.inputname;
  save.inputemail=req.body.inputemail;
  save.inputphone=req.body.inputphone;
  save.inputgiturl=req.body.inputgiturl;
  save.inputempcode=req.body.inputempcode;
  save.inputempdept=req.body.inputempdept;
  save.inputempdesig=req.body.inputempdesig;
  save.inputskills=req.body.inputskills;
  save.inputexp=req.body.inputexp;*/


  console.log("Ready to send to database")
  var save= new saveParticipants(req.body);
  save.save(function(err){
  if (err){
     return handleError(err);
   }
   else{
     console.log("Saved to database");
     res.json(req.body);
   }

});

});


router.get('/',function(req,res,next){
  saveParticipants.find({},function(err,data) {
    if (err){
       return handleError(err);
     }
     else{
       console.log("Got from database");
       res.send(data);
     }
  });
	//res.json(data);
	console.log("Inside save.js inside get data");

});



module.exports = router;