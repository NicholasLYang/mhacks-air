Rails.application.routes.draw do
  get 'vr/index'

  root 'skills#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
