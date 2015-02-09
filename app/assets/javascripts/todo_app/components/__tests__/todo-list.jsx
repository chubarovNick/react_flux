/** @jsx React.DOM */
jest.dontMock('../todo-list');


describe('TodoList', function () {
   it('should render list name', function () {
       var React = require('react/addons');
       var TestUtils = React.addons.TestUtils;
       var TodoList = require('../todo-list');
       var todoList = {id: 1, name: 'testedName'};
       var list = TestUtils.renderIntoDocument(<TodoList todoList={todoList}/>);
       expect(list.getDOMNode().textContent).toEqual('testedName');
   })
});