import React from 'react'
import { useSelector } from 'react-redux'
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
  const user = useSelector((state) => state.auth.user)
  const isDoctor = useSelector((state) => state.auth.isDoctor)

  return (
    <div>
      <div>---------- Welcome to your Dashboard {user?.full_name} ----------------</div>
      <p>What do you want to do today?</p>
      {!isDoctor ? <PatientLayout /> : <DocLayout />}
    </div>
  )
}

export default Dashboard

const PatientLayout = () => {
  return (
    <Container>
      <SimpleCard link="appointments" title="Make an appointment" />
      <SimpleCard link="prescription" title="See prescriptions" />
      <SimpleCard link="reports" title="View medical reports" />
      <SimpleCard link="services" title="Services" />
      <SimpleCard link="support" title="Support" />
    </Container>
  )
}

const DocLayout = () => {
  return (
    <Container>
      <SimpleCard link="appointments" title="Approve an appointment" />
      <SimpleCard link="prescription" title="Write prescriptions" />
      <SimpleCard link="reports" title="Upload medical reports" />
      <SimpleCard link="services" title="Services" />
      <SimpleCard link="support" title="Support" />
    </Container>
  )
}

const Card = ({ children }) => <div className="card">{children}</div>
const SimpleCard = ({ title, children, link }) => (
  <Card>
    <Link to={link}>
      <h4>{title}</h4>
    </Link>
    {children}
  </Card>
)
