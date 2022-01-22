import {
  MdFlag,
  MdHome,
  MdInventory,
  MdLocationPin,
  MdLogin,
  MdLogout,
  MdPersonAdd,
  MdSwapHoriz
} from 'react-icons/md';

export interface NavigationItem {
  label: string;
  href: string;
  icon: any;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: MdHome,
  },
  {
    label: 'Change Location',
    href: '/survivors/change-location',
    icon: MdLocationPin,
  },
  {
    label: 'Trade',
    href: '/trades',
    icon: MdSwapHoriz,
  },
  {
    label: 'Report Infected',
    href: '/survivors/report-infected',
    icon: MdFlag,
  },
];

export const ANONYMOUS_USER_MENU_ITEMS: NavigationItem[] = [
  {
    label: 'Register',
    href: '/register',
    icon: MdPersonAdd,
  },
  {
    label: 'Login',
    href: '/login',
    icon: MdLogin,
  },
];

export const AUTHENTICATED_USER_MENU_ITEMS: NavigationItem[] = [
  {
    label: 'Inventory',
    href: '/inventory',
    icon: MdInventory,
  },
  {
    label: 'Logout',
    href: '/logout',
    icon: MdLogout,
  },
];
