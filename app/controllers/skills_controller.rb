class SkillsController < ApplicationController
  def root
    # input = AlexaRubykit.build_request(params)
    # output = AlexaRubykit::Response.new
    # session_end = true
    # message = "There was an error." # unknown thing happened

    # case input.type
    # when "LAUNCH_REQUEST"
    #   # user talked to our skill but did not say something matching intent
    #   message = "Say something see what happens."
    # when "INTENT_REQUEST"
    #   case input.name
    #   when "UserInput"
    #     # our custom, simple intent from above that user matched
    #     given = input.slots["Generic"].value
    #     message = "You said, #{given}."
    #   end
    # when "SESSION_ENDED_REQUEST"
    #   # it's over
    #   message = nil
    # end

    # output.add_speech(message) unless message.blank?
    # render json: output.build_response(session_end)
    output = AlexaRubykit::Response.new
    session_end = true
    output.add_speech("Hello World")
    render json: output.build_response(session_end)
  end
end
