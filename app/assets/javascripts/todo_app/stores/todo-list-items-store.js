var TodoAppDispatcher = require('../../todo_app/dispatcher/todo-app-dispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../../todo_app/constants/todo-app-constants');
var WebApiUtils = require('../../todo_app/utils/web-api-utils');
var ActionTypes = TodoConstants.ActionTypes;

var CHANGE_EVENT = 'change';
var _todoListItems = {};

var TodoListItemsStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    get: function (id) {
        return _todoListItems[id];
    },
    getAll: function () {
        return _todoListItems;
    }
});

TodoListItemsStore.dispatchToken = TodoAppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.type) {
        case ActionTypes.TODO_LIST_CLICK:
            _todoListItems = {};
            action.todoListItems.forEach(function(item){
               _todoListItems[item.id] = item;
            });
            TodoListItemsStore.emitChange();
            break;
        case ActionTypes.TODO_LIST_ITEM_CREATE:
            _todoListItems[action.data.id] = action.data;
            TodoListItemsStore.emitChange();
            break;
        case ActionTypes.TODO_LIST_ITEM_DESTROY:
            delete _todoListItems[action.data.id];
            TodoListItemsStore.emitChange();
            break;
        default:

    }
});

module.exports = TodoListItemsStore;
