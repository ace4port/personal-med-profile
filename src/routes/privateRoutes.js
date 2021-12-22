import Appointment from 'features/appointment'
import Services from 'features/services'
import Prescription from 'features/prescription'
import Reports from 'features/reports'
import Support from 'features/support'
import Account from 'features/account'
import Profile from 'features/profile'

import {
  ImProfile,
  FaHospitalSymbol,
  RiCapsuleFill,
  HiOutlineDocument,
  MdMedicalServices,
  MdContactSupport,
  MdManageAccounts,
} from 'components/icons'

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
