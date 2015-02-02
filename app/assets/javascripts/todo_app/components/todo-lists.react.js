/** @jsx React.DOM */
var React = require('react');
var TodoList = require('../components/todo-list.react');
var TodoListsStore = require('../../todo_app/stores/todo-lists-store');
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
        var lists = this.props.lists;
        var items = _.keys(lists).map(function (id) {
            var todoList = lists[id];
            var url = '/todo_lists/' + todoList.id + '/todo_list_items';
            return (<TodoList key={id} todoList={todoList}/>);
        });
        return (
            <div class='list-group' className={React.addons.classSet({selected: TodoListsStore.getCurrentId(), 'list-group':true })}>
                <ReactCSSTransitionGroup transitionName='example'>
                    {items}
                </ReactCSSTransitionGroup>
            </div>);
    },
    _onChange: function () {
        this.setState(getStateFromStores());
    }
});

module.exports = TodoLists;



