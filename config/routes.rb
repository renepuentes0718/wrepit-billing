Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post '/graphql', to: 'graphql#execute'
  root 'wrepits#index'
  match '*path', to: 'wrepits#index', via: :all
end
