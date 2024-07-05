import { createBrowserRouter } from 'react-router-dom'

import LoginRoutes from './AuthRoutes'
import MainRoutes from './MainRoutes'
import { CURRENT_USER } from '../api/queries'

const router = createBrowserRouter([LoginRoutes, MainRoutes], { basename: '/' })

export default router
