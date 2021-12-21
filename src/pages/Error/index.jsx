import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PlainButton } from 'components/ui/Buttons'

const Error = () => {
  const navigate = useNavigate()
  const handleGoBack = () => navigate(-1)

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404</h1>
      The page you are looking for doesnt exist.
      <p>
        Go <PlainButton onClick={handleGoBack}>Back</PlainButton> Or go <a href="/">Home</a> instead
      </p>
    </div>
  )
}

export default Error
