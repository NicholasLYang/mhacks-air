class SkillsController < ApplicationController
  protect_from_forgery with: :null_session

  def root
    puts request.require(:data)
  end
end
