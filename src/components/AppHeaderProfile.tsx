import React from 'react';
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import { NavigationItem, ANONYMOUS_USER_MENU_ITEMS } from '../constants/navigationMenu';

function AppHeaderProfile(): React.ReactElement {
  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} />
      </MenuButton>

      <MenuList>
        {ANONYMOUS_USER_MENU_ITEMS.map((navItem: NavigationItem) => (
          <MenuItem key={navItem.label} as={Link} to={navItem.href}>
            {navItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default AppHeaderProfile;
