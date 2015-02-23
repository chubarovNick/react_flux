/** @jsx React.DOM */
var React = require('react');
var TodoLists = require('./todo-lists');
var TodoListItems = require('./todo-list-items')

class TodoApp extends React.Component {
    render() {

        return (
            <div class="todo-app">
                <TodoLists></TodoLists>
                <TodoListItems></TodoListItems>
            </div>
        );
    }
}

module.exports = TodoApp;

