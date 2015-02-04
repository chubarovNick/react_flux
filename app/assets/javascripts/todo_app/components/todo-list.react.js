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
            <li className={React.addons.classSet({
                "list-group-item": true,
                active: isActive(this.props.todoList)
            })} href='#' onClick={this.handleClick}>
                <h4>
                        {this.props.todoList.name}
                        <span className={'remove-button'} onClick={this._onDestroy}>
                          <span className={'glyphicon glyphicon-remove'}/>
                        </span>
                </h4>

            </li> );
    },
    _onDestroy: function (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      TodoListItemsCreator.destroy(this.props.todoList.id);
    }
});

module.exports = TodoList;
