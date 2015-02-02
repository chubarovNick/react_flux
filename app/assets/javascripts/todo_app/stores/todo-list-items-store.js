var TodoAppDispatcher = require('../../todo_app/dispatcher/todo-app-dispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../../todo_app/constants/todo-app-constants');
var ActionTypes = TodoConstants.ActionTypes;

var CHANGE_EVENT = 'change';
var _todoLists = {};

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
        return _todoLists[id];
    },
    getAll: function () {
        return _todoLists;
    }
});

TodoListItemsStore.dispatchToken = TodoAppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.type) {
        case ActionTypes.CLICK_TODO_LIST:
            alert('');
            break;
        case ActionTypes.CREATE_TODO_LIST_ITEM:
            break;
        default:

    }
});

module.exports = TodoListItemsStore;