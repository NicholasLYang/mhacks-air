Rails.application.routes.draw do
  get '/', to: "vr#index"

  post '/', to: "skills#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
