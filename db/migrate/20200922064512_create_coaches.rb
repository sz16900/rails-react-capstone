class CreateCoaches < ActiveRecord::Migration[5.2]
  def change
    create_table :coaches do |t|
      t.string :name
      t.string :image_url
      t.string :slug
      t.string :description
      t.integer :age
      t.string :tagline
      t.integer :likes

      t.timestamps
    end
  end
end
