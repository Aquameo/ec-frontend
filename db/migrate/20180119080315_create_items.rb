class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.text :img_url

      t.timestamps
    end
  end
end
