import React from 'react'

import Button from 'components/ui/Buttons'
import { OutlinedButton } from 'components/ui/Buttons'
import SimpleModal from 'components/ui/Modals/SimpleModal'

const LogInModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit form ..')
  }

  return (
    <div>
      <OutlinedButton handleClick={() => setModalOpen(true)}>Log In modal</OutlinedButton>
      <SimpleModal isActive={modalOpen} title="Log In" subtitle="Lig iinnn" closeModal={() => setModalOpen(false)}>
        <form onSubmit={handleSubmit}>
          <h2>Log in</h2>
          <label htmlFor="email">Email</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <Button type="submit">Submit</Button>
        </form>
      </SimpleModal>
    </div>
  )
}

export default LogInModal
