class TodoListItem < ActiveRecord::Base
  belongs_to :todo_list, inverse_of: :todo_list_items
end
