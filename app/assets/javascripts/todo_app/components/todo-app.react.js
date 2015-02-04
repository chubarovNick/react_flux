/** @jsx React.DOM */
var React = require('react');
var TodoLists = require('./todo-lists.react');
var TodoListItems = require('./todo-list-items.react')

var TodoApp = React.createClass({
    render: function () {
        return (
            <div class="todo-app">
                <div className={"col-md-3"}>
                    <TodoLists/>
                </div>
                <div className={"col-md-9"}>
                    <TodoListItems/>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;

