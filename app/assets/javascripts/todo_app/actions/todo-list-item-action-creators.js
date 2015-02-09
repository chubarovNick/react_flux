var TodoAppDispatcher = require('../../todo_app/dispatcher/todo-app-dispatcher');
var TodoConstants = require('../../todo_app/constants/todo-app-constants');
var WebApiUtils = require('../../todo_app/utils/web-api-utils');
var ActionTypes = TodoConstants.ActionTypes;

module.exports = {
    saveTodoListItems: function(todoListItem){
        TodoAppDispatcher.handleViewAction({
            type: ActionTypes.CLICK_TODO_LIST,
            todoListId: listId
        })
    },
    cerateTodoListItem: function(name, todoListId){
      var listItem = WebApiUtils.createTodoListItem(name, todoListId);
      TodoAppDispatcher.handleViewAction({
        type: ActionTypes.CREATE_TODO_LIST_ITEM,
        todoListItem: listItem
      })
    },
    deleteTodoListItem: function(id, todoListId){
      var result = WebApiUtils.deleteTodoListItem(id, todoListId);
      if (result) {
        TodoAppDispatcher.handleViewAction({
          type: ActionTypes.DELETE_TODO_LIST_ITEM,
          id: id
        })
      }
    }
}
