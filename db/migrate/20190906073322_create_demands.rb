class CreateDemands < ActiveRecord::Migration[5.2]
  def change
    create_table :demands do |t|
      t.date :date_from
      t.date :date_to
      t.text :reason_request
      t.text :reason_refuse
      t.string :etat , default:'not treated'
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
