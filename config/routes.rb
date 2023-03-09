Rails.application.routes.draw do
  resources :events
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "home#index"
  
  get 'aboutus', to: 'pages#aboutus'
  get 'events', to: 'pages#events'
  get 'locations', to: 'pages#locations'
  get 'history', to: 'pages#history'
end
