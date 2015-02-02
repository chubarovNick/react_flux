/** @jsx React.DOM */
var React = require('react');

var TodoList = React.createClass({
    render: function () {
        return ( <a href={this.props.href}> {this.props.name} </a> )
    }
});

module.exports = TodoList;


