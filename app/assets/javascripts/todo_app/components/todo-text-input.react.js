/** @jsx React.DOM */
var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;
var ESCAPE_KET_CODE = 27;
var TodoTextInput = React.createClass({

    propTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        onSave: ReactPropTypes.func.isRequired,
        onCancel: ReactPropTypes.func,
        value: ReactPropTypes.string
    },

    getInitialState: function () {
        return {
            value: this.props.value || ''
        };
    },

    /**
     * @return {object}
     */
    render: function () /*object*/ {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={this._save}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                value={this.state.value}
                autoFocus={true}
            />
        );
    },

    /**
     * Invokes the callback passed in as onSave, allowing this component to be
     * used in different ways.
     */
    _save: function () {
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        });
    },
    _cancel: function () {
        this.props.onCancel();
        this.setState({value: ''});

    },
    /**
     * @param {object} event
     */
    _onChange: function (/*object*/ event) {
        this.setState({
            value: event.target.value
        });
    },

    /**
     * @param  {object} event
     */
    _onKeyDown: function (event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
        if (event.keyCode === ESCAPE_KET_CODE){
            this._cancel();
        }
    }

});

module.exports = TodoTextInput;
