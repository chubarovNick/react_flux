class TodoListItemsController < ApplicationController
  expose(:todo_list)
  expose(:todo_list_items, ancestor: :todo_list)
end