class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.date :date
      t.time :time
      t.string :name
      t.integer :cost
      t.string :location
      t.string :website

      t.timestamps
    end
  end
end
