class TodoListItemsController < ApplicationController
  include Thunderer::ControllerAdditions
  expose(:todo_list)
  expose(:todo_list_items, ancestor: :todo_list)
  expose(:todo_list_item)

  thunderer_channels '/todo_lists/:id/todo_list_items', object: :todo_list

  respond_to :html, :json

  def create
    @todo_list_item = todo_list.todo_list_items.create(todo_list_item_params)
  end

  def destroy
    todo_list_item.destroy
    respond_with(todo_list_item)
  end

  private

  def todo_list_item_params
    params.require(:todo_list_item).permit(:id, :text)
  end
end
