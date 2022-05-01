class AddHoursToOrganization < ActiveRecord::Migration[6.1]
  def change
    add_column :organizations, :hours, :string
  end
end
