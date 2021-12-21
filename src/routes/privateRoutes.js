import UI from 'pages/Guide/UI'
import Appointment from 'features/appointment'
import Services from 'features/services'
import Prescription from 'features/prescription'
import Reports from 'features/reports'
import Support from 'features/support'
import Account from 'features/account'

export const privateRoutes = [
  {
    name: 'Guide',
    path: 'guides',
    component: <UI />,
  },
  {
    name: 'Reports',
    path: 'reports',
    component: <Reports />,
  },
  {
    name: 'Appointment',
    path: 'appointments',
    component: <Appointment />,
  },
  {
    name: 'Prescription',
    path: 'prescription',
    component: <Prescription />,
  },
  {
    name: 'Services',
    path: 'services',
    component: <Services />,
  },
  {
    name: 'Support',
    path: 'support',
    component: <Support />,
  },
  {
    name: 'Account',
    path: 'account',
    component: <Account />,
  },
]
