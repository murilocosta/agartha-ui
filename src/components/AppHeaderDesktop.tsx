import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { Button, HStack } from '@chakra-ui/react';

import { NavigationItem, NAVIGATION_ITEMS } from '../constants/navigationMenu';

function AppHeaderDesktop(): React.ReactElement {
  return (
    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
      {NAVIGATION_ITEMS.map((navItem: NavigationItem, index: number) => (
        <Button
          key={index}
          leftIcon={<navItem.icon />}
          variant={'ghost'}
          size={'sm'}
          as={RouterLink}
          to={navItem.href || '#'}
        >
          {navItem.label}
        </Button>
      ))}
    </HStack>
  );
};

export default AppHeaderDesktop;
