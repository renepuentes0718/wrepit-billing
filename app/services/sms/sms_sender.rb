require 'twilio-ruby'

module Sms
  class SmsSender
    def initialize(phone_number, message)
      @phone_number = phone_number
      @message = message
    end

    def send_sms
      client = Twilio::REST::Client.new(ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'])
      client.messages.create(
        from: ENV['TWILIO_PHONE_NUMBER'],
        to:   @phone_number,
        body: @message
      )
    end
  end
end
