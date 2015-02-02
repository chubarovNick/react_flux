var TodoAppDispatcher = require('../../todo_app/dispatcher/todo-app-dispatcher');
var TodoAppConstants = require('../../todo_app/constants/todo-app-constants')

var ActionTypes = TodoAppConstants.ActionTypes;

module.exports = {
    receiveAllTodoLists: function (todoLists) {
        TodoAppDispatcher.handleServerAction({
                type: ActionTypes.RECEIVE_ALL_TODO_LISTS,
                rawLists: todoLists
            }
        )
    }

}