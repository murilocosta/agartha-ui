export interface NavigationItem {
  label: string;
  href: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Home',
    href: '#/',
  },
  {
    label: 'Change Location',
    href: '#/survivors/change-location',
  },
  {
    label: 'Trade',
    href: '#/trades',
  },
  {
    label: 'Report Infected',
    href: '#/survivors/report-infected',
  },
];

export const ANONYMOUS_USER_MENU_ITEMS: NavigationItem[] = [
  {
    label: 'Register',
    href: '#/register',
  },
  {
    label: 'Login',
    href: '#/login',
  },
];

export const AUTHENTICATED_USER_MENU_ITEMS: NavigationItem[] = [
  {
    label: 'Inventory',
    href: '#/inventory',
  },
  {
    label: 'Logout',
    href: '#/logout',
  },
];
