var keyMirror = require('keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        CLICK_TODO_LIST: null,
        CREATE_TODO_LIST: null,
        EDIT_TODO_LIST: null,
        DELETE_TODO_LIST: null,
        RECEIVE_ALL_TODO_LISTS: null,

        RECEIVE_ALL_TODO_LIST_ITEMS: null,
        CREATE_TODO_LIST_ITEM: null,
        DELETE_TODO_LIST_ITEM: null,
        EDIT_TODO_LIST_ITEM: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};
