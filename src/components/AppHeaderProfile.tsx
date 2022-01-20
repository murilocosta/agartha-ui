import React from 'react';
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import { NavigationItem, ANONYMOUS_USER_MENU_ITEMS, AUTHENTICATED_USER_MENU_ITEMS } from '../constants/navigationMenu';
import { useAppSelector } from '../features/hooks';
import { isAuthenticated } from '../features/auth/authSlice';

function AppHeaderProfile(): React.ReactElement {
  const isLoggedIn = useAppSelector(isAuthenticated);
  const userMenuItems = isLoggedIn ? AUTHENTICATED_USER_MENU_ITEMS : ANONYMOUS_USER_MENU_ITEMS;

  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} />
      </MenuButton>

      <MenuList>
        {userMenuItems.map((navItem: NavigationItem) => (
          <MenuItem key={navItem.label} icon={<Icon as={navItem.icon} />} as={Link} to={navItem.href}>
            {navItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default AppHeaderProfile;
