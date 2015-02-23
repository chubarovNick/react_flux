var FayeAppUtils = require('../../todo_app/utils/faye-api-utils');
var FayeActions = require('../../todo_app/actions/faye-action-creator')


function requestData(url) {
    return $.ajax({
        url: url,
        success: function (data, status, xhr) {
            var rawChanels = xhr.getResponseHeader('channels');
            var channels = JSON.parse(rawChanels);
            for (var i = 0; i < channels.length; i++) {
                Thunderer.sign(channels[i]);
                FayeAppUtils.addListner(channels[i].channel, function (data, channel) {
                    FayeActions.emitFaye(data);
                })
            }
        }
    });
}

function postData(url, data) {
    return $.ajax({
        type: 'POST',
        url: url,
        data: data
    });
}

function deleteData(url) {
    return $.ajax({
        type: 'DELETE',
        url: url
    });
}
function putData(url, data) {
    return $.ajax({
        type: 'PUT',
        url: url,
        data: data
    });
}

module.exports = {
    getAllTodoLists: function () {
        return requestData('/todo_lists.json');
    },
    getAllTodoListItems: function (todoListId) {
        var url = '/todo_lists/' + todoListId + '/todo_list_items.json';
        return requestData(url);
    },
    createTodoList: function (text) {
        return postData('/todo_lists.json', {todo_list: {name: text}});
    },
    destroyTodoList: function (id) {
        return deleteData('/todo_lists/' + id + '.json');
    },
    createTodoListItem: function (name, todoListId) {
        var url = '/todo_lists/' + todoListId + '/todo_list_items.json';
        return postData(url, {todo_list_item: {text: name}});
    },
    deleteTodoListItem: function (id, todoListId) {
        var url = '/todo_lists/' + todoListId + '/todo_list_items/' + id + '.json'
        return deleteData(url);
    },
    updateList: function (id, name) {
        var url = '/todo_lists/' + id + '.json';
        return putData(url, {todo_list: {name: name}});
    }
}
