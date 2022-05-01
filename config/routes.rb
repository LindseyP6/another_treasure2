Rails.application.routes.draw do
  
  resources :organizations 
  resources :items
  resources :users, only: [:index, :create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#login"
  # get '/authorized_user', to:'users#show'
  get "/me", to: "users#me"
  post '/signup', to: 'users#create' 
  delete '/logout', to: 'sessions#destroy'
end
