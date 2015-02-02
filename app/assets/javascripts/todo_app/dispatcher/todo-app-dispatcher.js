var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var TodoAppConstants = require('../../todo_app/constants/todo-app-constants')

var PayloadSources = TodoAppConstants.PayloadSources;

var TodoAppDispatcher = assign(new Dispatcher(), {
    handleServerAction: function (action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },
    handleViewAction: function (action) {
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = TodoAppDispatcher;