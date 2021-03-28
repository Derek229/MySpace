Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    get '/api_test', to:'static#api_test'
    resources :posts 
    get 'all_posts', to: 'posts#all_posts'
    get 'friend_posts', to: 'posts#friends_posts'
  end
end
