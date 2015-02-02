/** @jsx React.DOM */
var React = require('react');
var TodoListsStore  = require('../../todo_app/stores/todo-lists-store');
var TodoListItemsCreator = require('../../todo_app/actions/todo-list-action-creators')
require('react/addons');

function isActive(todoList){
    return TodoListsStore.getCurrentId() == todoList.id;
}

var TodoList = React.createClass({
    handleClick: function(){
        TodoListItemsCreator.clickList(this.props.todoList.id)
    },
    render: function () {
        return (
            <a className={React.addons.classSet({
                "list-group-item": true,
                active: isActive(this.props.todoList)
            })} href='#' onClick={this.handleClick}>
                <h4>
                        {this.props.todoList.name}

                </h4>
            </a> );
    }
});

module.exports = TodoList;


