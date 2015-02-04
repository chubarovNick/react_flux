function requestData(url) {
    var result;
    jQuery.ajax({
        url:    url,
        success: function (data) {
          result = data;
        },
        async:   false
    });
    return result;
}

function postData(url, data){
  var result;
  jQuery.ajax({
    type: 'POST',
    url: url,
    data: data,
    success: function (data) {
      result = data;
    },
    async: false
  });
  return result;
}

function deleteData(url) {
  var result = false;
  jQuery.ajax({
    type: 'DELETE',
    url: url,
    success: function () {
      result = true;
      console.log('Delete success');
    },
    async: false
  })
  return result;
}

module.exports = {
    getAllTodoLists: function () {
        var data = requestData('/todo_lists.json');
        return data;
    },
    getAllTodoListItems: function(todoListId){
        var url = '/todo_lists/' + todoListId + '/todo_list_items.json';
        var items = requestData(url);
        return items;
    },
    createTodoList: function (text) {
      return postData('/todo_lists.json', {todo_list: {name: text}});
    },
    destroyTodoList: function (id) {
      var result = deleteData('/todo_lists/' + id +'.json')
      return result;
    },
    createTodoListItem: function (name, todoListId) {
      var url = '/todo_lists/' + todoListId + '/todo_list_items.json'
      return postData(url,{todo_list_item: {text: name}});
    },
    deleteTodoListItem: function (id, todoListId) {
      var url = '/todo_lists/' + todoListId + '/todo_list_items/' + id +'.json'
      return deleteData(url);
    }
}
