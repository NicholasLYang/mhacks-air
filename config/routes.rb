Rails.application.routes.draw do
  get '/', to: "vr#index"
  get '/currentcommand', to: 'command#current'

  resources :commands
  resources :plane

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
