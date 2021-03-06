class CommandController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    @command = Command.new(params.require(:command)
                             .permit(:action))
    @command.save
    p params.inspect
  end

  def current
    @command = Command.order("created_at DESC").first
    render :json => @command
  end


end
