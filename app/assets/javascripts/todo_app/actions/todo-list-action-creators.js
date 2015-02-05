var TodoAppDispatcher = require('todo_app/dispatcher/todo-app-dispatcher');
var TodoConstants = require('todo_app/constants/todo-app-constants');
var ActionTypes = TodoConstants.ActionTypes;
var WebApiUtils = require('todo_app/utils/web-api-utils');

module.exports = {
    clickList: function(listId){
        var todoListItems = WebApiUtils.getAllTodoListItems(listId);
        TodoAppDispatcher.handleViewAction({
            type: ActionTypes.CLICK_TODO_LIST,
            todoListId: listId,
            todoListItems: todoListItems
        })
    },
    create: function (text) {
      var todoList = WebApiUtils.createTodoList(text);
      TodoAppDispatcher.handleViewAction({
        type: ActionTypes.CREATE_TODO_LIST,
        todoList: todoList
      })
    },
    destroy: function (id) {
      var success = WebApiUtils.destroyTodoList(id);

      if (success){
        TodoAppDispatcher.handleViewAction({
          type: ActionTypes.DELETE_TODO_LIST,
          id: id
        })
      }
    }
}
