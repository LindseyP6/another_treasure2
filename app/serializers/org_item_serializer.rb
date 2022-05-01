class OrgItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :telephone, :hours, :needs

  # def item_names
  #   self.object.items
  # end

  has_many :items
end
