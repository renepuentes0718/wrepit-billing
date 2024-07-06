module Mutations
  module Sms
    class VerifyOtp < BaseMutation
      argument :phone_number, String, required: true
      argument :otp_code, String, required: true

      field :success, Boolean, null: false

      def resolve(phone_number:, otp_code:)
        user = User.find_by(phone_number:)
        otp = user.otp.where(code: otp_code).last
        expires_at = Time.current - 2.days

        if otp && !otp.expired?
          user.update(verified: true)
          otp.update(expires_at:)
          { success: true }
        else
          { success: false }
        end
      end
    end
  end
end
