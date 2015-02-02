var keyMirror = require('keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        CLICK_TODO_LIST: null,
        CREATE_TODO_LIST_ITEM: null,
        CREATE_TODO_LIST: null,
        RECEIVE_ALL_TODO_LISTS: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};