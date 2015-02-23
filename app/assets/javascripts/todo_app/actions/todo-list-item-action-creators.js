var TodoAppDispatcher = require('../../todo_app/dispatcher/todo-app-dispatcher');
var TodoConstants = require('../../todo_app/constants/todo-app-constants');
var WebApiUtils = require('../../todo_app/utils/web-api-utils');
var ActionTypes = TodoConstants.ActionTypes;

module.exports = {
    saveTodoListItems: function (todoListItem) {
        TodoAppDispatcher.handleViewAction({
            type: ActionTypes.TODO_LIST_CLICK,
            todoListId: todoListItem
        })
    },
    createTodoListItem: function (name, todoListId) {
        WebApiUtils.createTodoListItem(name, todoListId).then(function (listItem) {
            TodoAppDispatcher.handleViewAction({
                type: ActionTypes.TODO_LIST_ITEM_CREATE,
                data: listItem
            })
        })

    },
    deleteTodoListItem: function (id, todoListId) {
        WebApiUtils.deleteTodoListItem(id, todoListId).then(function () {
            TodoAppDispatcher.handleViewAction({
                type: ActionTypes.TODO_LIST_ITEM_DESTROY,
                data: {id: id}
            })
        })

    }
}
