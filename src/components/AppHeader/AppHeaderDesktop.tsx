import React from 'react';
import { NavLink as RouterLink } from "react-router-dom";

import { Button, HStack } from '@chakra-ui/react';

import { NavigationItem, NAVIGATION_ITEMS } from '../../constants/navigationItemList';

function AppHeaderDesktop(): React.ReactElement {
  return (
    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
      {NAVIGATION_ITEMS.map((navItem: NavigationItem, index: number) => (
        <RouterLink key={index} to={navItem.href || '#'}>
          {({ isActive }) => (
            <Button
              leftIcon={<navItem.icon />}
              variant={'ghost'}
              size={'sm'}
              style={isActive ? { color: '#eb9528' } : undefined}
            >
              {navItem.label}
            </Button>
          )}
        </RouterLink>
      ))}
    </HStack>
  );
};

export default AppHeaderDesktop;
