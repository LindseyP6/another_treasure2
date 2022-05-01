class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:login, :logout]

    def login

        user = User.find_by(email: params[:user][:email])
        
        if user && user.authenticate(params[:user][:password])
            
            session[:current_user] = user.id
            render json: user, status: :ok 
        else 
            render json: {error: "Invalid password or username"}, status: :unauthorized
        end 
    end 

    def destroy
        session.delete :current_user
        head :no_content
    end
end
