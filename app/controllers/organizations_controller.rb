class OrganizationsController < ApplicationController
    # skip_before_action :authorized_user, only: [:index, :show]
    
    def index
        orgs = Organization.all
        render json: orgs
    end

    def show
        org = Organization.find(params[:id])
        render json: org, serializer: OrgItemSerializer
    end
    
end
