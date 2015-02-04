var TodoAppDispatcher = require('todo_app/dispatcher/todo-app-dispatcher');
var TodoConstants = require('todo_app/constants/todo-app-constants');
var ActionTypes = TodoConstants.ActionTypes;

module.exports = {
    saveTodoListItems: function(todoListItem){
        TodoAppDispatcher.handleViewAction({
            type: ActionTypes.CLICK_TODO_LIST,
            todoListId: listId
        })
    }
}
