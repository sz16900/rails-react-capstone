# Rails.application.routes.draw do
# devise_for :users

#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#   root 'pages#index'

#   namespace :api do 
#     namespace :v1 do
#       resources :coaches, param: :slug
#       resources :reviews, only: %i[create destroy]
#       # dont forget to add more routes for the other things

#     end
#   end

#   # This will allow React Router basically handling routing to our react component without interfering with our rails routes with out api 
#   get '*path', to: 'pages#index', via: :all

# end

Rails.application.routes.draw do
  devise_for :users
  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#home'
    namespace :api do 
    namespace :v1 do
      resources :coaches, param: :slug
      resources :reviews, only: %i[create destroy index]
      resources :appointments, only: %i[create destroy index]

    end
  end
end