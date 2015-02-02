class CreateTodoListItems < ActiveRecord::Migration
  def change
    create_table :todo_list_items do |t|
      t.string :text
      t.integer :todo_list_id

      t.timestamps null: false
    end
  end
end
