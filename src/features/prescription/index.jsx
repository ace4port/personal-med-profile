import React from 'react'
import styled from 'styled-components'

const Card = styled.div.attrs(() => ({
  className: 'card',
}))`
  width: 250px;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Prescription = () => {
  return (
    <div>
      <div>----------------------------- Here are your prescriptions --------------------------</div>
      <p>
        Forget to take them on time? Download our <a href="#app">mobile app</a> to get reminder/notifications on time.
      </p>
      <Container>
        <PrescriptionCard med="Honitos" times={2} />
        <PrescriptionCard med="Cetamol" times={3} />
        <PrescriptionCard med="De Cold" times={5} />
        <PrescriptionCard med="Beta 2" times={2} />
        <PrescriptionCard med="Synex" times={1} />
      </Container>
    </div>
  )
}

export default Prescription

const PrescriptionCard = ({ med = 'Honitos', times = 'Two' }) => {
  return (
    <Card className="prescription-card">
      <h5>{med}</h5>
      <label>Mark as taken</label>
      <input type="checkbox" />
      <p>
        <em>Recommended dose:</em>
        <br /> <strong>{times}</strong> times a day
      </p>
    </Card>
  )
}
