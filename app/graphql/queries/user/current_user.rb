# frozen_string_literal: true

module Queries
  module User
    class CurrentUser < Queries::BaseQuery
      field :user, Types::UserType, null: true
      def resolve
        context[:current_user]
      end
    end
  end
end
