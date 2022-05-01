class ItemsController < ApplicationController
    # skip_before_action :authorized_user, only: [:index, :create, :destroy, :show, :update]

    def index
        items = Item.all
        render json: items
    end
    
    def show 
        item = Item.find(params[:id])
        render json: item 
    end

    def create
        item = Item.create!(item_params)    
        render json: item, status: :created
    end

    def update 
        item = Item.find(params[:id])
        item.update!(item_params)
        render json: item, status: :accepted
    end

    def destroy 
        item = Item.find(params[:id])
        item.destroy 

        head :no_content

    end
    private

    def item_params
        params.permit(:name, :description, :image, :category, :id, :user_id, :organization_id)
    end
end
    


