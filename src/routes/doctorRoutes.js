import React from 'react'

import {
  ImProfile,
  FaHospitalSymbol,
  RiCapsuleFill,
  HiOutlineDocument,
  MdMedicalServices,
  MdContactSupport,
  MdManageAccounts,
} from 'components/icons'

const Profile = React.lazy(() => import('features/profile'))

const DoctorAppointment = React.lazy(() => import('features/appointment/doctor'))
const DoctorPrescription = React.lazy(() => import('features/prescription/doctor'))
const DoctorReports = React.lazy(() => import('features/reports'))

const Support = React.lazy(() => import('features/support'))
const Account = React.lazy(() => import('features/account'))
const Services = React.lazy(() => import('features/services'))

export const doctorRoutes = [
  {
    name: 'Profile',
    icon: <ImProfile />,
    path: 'profile',
    component: <Profile />,
  },
  {
    name: 'Appointment',
    icon: <FaHospitalSymbol />,
    path: 'appointments',
    component: <DoctorAppointment />,
  },
  {
    name: 'Prescription',
    icon: <RiCapsuleFill />,
    path: 'prescription/*',
    component: <DoctorPrescription />,
  },
  {
    name: 'Reports',
    icon: <HiOutlineDocument />,
    path: 'reports',
    component: <DoctorReports />,
  },
  {
    name: 'Services',
    icon: <MdMedicalServices />,
    path: 'services',
    component: <Services />,
  },
  {
    name: 'Support',
    path: 'support',
    icon: <MdContactSupport />,
    component: <Support />,
  },

  {
    name: 'Account',
    icon: <MdManageAccounts />,
    path: 'account',
    component: <Account />,
  },
]
