var TodoAppDispatcher = require('../../todo_app/dispatcher/todo-app-dispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../../todo_app/constants/todo-app-constants');
var ActionTypes = TodoConstants.ActionTypes;
var WebApiUtils = require('../../todo_app/utils/web-api-utils');
var CHANGE_EVENT = 'change';
var _todoLists = {};
var _cuurentListItemId;

var TodoListsStore = assign({}, EventEmitter.prototype, {
    init: function () {
        WebApiUtils.getAllTodoLists().then(function (lists) {
            lists.forEach(function (list) {
                _todoLists[list.id] = list
            });
            TodoListsStore.emitChange();
        })
    },
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
    },
    getCurrentId: function () {
        return _cuurentListItemId;
    }
});


function _addTodoLists(lists) {
    lists.forEach(function (list) {
        if (!_todoLists[list.id]) {
            _todoLists[list.id] = list;
        }
    });
};

TodoListsStore.dispatchToken = TodoAppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.type) {
        case ActionTypes.TODO_LIST_CLICK:
            if (action.data.id == _cuurentListItemId) {
                _cuurentListItemId = undefined;
            } else {
                _cuurentListItemId = action.data.id;
            }
            TodoListsStore.emitChange();
            break;
        case ActionTypes.TODO_LIST_CREATE:
            _todoLists[action.data.id] = action.data;
            TodoListsStore.emitChange();
            break;
        case ActionTypes.TODO_LIST_UPDATE:
            _todoLists[action.data.id] = action.data;
            TodoListsStore.emitChange();
            break;
        case ActionTypes.RECEIVE_ALL_TODO_LISTS:
            _addTodoLists(payload.rawLists);
            TodoListsStore.emitChange();
            break;
        case ActionTypes.TODO_LIST_DESTROY:
            delete _todoLists[action.data.id];
            TodoListsStore.emitChange();
            break;

        default:

    }
});

module.exports = TodoListsStore;
