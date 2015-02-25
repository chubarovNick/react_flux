var React = require('react');
var TodoListsStore = require('../../todo_app/stores/todo-lists-store');
var TodoListActions = require('../../todo_app/actions/todo-list-action-creators')
var TodoTextInput = require('./todo-text-input')
require('react/addons');

function isActive(todoList) {
    return TodoListsStore.getCurrentId() == todoList.id;
}
var TodoList = React.createClass({
    getInitialState: function () {
        return {editing: false};
    },
    handleClick: function () {
        TodoListActions.clickList(this.props.todoList.id)
    },
    render: function () {
        var input;
        if(this.state.editing){
            input = <TodoTextInput className='edit-input form-control' onSave={this._onEdit} onCancel={this._onCancel} value={this.props.todoList.name}/>
        }
        return (
            <li className={React.addons.classSet({
                "list-group-item": true,
                active: isActive(this.props.todoList),
                editing: this.state.editing
            })} href='#' onClick={this.handleClick}>
                <h4>
                        {this.props.todoList.name}
                    <span className={'remove-button'} onClick={this._onDestroy}>
                        <span className={'glyphicon glyphicon-remove'}/>
                    </span>
                    <span className={'edit-button'} onClick={this._onStartEdit}>
                        <span className={'glyphicon glyphicon-edit'}/>
                    </span>

                </h4>
                {input}
            </li> );
    },
    _onEdit: function (newValue) {
        if (newValue.trim()){
            TodoListActions.editList(this.props.todoList.id, newValue)
            this.setState({editing: false});
        }
    },
    _onStartEdit: function (e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.setState({editing: true});
    },
    _onCancel: function () {
        this.setState({editing: false});
    },
    _onDestroy: function (e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        TodoListActions.destroy(this.props.todoList.id);
    }
});

module.exports = TodoList;
