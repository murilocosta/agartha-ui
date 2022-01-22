import React from 'react';
import { NavLink as RouterLink } from "react-router-dom";

import {
  Avatar,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import { NavigationItem, ANONYMOUS_USER_MENU_ITEMS, AUTHENTICATED_USER_MENU_ITEMS } from '../../constants/navigationItemList';
import { isAuthenticated } from '../../features/auth/authSlice';
import { useAppSelector } from '../../features/hooks';
import { selectProfile } from '../../features/survivor/survivorSlice';

function AppHeaderProfile(): React.ReactElement {
  const profile = useAppSelector(selectProfile);
  const isLoggedIn = useAppSelector(isAuthenticated);
  const userMenuItems = isLoggedIn ? AUTHENTICATED_USER_MENU_ITEMS : ANONYMOUS_USER_MENU_ITEMS;

  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} name={profile?.name} />
      </MenuButton>

      <MenuList>
        {userMenuItems.map((navItem: NavigationItem, index: number) => (
          <RouterLink key={index} to={navItem.href}>
            {({ isActive }) => (
              <MenuItem
                icon={<Icon as={navItem.icon} />}
                style={isActive ? { color: '#eb9528' } : undefined}
              >
                {navItem.label}
              </MenuItem>
            )}
          </RouterLink>
        ))}
      </MenuList>
    </Menu>
  );
}

export default AppHeaderProfile;
