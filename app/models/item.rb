class Item < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :organization
    
    def org_name 
      self.organization.name
    end

    def user_name
        self.user.name
    end
    
end
