# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    # Authentication related mutations
    field :register_user, Types::UserType, null: false, mutation: Mutations::Authentication::RegisterUser
    field :signin_user, Types::UserType, null: false, mutation: Mutations::Authentication::SigninUser
    field :confirm_user, Types::UserType, null: false, mutation: Mutations::Authentication::ConfirmUser
    field :reset_password, Types::UserType, null: false, mutation: Mutations::Authentication::ResetPassword
    field :forgot_password, Types::UserType, null: false, mutation: Mutations::Authentication::ForgotPassword
    field :logout_user, Types::UserType, null: false, mutation: Mutations::Authentication::LogoutUser
    # User related mutations
    field :update_user, Types::UserType, null: false, mutation: Mutations::CurrentUser::UpdateUser
    field :upload_image, mutation: Mutations::CurrentUser::UploadImage
  end
end
