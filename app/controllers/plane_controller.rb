class PlaneController < ApplicationController

  def index
    Rails.application.load_seed if Plane.all.blank?
    @planes = Plane.all
    render :json => @planes
  end

end
