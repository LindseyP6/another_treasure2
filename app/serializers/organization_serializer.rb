class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :telephone, :address, :longitude, :latitude, :hours, :needs

  # has_many :items
end
