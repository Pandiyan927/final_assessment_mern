var Mongoose=require('mongoose');
var Schema=Mongoose.Schema;

var savedparticipants= new Schema({
	wave_dropdown:String,
	inputname:String,
	inputemail:String,
	inputphone:String,
	inputgiturl:String,
	inputempcode:String,
	inputempdept:String,
	inputempdesig:String,
	inputskills:String,
	inputexp:String

});

module.exports=Mongoose.model('savedparticipants',savedparticipants)