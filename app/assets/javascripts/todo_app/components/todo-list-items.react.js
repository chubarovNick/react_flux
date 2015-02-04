/** @jsx React.DOM */
var React = require('react');
var TodoListItem = require('../components/todo-list-item.react');
var TodoListItemsStore  = require('../../todo_app/stores/todo-list-items-store');

var TodoListItems = React.createClass({
    getDefaultProps: function () {
        return {};
    },
    componentDidMount: function() {
        TodoListItemsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TodoListItemsStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var listItems = TodoListItemsStore.getAll();
        var uiItems = _.keys(listItems).map(function (id) {
            return (<TodoListItem listItem={listItems[id]}/>)
        });
        return (<div>{uiItems}</div>);
    },
    _onChange: function () {
        this.setState({});
    }
});



module.exports = TodoListItems
