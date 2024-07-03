# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # User related queries
    field :current_user, resolver: Queries::User::CurrentUser
    field :omni_auth, resolver: Queries::User::OmniAuth
  end
end
