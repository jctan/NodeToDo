//web api
var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app){
	//make some end points 
	app.use(bodyParser.json()); //parse out json out of the http request body.
	app.use(bodyParser.urlencoded({ extended: true })); //make sure it can handle url encoded data 

	//get all todos for particular person (http get request)
	app.get('/api/todos/:uname', function(req, res){
		Todos.find({ username: req.params.uname },
		function(err, todos){ //when it callback, it'll give you the results (todos)
			if(err) throw err;

			res.send(todos);
		});
	});

	//get individual todos 
	app.get('/api/todo/:id', function(req, res){
		Todos.findById({ _id: req.params.id }, 
		function(err, todos){ //(todos - js rep of what's coming out of mongodb)
			if(err) throw err;

			res.send(todos); //data come back from mongo
		});
	});

	//post updated todo or new todo (send http request as post and express respond, look at body and took the json into a js obect in the body)
	app.post('/api/todo', function(req, res){

		//body is javascript object created from the json sitting in the body of HTTP request (if id exist on body)
		if(req.body.id){
			Todos.findByIdAndUpdate(req.body.id,{ //find in the db and here are the properities updating and new value
				todo: req.body.todo, isDone: req.body.isDone, 
				hasAttachement: req.body.hasAttachement }, function(err, todo){ //when it finishes it, it runs a callback func (give back what you just gave to mongo)
					if(err) throw err;

					res.send('Success');
				})
		}
		else {
			//if no id, create a new todo and save it to mongo.
			var newTodo = Todos({
				username: 'test',
				todo: req.body.todo,
				isDone: req.body.isDone,
				hasAttachement: req.body.hasAttachement
			});
			newTodo.save(function(err){
				if(err) throw err;

				res.send('Success');
			});
		}
	});

	//delete todo
	app.delete('/api/todo', function(req, res){
		Todos.findByIdAndRemove(req.body.id, function(err){
			if (err) throw err;

			res.send('Success');
		});
	});
}