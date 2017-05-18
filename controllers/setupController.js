//seperating out different parts of app to make code easy to manage
var Todos = require('../models/todoModel');

module.exports = function(app){
	app.get('/api/setupTodos', function(req, res){
		//seed database (take the same shape/properties as the schema)
		var starterTodos = [
			{
				username: 'test',
				todo: 'Buy milk',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Feed dog',
				isDone: false, 
				hasAttachment: false 
			},
			{
				username: 'test',
				todo: 'Learn Node',
				isDone: false,
				hasAttachment: false
			}
		];
		//create accept an array 
		Todos.create(starterTodos, function(err, results){
			res.send(results);
		});
	});
}