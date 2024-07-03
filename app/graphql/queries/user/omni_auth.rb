# frozen_string_literal: true

module Queries
  module User
    class OmniAuth < BaseMutation
      argument :provider, String, required: true
      argument :uid, String, required: true

      field :user, Types::UserType, null: true
      field :errors, [String], null: false

      def resolve(provider:, uid:)
        user = User.find_by(provider:, uid:)
        if user
          context[:current_user] = user
          { user:, errors: [] }
        else
          { user: nil, errors: ['User not found'] }
        end
      end
    end
  end
end
