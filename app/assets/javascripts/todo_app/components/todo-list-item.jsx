/** @jsx React.DOM */
var React = require('react');
var TdooListItemsActions = require('../../todo_app/actions/todo-list-item-action-creators');
var TodoListsStore = require('../../todo_app/stores/todo-lists-store');

var TodoListItem = React.createClass({
    getDefaultProps: function () {
        return {editing: false};
    },
    render: function () {
        return (
            <li className="todo-list-item">

                <div className='panel panel-default' >
                    <div className="panel-body">
                        <span className='done-button'>
                            <span className="glyphicon glyphicon-ok"/>
                        </span>
                        <h4>{this.props.listItem.text}</h4>
                        <span className={'remove-button'}>
                            <span className={'glyphicon glyphicon-remove'} onClick={this._onDestroy}/>
                        </span>
                    </div>

                </div>
            </li>
        );
    },
    _onDoubleClick: function () {
        this.setState({editing: true});
    },
    _onSave: function () {
        TdooListItemsActions.save
    },
    _onDestroy: function (e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        var todoListId = TodoListsStore.getCurrentId();
        TdooListItemsActions.deleteTodoListItem(this.props.listItem.id, todoListId);
    }
});

module.exports = TodoListItem;
