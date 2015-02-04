/** @jsx React.DOM */
var React = require('react');
var TodoLists = require('./todo-lists.react');
var TodoListItems = require('./todo-list-items.react')

var TodoApp = React.createClass({
    render: function () {
        return (
            <div class="todo-app">
                <TodoLists/>
                <TodoListItems/>
            </div>
        );
    }
});

module.exports = TodoApp;

