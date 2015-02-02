json.array! todo_list_items do |todo_list_item|
  json.(todo_list_item,:id, :text, :todo_list_id)
end