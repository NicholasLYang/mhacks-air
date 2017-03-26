class PlaneController < ApplicationController

  def index
    Rails.application.load_seed if Plane.all.blank?
    @planes = Plane.select("id", "action")
    render json: @planes
  end

end
