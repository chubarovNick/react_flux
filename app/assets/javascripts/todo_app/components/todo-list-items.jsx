/** @jsx React.DOM */
var React = require('react');
require('react/addons');
var TodoListItem = require('../components/todo-list-item');
var TodoListItemsStore = require('../../todo_app/stores/todo-list-items-store');
var TodoTextInput = require('./todo-text-input');
var TodoListItemsActions = require('../../todo_app/actions/todo-list-item-action-creators');
var TodoListsStore = require('../../todo_app/stores/todo-lists-store');

var TodoListItems = React.createClass({
    getDefaultProps: function () {
        return {};
    },
    componentDidMount: function () {
        TodoListItemsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        TodoListItemsStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var listItems = TodoListItemsStore.getAll();
        var uiItems = _.keys(listItems).map(function (id) {
            return (
                <TodoListItem key={id} listItem={listItems[id]}/>
            )
        });
        return (
            <div className={React.addons.classSet({hidden: !TodoListsStore.getCurrentId(), 'todo-list-items': true})}>
                <ul className="animated-list">
                    <li key={0} className='add-list-item'>
                        <TodoTextInput id="new-todo-list-item" placeholder='New todo' onSave={this._onSave} className={'form-control'}/>
                    </li>
                        {uiItems}
                </ul>
            </div>
        );
    },
    _onChange: function () {
        this.setState({});
    },
    _onSave: function (name) {
        var todoListId = TodoListsStore.getCurrentId();
        if (name.trim()) {
            TodoListItemsActions.createTodoListItem(name, todoListId);
        }
    }
});


module.exports = TodoListItems
