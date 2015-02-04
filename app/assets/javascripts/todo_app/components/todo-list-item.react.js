/** @jsx React.DOM */
var React = require('react');
var TdooListItemsActions = require('../../todo_app/actions/todo-list-item-action-creators');

var TodoListItem = React.createClass({
    getDefaultProps: function () {
      return {editing: false};
    },
    render: function () {
        return (
            <p> {this.props.listItem.text} </p>
        );
    },
    _onDoubleClick: function () {
      this.setState({editing:true});
    },
    _onSave: function () {
      TdooListItemsActions.save
    }
});

module.exports = TodoListItem;
