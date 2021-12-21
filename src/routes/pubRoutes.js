import React from 'react'
import Error from 'pages/Error'

const Blog = React.lazy(() => import('pages/Blog'))
const UI = React.lazy(() => import('pages/Guide/UI'))
const Counter = React.lazy(() => import('features/counter/Counter'))
const LogIn = React.lazy(() => import('features/auth/LogIn'))
const Register = React.lazy(() => import('features/auth/Register'))

const Features = () => <div> ---------------- Features ----------------</div>

export const publicRoutes = [
  {
    name: 'Guide',
    path: 'guides',
    component: <UI />,
  },
  {
    name: 'Blog',
    path: 'blogs',
    component: <Blog />,
  },
  {
    name: 'Counter',
    path: 'counter',
    component: <Counter />,
  },
  {
    name: 'Features',
    path: 'features',
    component: <Features />,
  },
  {
    name: 'Log In',
    path: 'login',
    component: <LogIn />,
  },
  {
    name: 'Register',
    path: 'register',
    component: <Register />,
  },
  {
    name: 'Error',
    path: '*',
    component: <Error />,
  },
]
