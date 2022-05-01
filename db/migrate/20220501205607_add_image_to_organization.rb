class AddImageToOrganization < ActiveRecord::Migration[6.1]
  def change
    add_column :organizations, :image, :string
  end
end
