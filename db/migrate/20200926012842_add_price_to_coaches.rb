class AddPriceToCoaches < ActiveRecord::Migration[6.0]
  def change
    add_column :coaches, :price, :integer
  end
end
