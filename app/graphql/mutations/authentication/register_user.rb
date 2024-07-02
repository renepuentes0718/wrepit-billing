# frozen_string_literal: true

module Mutations
  module Authentication
    class RegisterUser < BaseMutation
      argument :email, String, required: true
      argument :password, String, required: true
      argument :last_name, String, required: true
      argument :first_name, String, required: true
      argument :phone, String, required: false

      # rubocop:disable Metrics/AbcSize
      def resolve(**args)
        user = User.new(
          unconfirmed_email: args[:email],
          password: args[:password],
          last_name: args[:last_name],
          first_name: args[:first_name],
          phone: args[:phone],
          confirmation_token: Jwt::Encoder.new(args[:email]).call,
          confirmation_sent_at: Time.zone.now
        )
        user.save
        ::Authentication::ConfirmUserMailer.with(user:).welcome.deliver_later
        user
      rescue StandardError
        raise GraphQL::ExecutionError, 'Invalid input provided' unless user.save
      end
      # rubocop:enable Metrics/AbcSize
    end
  end
end
