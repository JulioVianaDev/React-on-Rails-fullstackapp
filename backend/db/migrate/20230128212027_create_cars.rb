class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :ano
      t.string :title
      t.text :desc

      t.timestamps
    end
  end
end
