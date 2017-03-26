class SkillsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    @command = Command.new(params.require(:command)
                             .permit(:action))
    @command.save
    p params.inspect
  end

  def current
    @commands = Command.order("created_on DESC")..first
  end
end
