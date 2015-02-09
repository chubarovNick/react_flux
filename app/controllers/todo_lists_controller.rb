class TodoListsController < ApplicationController
  include Thunderer::ControllerAdditions
  expose(:todo_lists)
  expose(:todo_list,config: :strong, attributes: :list_params)
  thunderer_channels '/todo_lists'

  respond_to :html, :json

  def create
    list = TodoList.create(list_params)
    ReactTodo::FayePublishing.publish_create(list, '/todo_lists')
    respond_with(list)
  end

  def destroy
    todo_list = TodoList.find(params[:id])
    ReactTodo::FayePublishing.publish_destroy(todo_list, '/todo_lists') if todo_list.destroy
    respond_with(todo_list)
  end

  def update
    ReactTodo::FayePublishing.publish_update(todo_list, '/todo_lists')  if todo_list.save
    respond_with(todo_list)
  end

  private

  def list_params
    params.require(:todo_list).permit(:id, :name)
  end

end
