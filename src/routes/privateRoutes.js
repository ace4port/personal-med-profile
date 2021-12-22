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
const Appointment = React.lazy(() => import('features/appointment'))
const Prescription = React.lazy(() => import('features/prescription'))
const Reports = React.lazy(() => import('features/reports'))
const Support = React.lazy(() => import('features/support'))
const Account = React.lazy(() => import('features/account'))
const Services = React.lazy(() => import('features/services'))

export const privateRoutes = [
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
    component: <Appointment />,
  },
  {
    name: 'Prescription',
    icon: <RiCapsuleFill />,
    path: 'prescription',
    component: <Prescription />,
  },
  {
    name: 'Reports',
    icon: <HiOutlineDocument />,
    path: 'reports',
    component: <Reports />,
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
