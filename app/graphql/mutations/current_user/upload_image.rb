# frozen_string_literal: true

module Mutations
  module CurrentUser
    class UploadImage < BaseMutation
      argument :image, String, required: true

      field :user, Types::UserType, null: false
      p '++++++++++++++++++++++++++++++++++++++'
      def resolve(image)
        blob = ActiveStorage::Blob.create_and_upload!(
          io:       image,
          filename: 'name'
        )
        p "--------------regrets-gql----------------->>>> #{blob}"
        # user = context[:current_user].image.attach(io: image.to_io, filename: image.original_filename)
        # user.save!
        # { user: }
      end
    end
  end
end
