/** @jsx React.DOM */
var React = require('react');
var TodoLists = require('./todo-lists.react');

var TodoApp = React.createClass({
    render: function () {
        return (
            <div class="todo-app">
                <div className={"left-col"}>
                    <TodoLists/>
                </div>
                <div className={"right-col"}>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;

