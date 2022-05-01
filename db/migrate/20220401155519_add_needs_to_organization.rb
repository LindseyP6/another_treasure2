class AddNeedsToOrganization < ActiveRecord::Migration[6.1]
  def change
    add_column :organizations, :needs, :string
  end
end
