module Mutations
  module Sms
    class SendVerificationCode < BaseMutation
      argument :phone_number, String, required: true

      field :success, Boolean, null: false

      def resolve(phone_number:)
        verification_code = rand(1000..9999).to_s
        SmsSender.new(phone_number, "Your verification code is #{verification_code}").send_sms

        # Save verification code to the database (or cache)
        VerificationCode.create(phone_number:, code: verification_code)

        { success: true }
      rescue StandardError
        { success: false }
      end
    end
  end
end
