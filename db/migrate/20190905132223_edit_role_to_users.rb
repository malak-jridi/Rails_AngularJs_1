class EditRoleToUsers < ActiveRecord::Migration[5.2]
  def change
    def up
      change_column :users, :role, :string
    end
  
    def down
      change_column :users, :role, :integer
    end
  end
end
