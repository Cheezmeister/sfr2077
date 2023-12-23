class CreateSeasonings < ActiveRecord::Migration[7.1]
  def change
    create_table :seasonings do |t|
      t.string :name

      t.timestamps
    end
  end
end
