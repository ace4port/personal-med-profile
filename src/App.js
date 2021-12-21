import React from 'react'

import Routes from 'routes'
import ErrorBoundary from 'components/ErrorBoundary'

import { fireToast } from 'components/ui/Toast'
import { useIsOnline } from 'hooks/useIsOnline'

import 'styles/main.scss'
import { Provider } from 'react-redux'
import { store } from 'store'

function App() {
  const isOnline = useIsOnline()

  if (!isOnline) {
    fireToast('warning', 'You are offline')
  }
  // make it not fire on start of app
  if (isOnline) {
    fireToast('success', 'You are online')
  }

  return (
    <ErrorBoundary location="app">
      <Provider store={store}>
        <Routes />
      </Provider>
    </ErrorBoundary>
  )
}

export default App
