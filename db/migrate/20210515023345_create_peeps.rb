class CreatePeeps < ActiveRecord::Migration[6.1]
  def change
    create_table :peeps do |t|
      t.string :title
      t.string :description
      t.boolean :peepedat

      t.timestamps
    end
  end
end
