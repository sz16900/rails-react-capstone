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
      resources :users, only: %i[index]

    end
  end
end