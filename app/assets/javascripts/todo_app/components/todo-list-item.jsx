var React = require('react');
var TdooListItemsActions = require('../../todo_app/actions/todo-list-item-action-creators');
var TodoListsStore = require('../../todo_app/stores/todo-lists-store');



class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editing: false};
    }
    onDoubleClick(){
        this.setState({editing: true});
    }
    onSave(){
        TdooListItemsActions.save
    }
    onDeleteItem(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        var todoListId = TodoListsStore.getCurrentId();
        TdooListItemsActions.deleteTodoListItem(this.props.listItem.id, todoListId);
    }
    render() {
        return (
            <li className="todo-list-item">

                <div className='panel panel-default' >
                    <div className="panel-body">
                        <span className='done-button'>
                            <span className="glyphicon glyphicon-ok"/>
                        </span>
                        <h4>{this.props.listItem.text}</h4>
                        <span className={'remove-button'}>
                            <span className={'glyphicon glyphicon-remove'} onClick={this.onDeleteItem.bind(this)}/>
                        </span>
                    </div>

                </div>
            </li>
        );
    }
}

module.exports = TodoListItem;
