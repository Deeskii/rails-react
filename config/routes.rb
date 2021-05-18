Rails.application.routes.draw do
  get 'peeps', to: 'hello_world#index'
  resources :posts
  root 'home#index'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
