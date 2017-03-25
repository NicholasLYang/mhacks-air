require 'test_helper'

class VrControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get vr_index_url
    assert_response :success
  end

end
