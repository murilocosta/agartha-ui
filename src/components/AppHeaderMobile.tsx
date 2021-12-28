import React from 'react';
import { Box, Link, Stack } from '@chakra-ui/react';

import { NavigationItem, NAVIGATION_ITEMS } from '../constants/navigationMenu';

export default function AppHeaderMobile(): React.ReactElement {
  return (
    <Box pb={4} display={{ md: 'none' }}>
      <Stack as={'nav'} spacing={4}>
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
      </Stack>
    </Box>
  );
};
