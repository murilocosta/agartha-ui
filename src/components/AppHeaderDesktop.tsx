import React from 'react';
import { HStack, Link } from '@chakra-ui/react';

import { NavigationItem, NAVIGATION_ITEMS } from '../constants/navigationMenu';

export default function AppHeaderDesktop(): React.ReactElement {
  return (
    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
      {NAVIGATION_ITEMS.map((navItem: NavigationItem) => (
        <Link
          key={navItem.label}
          p={2}
          href={navItem.href || '#'}
          fontSize={'sm'}
          fontWeight={500}
        >
          {navItem.label}
        </Link>
      ))}
    </HStack>
  );
};
