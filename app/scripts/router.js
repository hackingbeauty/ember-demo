Todos.Router.map(function () {
  this.resource('todos', { path: '/' }, function(){
  	// additional child routes
  	this.route('active');
  });
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return Todos.Todo.find();
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
	model: function(){
		return Todos.Todo.filter(function(){
			if(!todo.get('isCompleted')){
				return true;
			}
		});
	},
	renderTemplate: function(){
		
	}
});

