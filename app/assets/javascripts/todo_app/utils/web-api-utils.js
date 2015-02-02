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
module.exports = {
    getAllTodoLists: function () {
        var data = requestData('/todo_lists.json');
        console.log(data);
        return data;
    },
    getAllTodoListItems: function(todoList){
        return [];
    }
}