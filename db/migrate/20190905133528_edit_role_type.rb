class EditRoleType < ActiveRecord::Migration[5.2]
  def change
    def up
      change_column :users, :role, :integer
    end
  
    def down
      change_column :users, :role, :string
    end
  end
end
