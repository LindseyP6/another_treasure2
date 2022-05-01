class UsersController < ApplicationController
    # skip_before_action :authorized_user, only: [:create, :show, :index]

    def index
        users= User.all
        render json: users, status: :ok
    end

    def me
        render json: current_user, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:name, :telephone, :email, :password)
    end
end