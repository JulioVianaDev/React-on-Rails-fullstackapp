Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :cars
  end

  get 'latest',to: 'api/cars#latest'
end
