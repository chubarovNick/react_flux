var TodoAppDispatcher = require('todo_app/dispatcher/todo-app-dispatcher');
var TodoConstants = require('todo_app/constants/todo-app-constants');
var ActionTypes = TodoConstants.ActionTypes;

module.exports = {
    clickList: function(listId){
        TodoAppDispatcher.handleViewAction({
            type: ActionTypes.CLICK_TODO_LIST,
            todoListId: listId
        })
    }
}