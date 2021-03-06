// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require jquery.rest
//= require faye-browser
//= require thunderer

$(document).ready(function () {
    var TodoApp = require('./todo_app/components/todo-app');
    var TodoListStore = require('./todo_app/stores/todo-lists-store');
    TodoListStore.init()
    var React = require('react');
    window.React = React; // export for http://fb.me/react-devtools

    React.render(React.createElement(TodoApp, null), document.getElementById('todos'));
})

