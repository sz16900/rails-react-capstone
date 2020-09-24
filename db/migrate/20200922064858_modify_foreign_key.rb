class ModifyForeignKey < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :appointments, :coaches 
    remove_foreign_key :appointments, :users 
    remove_foreign_key :reviews, :coaches 
    add_foreign_key :appointments, :coaches, on_delete: :cascade
    add_foreign_key :appointments, :users, on_delete: :cascade 
    add_foreign_key :reviews, :coaches, on_delete: :cascade 
  end
end
