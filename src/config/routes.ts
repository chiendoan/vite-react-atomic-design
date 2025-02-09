import {
  Home as HomeIcon,
} from '@mui/icons-material';

import { Route } from "@/types/Route";
import Home from '@/components/ui/pages/Home';
import Customer from '@/components/ui/pages/Customer';

const routes: Array<Route> = [
  {
    key: 'home',
    title: 'Home',
    description: 'Home',
    component: Home,
    path: '/home',
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: 'customer',
    title: 'Customer',
    description: 'Customer',
    component: Customer,
    path: '/customer',
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  }
]

export default routes;