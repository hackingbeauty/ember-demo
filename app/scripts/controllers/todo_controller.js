Todos.TodoController = Ember.ObjectController.extend({
	isEditing: false,
	
	editTodo: function(){
		this.set('isEditing', true);
	},
	
	isCompleted: function(key, value){
		var model = this.get('model');

		if(value === undefined){
			//property being used as a getter
			return model.get('isCompleted');
		} else {
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted'),
	
	acceptChanges: function(){
		this.set('isEditing', false);
		this.get('model').save();
	},

	removeTodo: function() {
		var todo = this.get('model');
		todo.deleteRecord();
		todo.save();
	}
});