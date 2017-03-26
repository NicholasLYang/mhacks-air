class CommandController < ApplicationController

  def create
    @command = Command.new(params.require(:command)
                              .permit(:action, :plane))
    @command.save
    p params.inspect
  end

  def current
    @command = Command.first
    Command.destroy(1)
    render :json => @command
  end


end
