# frozen_string_literal: true

module AuthenticationHelper
  def authentication_url(email_type:, token:)
    "http://localhost:3000/#{email_type}?#{token}"
  end
end
