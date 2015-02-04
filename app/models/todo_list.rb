class TodoList < ActiveRecord::Base
  has_many :todo_list_items, inverse_of: :todo_list, dependent: :destroy
end
