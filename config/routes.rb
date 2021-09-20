Rails.application.routes.draw do
  resources :usuarios
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'home/index'

  root to: 'home#index'

end
