/** @jsx React.DOM */
var React = require('react');
var TodoList = require('../components/todo-list.react');
var TodoListsStore = require('../../todo_app/stores/todo-lists-store');
var TodoTextInput = require('./todo-text-input.react');
var TodoListActions = require('../../todo_app/actions/todo-list-action-creators')
require('react/addons');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


function getStateFromStores() {
    return {
        lists: TodoListsStore.getAll()
    };
}

var TodoLists = React.createClass({
    getDefaultProps: function () {
        return getStateFromStores();
    },
    componentDidMount: function () {
        TodoListsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        TodoListsStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var lists = TodoListsStore.getAll();
        var items = _.keys(lists).map(function (id) {
            var todoList = lists[id];
            return (<TodoList key={id} todoList={todoList}/>);
        });
        return (
            <div className={React.addons.classSet({selected: TodoListsStore.getCurrentId(), 'lists-block': true})}>
                <ul className="list-group">
                    <li className='list-group-item'>
                        <TodoTextInput id="new-todo-list" placeholder='New list' onSave={this._onSave} className={'form-control'}/>
                    </li>
                {items}
                </ul>
            </div>
        );
    },
    _onChange: function () {
        this.setState(getStateFromStores());
    },
    _onSave: function (text) {
        if (text.trim()) {
            TodoListActions.create(text);
        }
    }
});

module.exports = TodoLists;
