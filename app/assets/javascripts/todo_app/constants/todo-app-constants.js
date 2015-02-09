var keyMirror = require('keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        TODO_LIST_CLICK: null,
        TODO_LIST_CREATE: null,
        TODO_LIST_UPDATE: null,
        TODO_LIST_DESTROY: null,
        RECEIVE_ALL_TODO_LISTS: null,

        RECEIVE_ALL_TODO_LIST_ITEMS: null,
        TODO_LIST_ITEM_CREATE: null,
        TODO_LIST_ITEM_DESTROY: null,
        TODO_LIST_ITEM_UPDATE: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};
