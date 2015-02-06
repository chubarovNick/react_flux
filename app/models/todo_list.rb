class TodoList < ActiveRecord::Base
  include Thunderer::PublishChanges
  has_many :todo_list_items, inverse_of: :todo_list, dependent: :destroy
  notify_client_to_channels '/todo_lists'
end
