
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'

import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={Router}>

      <App />
    </RouterProvider>
  </AuthProvider>
)
