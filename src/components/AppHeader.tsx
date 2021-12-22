import React, { ReactElement } from 'react';
import { Menu, MenuItem, MenuList } from '@chakra-ui/menu'

function AppHeader(): ReactElement<any, any> {
  return (
    <Menu>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Change Location</MenuItem>
        <MenuItem>Trade</MenuItem>
        <MenuItem>Report Infected</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AppHeader;
