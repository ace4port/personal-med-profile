import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  // align-self: flex-start;
  // justify-self: flex-start;
  border-radius: 3px;
  border: 2px solid white;
`

const Dashboard = () => {
  return (
    <div>
      <div>---------- Welcome to you Dashboard ----------------</div>
      <Container>
        <SimpleCard title="Make an appointment" />
        <SimpleCard title="See prescriptions" />
        <SimpleCard title="Analyze previous reports" />
        <SimpleCard title="Services" />
        <SimpleCard title="Support" />
      </Container>
    </div>
  )
}

export default Dashboard

const Card = ({ children }) => <div className="card">{children}</div>
const SimpleCard = ({ title, children }) => (
  <Card>
    <Link to="appointments">
      <h4>{title}</h4>
    </Link>
    {children}
  </Card>
)
