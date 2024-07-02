import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from '@apollo/client/link/context'
import router from '../components/routes/Index'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  const root = createRoot(rootElement)

  const getCsrfToken = () => {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  }


  const uploadLink = createUploadLink({
    // For development purpose only, make sure you change this if you don't want to run on our chosen default port
    uri: 'http://localhost:5000/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    const csrfToken = getCsrfToken()
    return {
      headers: {
        ...headers,
        'X-CSRF-Token': csrfToken,
      }
    }
  })

  // Combine the links
  const client = new ApolloClient({
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache(),
  })


  root.render(
    <ApolloProvider client={client}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </ApolloProvider>
  )
})
