# frozen_string_literal: true

# TODO: Find the ideal way to mutate without passing an argument gql
module Mutations
  module Authentication
    class LogoutUser < BaseMutation
      argument :email, String, required: false

      def resolve(email:)
        @current_user = nil
        context[:session].delete(:user_id)
        { email: }
      rescue StandardError
        raise 'OOP! user could not log out'
      end
    end
  end
end
