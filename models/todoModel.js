var mongoose = require('mongoose');

//instantiate schema 
var Schema = mongoose.Schema; 

//get schema object which let you create new schema. 
//-username, individual todo (String you type), isDone (is it complete or not), file attachment
var todoSchema = new Schema({
	username: String,
	todo: String,
	isDone: Boolean,
	hasAttachment: Boolean
});

//create a model using the todoSchema 
var Todos = mongoose.model('Todos', todoSchema);

//reusable model (create, update, delete Todos);
module.exports = Todos; 

