var React = require('react');
var TodoList = require('../components/todo-list.react');
var TodoListsStore  = require('../../todo_app/stores/todo-lists-store');

function getStateFromStores(){
    return {
        lists: TodoListsStore.getAllTodoLists()
    };
}

var TodoLists = React.createClass({
    getDefaultProps: function () {
        return getStateFromStores();
    },
    componentDidMount: function() {
        TodoListsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TodoListsStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var items = this.props.lists.map(function (todoList) {
            var url = '/todo_lists/' + todoList.id + '/todo_list_items';
            return (<li><TodoList href={url} name={todoList.name}></TodoList></li>);
        });
        return (<ul>{items}</ul>);
    },
    _onChange: function() {
        this.setState(getStateFromStores());
    }
});

module.exports = TodoLists;



