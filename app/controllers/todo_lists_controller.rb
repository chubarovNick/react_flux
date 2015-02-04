class TodoListsController < ApplicationController
  expose(:todo_lists)
  expose(:todo_list)

  respond_to :html, :json

  def create
    list = TodoList.create(list_params)
    respond_with(list)
  end

  def destroy
    todo_list = TodoList.find(params[:id])
    todo_list.destroy
    respond_with(todo_list)
  end

  private

  def list_params
    params.require(:todo_list).permit(:id, :name)
  end

end
