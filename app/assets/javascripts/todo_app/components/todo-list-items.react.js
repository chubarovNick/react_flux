/** @jsx React.DOM */
var React = require('react');
var TodoListItem = require('../components/todo-list-item.react');
var TodoListItemsStore  = require('../../todo_app/stores/todo-list-items-store');

function getStateFromStores(){
    return {
        listItems: TodoListItemsStore.getAll()
    };
}

var TodoListItems = React.createClass({
    getDefaultProps: function () {
        return getStateFromStores();
    },
    componentDidMount: function() {
        TodoListItemsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TodoListItemsStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var todoListItems = this.props.listItems;
        var uiItems = _.keys(todoListItems).map(function (id) {
            return (<TodoListItem name={todoListItems[id].name}/>)
        });
        return (uiItems);
    }
});



module.exports = TodoListItems