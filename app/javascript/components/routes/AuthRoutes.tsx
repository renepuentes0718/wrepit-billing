import React from 'react'
import MinimalLayout from '../shared/Outlet'
import Login from '../authentication/Login'
import Register from '../authentication/Register'
import ResetPassword from '../authentication/ResetPassword'
import ForgotPassword from '../authentication/ForgotPassword'


const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [

    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/unlock_account/?token=:token',
      element: <ResetPassword />
    },
    {
      path: '/unlock_account',
      element: <ResetPassword />
    },
    {
      path: '/reset_password/reset/?token=:token',
      element: <ResetPassword />
    },
    {
      path: '/reset_password',
      element: <ResetPassword />
    },
    {
      path: '/forgot_password',
      element: <ForgotPassword />
    },
    {
      path: '/log_in',
      element: <Login />
    },
  ]
}

export default LoginRoutes
