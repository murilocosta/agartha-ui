import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { HStack, Link } from '@chakra-ui/react';

import { NavigationItem, NAVIGATION_ITEMS } from '../constants/navigationMenu';

function AppHeaderDesktop(): React.ReactElement {
  return (
    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
      {NAVIGATION_ITEMS.map((navItem: NavigationItem) => (
        <Link
          key={navItem.label}
          as={RouterLink}
          to={navItem.href || '#'}
          fontSize={'sm'}
          fontWeight={500}
          p={2}
        >
          {navItem.label}
        </Link>
      ))}
    </HStack>
  );
};

export default AppHeaderDesktop;
