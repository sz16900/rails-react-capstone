class ModifyForeignKeyReviews < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :reviews, :users 
    add_foreign_key :reviews, :users, on_delete: :cascade 
  end
end
