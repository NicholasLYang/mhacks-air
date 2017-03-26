Rails.application.routes.draw do
  get '/', to: "vr#index"

  post '/', to: "skills#create"

  get '/current', to: 'skills#current'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
