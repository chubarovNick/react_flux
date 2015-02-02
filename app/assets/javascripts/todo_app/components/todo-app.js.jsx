var React = require('react');
var TodoLists = require('./todo-lists.react');

var TodoApp = React.createClass({
    render: function () {
        return (<TodoLists/>);
    }
});

module.exports = TodoApp;

