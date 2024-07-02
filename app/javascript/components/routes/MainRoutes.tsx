import * as React from 'react'
import MinimalLayout from '../shared/Outlet'
import HomePage from '../main/HomePage'
import ProfileWrapper from '../profile/ProfileWrapper'

const MainRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: '/Profile',
      element: <ProfileWrapper />
    },
  ]
}

export default MainRoutes
