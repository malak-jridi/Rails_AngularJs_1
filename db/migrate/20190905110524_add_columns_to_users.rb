class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :username, :string, :unique => true
    add_column :users, :salary, :float
    add_column :users, :role, :string, default: "employee"
    add_column :users, :image, :string
    add_column :users , :phone , :integer


  end
end
