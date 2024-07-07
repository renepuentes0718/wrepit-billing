# frozen_string_literal: true

module Mutations
  module CurrentUser
    class UploadImage < BaseMutation
      argument :image, ApolloUploadServer::Upload, required: true

      field :image_url, String, null: false

      def resolve(image:)
        p "---->>>> #{image}"
        blob = ActiveStorage::Blob.create_and_upload!(
          io:           image,
          filename:     image.original_filename,
          content_type: image.content_type
        )
        p "mmmmmmmmmm------->>>>> #{Rails.application.routes.url_helpers.rails_blob_url(blob, only_path: true)}"
        { image_url: Rails.application.routes.url_helpers.rails_blob_url(blob, only_path: true) }
      end
    end
  end
end
