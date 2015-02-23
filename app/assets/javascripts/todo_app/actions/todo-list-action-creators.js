var TodoAppDispatcher = require('../../todo_app/dispatcher/todo-app-dispatcher');
var TodoConstants = require('../../todo_app/constants/todo-app-constants');
var ActionTypes = TodoConstants.ActionTypes;
var WebApiUtils = require('../../todo_app/utils/web-api-utils');

module.exports = {
    clickList: function (listId) {
        WebApiUtils.getAllTodoListItems(listId).then(function (todoListItems) {
            TodoAppDispatcher.handleViewAction({
                type: ActionTypes.TODO_LIST_CLICK,
                data: {id: listId},
                todoListItems: todoListItems
            })
        })
    },
    create: function (text) {
        WebApiUtils.createTodoList(text).then(function (todoList) {
            TodoAppDispatcher.handleViewAction({
                type: ActionTypes.TODO_LIST_CREATE,
                data: todoList
            })
        })

    },
    destroy: function (id) {
        WebApiUtils.destroyTodoList(id).then(function () {
                TodoAppDispatcher.handleViewAction({
                    type: ActionTypes.TODO_LIST_DESTROY,
                    data: {id: id}
                })
            }
        );

    },
    editList: function (id, name) {
        WebApiUtils.updateList(id, name).then(function (newTodoList) {
            TodoAppDispatcher.handleViewAction(
                {
                    type: ActionTypes.TODO_LIST_UPDATE,
                    data: newTodoList
                }
            )
        })
    }
};
