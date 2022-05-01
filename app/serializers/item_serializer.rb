class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :category, :user_name, :organization_id, :org_name


end
