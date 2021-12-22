import React from 'react'
import Avatar from 'components/ui/Avatar'
import styles from './profile.module.scss'

const person = {
  name: 'John',
  age: 30,
  gender: 'Male',
  occupation: 'Student',
  marital: 'Single',
  height: 5.6,
  weight: 70,
  address: 'Dharan 21, UK',
  phone: '8122342342',
  c_person: 'Dad',
  c_relation: 'Father',
  c_phone: '234235345',
  blood_group: 'A+ve',
}

const Profile = () => {
  return (
    <div className={styles.container}>
      <h4>Profile</h4>
      <div className={styles.profile}>
        <div className={styles.desc}>
          <h4>Name: {person.name}</h4>
          <h4>Age: {person.age}</h4>
          <h4>Gender: {person.gender}</h4>
          <h4>Blood group: {person.blood_group}</h4>
          <h4>Height: {person.height}'</h4>
          <h4>Weight: {person.weight}kg</h4>
          <h4>Occupation: {person.occupation}</h4>
          <h4>Marital Status: {person.marital}</h4>
          <h4>Address: {person.address}</h4>
          <h4>Phone Number: {person.phone}</h4>
          <h3>Guardian: {person.c_person}</h3>
          <h4>Relationship: {person.c_relation}</h4>
          <h4>Guardian Phone: {person.c_phone}</h4>
        </div>
        <div className={styles.avatarContainer}>
          <Avatar />
        </div>
      </div>
    </div>
  )
}

export default Profile
