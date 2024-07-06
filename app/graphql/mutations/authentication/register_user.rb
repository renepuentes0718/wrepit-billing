# frozen_string_literal: true

module Mutations
  module Authentication
    class RegisterUser < BaseMutation
      argument :email, String, required: true
      argument :password, String, required: true
      argument :last_name, String, required: true
      argument :first_name, String, required: true
      argument :phone, String, required: true

      # rubocop:disable Metrics/AbcSize
      def resolve(**args)
        p "----------------------------------------1 #{args}"
        user = User.new(
          unconfirmed_email:    args[:email],
          password:             args[:password],
          last_name:            args[:last_name],
          first_name:           args[:first_name],
          phone:                '+233531450705',
          confirmation_token:   Jwt::Encoder.new(args[:email]).call,
          confirmation_sent_at: Time.zone.now
        )
        p '---------------------------------------- 2'
        # byebug
        p user.inspect
        user.save
        p '-----------------------------------------3'
        ::Authentication::ConfirmUserMailer.with(user:).welcome.deliver_later
        user
      rescue StandardError
        raise GraphQL::ExecutionError, 'Invalid input provided' unless user.save
      end
      # rubocop:enable Metrics/AbcSize
    end
  end
end
