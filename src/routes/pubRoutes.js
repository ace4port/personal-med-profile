import React from 'react'

// const UI = React.lazy(() => import('pages/Guide/UI'))
const LogIn = React.lazy(() => import('features/auth/LogIn'))
const Register = React.lazy(() => import('features/auth/Register'))

const LogInDoc = React.lazy(() => import('features/auth/LoginDoc'))
const RegisterDoc = React.lazy(() => import('features/auth/RegisterDoc'))

const Features = () => <div> ---------------- Features ----------------</div>

export const publicRoutes = [
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
    name: 'Doctor Log In',
    path: 'doctor/login',
    component: <LogInDoc />,
  },
  {
    name: 'Doctor Register',
    path: 'doctor/register',
    component: <RegisterDoc />,
  },
]
