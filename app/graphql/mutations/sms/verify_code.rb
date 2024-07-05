module Mutations
  module Sms
    class VerifyCode < BaseMutation
      argument :phone_number, String, required: true
      argument :code, String, required: true

      field :success, Boolean, null: false

      def resolve(phone_number:, code:)
        verification_code = VerificationCode.find_by(phone_number:)

        if verification_code&.code == code
          # Handle successful verification (e.g., mark user as verified)
          verification_code.destroy
          { success: true }
        else
          { success: false }
        end
      end
    end
  end
end
