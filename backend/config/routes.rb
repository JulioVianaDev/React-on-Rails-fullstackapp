Rails.application.routes.draw do
  namespace :api do
    resources :cars
  end

  get 'latest',to: 'api/cars#latest'
end
