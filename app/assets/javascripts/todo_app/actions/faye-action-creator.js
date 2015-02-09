var TodoAppDispatcher = require('../../todo_app/dispatcher/todo-app-dispatcher');
var TodoConstants = require('../../todo_app/constants/todo-app-constants');
var ActionTypes = TodoConstants.ActionTypes;

module.exports ={
    emitFaye: function (data, channel) {
        TodoAppDispatcher.handleServerAction({
            type: ActionTypes.FAYE_ACTION,
            data: data,
            channel: channel
        })
    }
}